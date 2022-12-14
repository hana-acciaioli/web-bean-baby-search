export function renderBeanieBaby(beanieBaby) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = beanieBaby.image;
    img.alt = beanieBaby.title;

    const content = document.createElement('div');
    content.classList.add('content');

    const h2 = document.createElement('h2');
    h2.textContent = beanieBaby.title;

    const attributes = document.createElement('p');
    attributes.classList.add('attributes');

    const animal = document.createElement('span');
    animal.textContent = beanieBaby.animal;

    const subtheme = document.createElement('span');
    subtheme.textContent = beanieBaby.subtheme;

    const astroSign = document.createElement('span');
    astroSign.textContent = beanieBaby.astroSign;
    attributes.classList.add('attributes');

    const released = document.createElement('p');
    released.classList.add('released');
    released.textContent = `Released ${beanieBaby.releaseYear}`;

    content.append(h2, attributes, animal, astroSign, released);

    li.append(img, content);

    return li;
}

export function renderAstroOption(astroSign) {
    const option = document.createElement('option');
    option.value = astroSign.name;
    option.textContent = astroSign.name;
    return option;
}
