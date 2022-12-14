/* Imports */
import { getAstroSigns, getBeanieBabies } from './fetch-utils.js';
import { renderAstroOption, renderBeanieBaby } from './render-babies.js';

/* Get DOM Elements */

const beanieBabyList = document.getElementById('beanie-baby-list');
const notificationDisplay = document.getElementById('notification-display');
const astroSignSelect = document.getElementById('astro-sign-select');
const searchForm = document.getElementById('search-form');
/* State */
let error = null;
let astroSigns = [];
let beanieBabies = [];
let count = 0;

/* Events */
window.addEventListener('load', async () => {
    findBeanies();
    const response = await getAstroSigns();

    error = response.error;
    astroSigns = response.data;
    if (!error) {
        displayAstroOptions();
    }
});

async function findBeanies(name, astroSign) {
    const response = await getBeanieBabies(name, astroSign);

    error = response.error;
    beanieBabies = response.data;
    count = response.count;

    displayNotifications();
    if (!error) {
        displayBeanies();
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    findBeanies(formData.get('name'), formData.get('astroSign'));
});

/* Display Functions */

function displayBeanies() {
    beanieBabyList.innerHTML = '';

    for (const beanieBaby of beanieBabies) {
        const beanieBabyEl = renderBeanieBaby(beanieBaby);
        beanieBabyList.append(beanieBabyEl);
    }
}

function displayNotifications() {
    if (error) {
        notificationDisplay.classList.add('error');
        notificationDisplay.textContent = error.message;
    } else {
        notificationDisplay.classList.remove('error');
        notificationDisplay.textContent = `showing ${beanieBabies.length} of ${count} matching beanie babies`;
    }
}
function displayAstroOptions() {
    for (const astroSign of astroSigns) {
        const option = renderAstroOption(astroSign);
        astroSignSelect.append(option);
    }
}

// (don't forget to call any display functions you want to run on page load!)
