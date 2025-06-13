function scrollElementLeft(elementId) {
    const showcase = document.getElementById(elementId);
    if (showcase && showcase.firstElementChild) {
        const tileWidth = showcase.firstElementChild.getBoundingClientRect().width;
        showcase.scrollBy({ left: -tileWidth, behavior: 'smooth' });
    }
}

function scrollElementRight(elementId) {
    const showcase = document.getElementById(elementId);
    if (showcase && showcase.firstElementChild) {
        const tileWidth = showcase.firstElementChild.getBoundingClientRect().width;
        showcase.scrollBy({ left: tileWidth, behavior: 'smooth' });
    }
}
