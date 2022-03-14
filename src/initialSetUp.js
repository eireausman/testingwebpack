import restImage from './restaurant.jpeg';


export default function intialSetUp() {
    const contentDiv = document.createElement("div");
contentDiv.classList.add("content")
const theBody = document.querySelector("body");
theBody.appendChild(contentDiv);

const navDiv = document.createElement("div");
navDiv.classList.add("nav");
contentDiv.appendChild(navDiv);

const navDivPAbout = document.createElement("p");
navDivPAbout.textContent = "About Us";
navDivPAbout.classList.add("navItem");
navDivPAbout.classList.add("navAbout");
navDiv.appendChild(navDivPAbout);

const navDivPGettingHere= document.createElement("p");
navDivPGettingHere.textContent = "Getting Here";
navDivPGettingHere.classList.add("navItem");
navDivPGettingHere.classList.add("navGettingHere");
navDiv.appendChild(navDivPGettingHere);

const navDivPMenu = document.createElement("p");
navDivPMenu.textContent = "Menu";
navDivPMenu.classList.add("navItem");
navDivPMenu.classList.add("navMenu");
navDiv.appendChild(navDivPMenu);

const headerDiv = document.createElement("header");
headerDiv.classList.add("header");
headerDiv.textContent = "This restaurant";
contentDiv.appendChild(headerDiv);

const restImageEl = new Image();
restImageEl.classList.add("restaurantImage");
restImageEl.src = restImage;
contentDiv.appendChild(restImageEl);

const tabContainerDiv = document.createElement("div");
tabContainerDiv.classList.add("sectionContainer");
contentDiv.appendChild(tabContainerDiv);

}