import './style.css';
import intialSetUp from './initialSetUp.js';
import showAbout from './about.js';
import showGettingHere from './gettinghere.js';
import showMenu from './menu.js';


intialSetUp();

const containerDiv = document.querySelector(".sectionContainer");
const navAbout = document.querySelector(".navAbout");
const navGettingHere = document.querySelector(".navGettingHere");
const navMenu = document.querySelector(".navMenu");

navAbout.addEventListener('click', function(e) {
    clearcontainer();
    showAbout(containerDiv);
});
navGettingHere.addEventListener('click', function(e) {
    clearcontainer();
    showGettingHere(containerDiv);
});
navMenu.addEventListener('click', function(e) {
    clearcontainer();
    showMenu(containerDiv);
});


function clearcontainer() {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
        }
}


// call any functions with tabContainerDiv so it can be appended to


