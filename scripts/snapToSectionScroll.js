/*
 * Snap to scroll section
 */

const sections = document.getElementsByTagName("section");

// on scroll event
// decide what section the player is seeing based on the scroll
// then snap to scroll if met necessary conditions.

let sectionsScrollYPositions = [];

function setSectionsScrollYPositions() {
    setSectionsScrollYPositions = [];

    // will increase with them sections
    let sectionsScrollHeight = -sections[0].scrollHeight;

    for (let i = 0; i < sections.length; i++) {
        sectionsScrollHeight += sections[i].scrollHeight;
        sectionsScrollYPositions.push(sectionsScrollHeight);
    }
}

function getNearestSectionScrollYPosition(currentScrollY) {
    /*
     * Difference in scrollYPosition must be the least for nearest section.
     */
    let bestDifference = 0;
    let nearestSectionIndex = 0;

    for (let i = 0; i < sectionsScrollYPositions.length; i++) {
        const difference = Math.abs(currentScrollY - sectionsScrollYPositions[i]);
        if (i == 0 || difference < bestDifference) {
            bestDifference = difference;
            nearestSectionIndex = i;
        }
    }

    return sectionsScrollYPositions[nearestSectionIndex];
}

setSectionsScrollYPositions();

// make a delay for snapping to section.
let timeoutId;

// onscroll event
document.onscroll = function() {
    if(timeoutId) {
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(function() {
        const nearestSectionScrollYPosition = getNearestSectionScrollYPosition(window.scrollY);
        window.scrollTo(0, nearestSectionScrollYPosition);
    }, 100);
}
