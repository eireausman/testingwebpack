export default function showAbout(sectionContainer) {

    
    const aboutP = document.createElement("p");
    aboutP.classList.add("mainSection");
    aboutP.classList.add("about");
    aboutP.textContent = "All about us content";
    sectionContainer.appendChild(aboutP);
  }
  