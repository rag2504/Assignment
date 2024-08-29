// Function to toggle menu
function toggleMenu() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}

// Get the popup and close elements
var popupForm = document.getElementById("popupForm");
var openPopupBtn = document.getElementById("openPopup");
var closePopupBtn = document.querySelector(".close");

// When the user clicks the button, open the popup
openPopupBtn.onclick = function() {
    popupForm.style.display = "block";
}

// When the user clicks on the close button, close the popup
closePopupBtn.onclick = function() {
    popupForm.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
}
document.querySelector('.menu-icon').addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.nav-links').classList.toggle('active');
        });
// Add scroll animation to "Why Us" section
window.addEventListener('scroll', function() {
    const whyUsSection = document.querySelector('.why-us');
    const sectionPosition = whyUsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        whyUsSection.classList.add('active');
    }
});
