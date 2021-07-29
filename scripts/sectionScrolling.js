// Section Scrolling

const homeSection = document.getElementById("homeSection");
const aboutSection = document.getElementById("aboutSection");

function getSectionFromNavigationLink(navigationLinkElement) {
    /*
     * There is a hashtag in the href/url.
     * To get the sectionId, we remove everything before it, in the href string.
    */
    const hashtagPosition = navigationLinkElement.href.search('#');
    const sectionId = navigationLinkElement.href.slice(hashtagPosition + 1).concat("Section");
    return document.getElementById(sectionId);
}

function scroll(section) {
    // Scrolling functionality?
    // Math to get the appropriate scrolling position?

    if (!section) console.log("no section"); return;
}

// Event listening when navigation links are pressed?
const navigationLinks = document.getElementsByClassName("navigationLink");

// Set up navigationLinks click event.
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].onclick = function() {
        // scroll(getSectionFromNavigationLink(navigationLinks[i]));
    }
}

/* get current scroll top position like this:
 * document.documentElement.scrollTop
*/
