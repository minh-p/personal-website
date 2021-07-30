/*
 * Experience info showing.
*/

/*
 * experiencesButtons' ids will be the keys to the experienceInfo's to display
 */

const experiencesButtons = document.getElementsByClassName("experiencesButton");

for (let i = 0; i < experiencesButtons.length; i++) {
    const button  = experiencesButtons[i];
    button.onclick = function() {
        console.log("experience button clicked");
    }
}
