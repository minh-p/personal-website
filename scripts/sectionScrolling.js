console.log("Hello World");

// Section Scrolling

const homeSection = document.getElementById("homeSection");
const aboutSection = document.getElementById("aboutSection");

function scroll(section) {
    // Scrolling functionality?
    // Math to get the appropriate scrolling position?
    window.scrollTo(0, section.scrollTop);
}

// Event listening when navigation links are pressed?
const navigationLinks = document.getElementsByClassName("navigationLinks");

// Set up navigationLinks click event.
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].onclick = function() {
        console.log("Link clicked");
        scroll(aboutSection);
    }
}
