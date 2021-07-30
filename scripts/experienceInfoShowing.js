/*
 * Experience info showing.
*/

const experiencesButtons = document.getElementsByClassName("experiencesButton");

/*
 * experiencesButtons' ids will be the keys to the experienceInfo's to display
 */

for (let i = 0; i < experiencesButtons.length; i++) {
    const button  = experiencesButtons[i];
    button.onclick = function() {
        console.log("experience button clicked");
    }
}
