/*
 * Snap to scroll section
 */

// on scroll event
// decide what section the player is seeing based on the scroll
// then snap to scroll if met necessary conditions.

let sectionsScrollYPositions = [];

function setSectionsScrollYPositions() {
    const sections = document.getElementsByTagName("section");
    sectionsScrollYPositions = [];

    let sectionsTotalScrollHeight = -sections[0].scrollHeight;

    for (let i = 0; i < sections.length; i++) {
        sectionsTotalScrollHeight += sections[i].scrollHeight;
        sectionsScrollYPositions.push(sectionsTotalScrollHeight);
    }
}

function getNearestSectionIndex(currentScrollY) {
    // Difference in scrollYPosition must be the least for nearest section.
    let bestDifferenceInScrollHeight = 0;
    let nearestSectionIndex = 0;

    for (let i = 0; i < sectionsScrollYPositions.length; i++) {
        const differenceInScrollHeight = Math.abs(currentScrollY - sectionsScrollYPositions[i]);
        if (i == 0 || differenceInScrollHeight < bestDifferenceInScrollHeight) {
            bestDifferenceInScrollHeight = differenceInScrollHeight;
            nearestSectionIndex = i;
        }
    }

    return nearestSectionIndex;
}

setSectionsScrollYPositions();
// scrollYPositions of sections will be changed every time window's height is resized.
window.addEventListener("resize", setSectionsScrollYPositions);

let currentSectionIndex = 0;
// gonna make a delay for snapping to section.
let timeoutId;

// onscroll event
document.onscroll = function() {
    if(timeoutId) {
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(function() {
        // nearestSectionIndex as in the index in an array of all the sections.
        const nearestSectionIndex = getNearestSectionIndex(window.scrollY);

        // will only snap if nearest section is changed.
        if (nearestSectionIndex == currentSectionIndex) return;

        // scroll to snap sectionsScrollYPosition of nearest section.
        window.scrollTo(0, sectionsScrollYPositions[nearestSectionIndex]);
        currentSectionIndex = nearestSectionIndex;
    }, 100);
}
