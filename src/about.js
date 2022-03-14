export default function showAbout(sectionContainer) {

    
    const aboutP1 = document.createElement("p");
    aboutP1.classList.add("mainSection");
    aboutP1.classList.add("about");
    aboutP1.textContent = "Located in the heart of the CBD, boasting riverside views, This Restaurant is one of most iconic restaurants in the city.  With everything from mouth watering steaks cooked to your taste, to the freshest produce on the menu, the signature experience is one to behold.  The decadent decor, including lovely chairs to sit on, set the tone for an evening of relaxed and exciting, memorable dining. The perfect setting for any occasion or celebration.";
    sectionContainer.appendChild(aboutP1);

    const aboutP2 = document.createElement("p");
    aboutP2.classList.add("mainSection");
    aboutP2.classList.add("about");
    aboutP2.textContent = "With seasoned professionals at the helm, your meal will be completed by attentive and impeccable service.  View our award winning food and beverage menus online, or learn more about our intimate private dining rooms.";
    sectionContainer.appendChild(aboutP2);

    
  }
  