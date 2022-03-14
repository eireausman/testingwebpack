export default function showMenu(sectionContainer) {

    
    const menuP = document.createElement("p");
    menuP.classList.add("mainSection");
    menuP.classList.add("gettingHere");
    menuP.textContent = "Menu... Menu.... Menu.... Menu.... Menu.... Menu.... Menu.... ";
    sectionContainer.appendChild(menuP);
  }
  