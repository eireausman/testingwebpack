export default function showMenu(sectionContainer) {

    
  const menuP1 = document.createElement("p");
  menuP1.classList.add("mainSection");
  menuP1.classList.add("gettingHere");
  menuP1.setAttribute('style', 'white-space: pre;');
  menuP1.textContent = "Menu... Menu.... Menu.... Menu.... Menu.... Menu.... Menu.... this";
  sectionContainer.appendChild(menuP1);

  const menuP2 = document.createElement("p");
  menuP2.classList.add("mainSection");
  menuP2.classList.add("gettingHere");
  menuP2.textContent = "Menu... Menu.... Menu.... Menu.... Menu.... Menu.... Menu.... ";
  sectionContainer.appendChild(menuP2);
  }
  