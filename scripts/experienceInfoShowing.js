/*
 * Experience info showing.
*/

/*
 * experiencesButtons' ids will be the keys to the experienceInfo's to display
 */

import experienceInfos from './experienceInfos.js';

const experiencesButtons = document.getElementsByClassName("experiencesButton");
const experienceInfoParagraph = document.getElementById("experiencesInfo");

for (let i = 0; i < experiencesButtons.length; i++) {
    const button  = experiencesButtons[i];
    button.onclick = function() {
        const experiencesInfo = experienceInfos[button.id];
        if (!experiencesInfo) return;
        experienceInfoParagraph.innerHTML = experienceInfos[button.id];
    }
}
