/* Imports */
import { getAstros, getBeanieBabies } from './fetch-utils.js';
import { renderAstroOption, renderBeanieBaby } from './render-babies.js';

/* Get DOM Elements */

const beanieBabyList = document.getElementById('beanie-baby-list');
const notificationDisplay = document.getElementById('notification-display');
const astroSignSelect = document.getElementById('astro-sign-select');
/* State */
let error = null;
let astroSigns = [];
let beanieBabies = [];

/* Events */
window.addEventListener('load', async () => {
    findBeanies();
    const response = await getAstros();

    error = response.error;
    astroSigns = response.data;
    if (!error) {
        displayAstroOptions();
    }
});

async function findBeanies() {
    const response = await getBeanieBabies();

    error = response.error;
    beanieBabies = response.data;

    displayNotifications();
    if (!error) {
        displayBeanies();
    }
}

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
    }
}
function displayAstroOptions() {
    for (const astroSign of astroSigns) {
        const option = renderAstroOption(astroSign);
        astroSignSelect.append(option);
    }
}

// (don't forget to call any display functions you want to run on page load!)
