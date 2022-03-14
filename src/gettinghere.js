import weAreHereImg from './wearehere.jpeg';

export default function showGettingHere(sectionContainer) {

    
    const gettingHereP = document.createElement("p");
    gettingHereP.classList.add("mainSection");
    gettingHereP.classList.add("gettingHere");
    gettingHereP.textContent = "Please take a look at the map below which shows precisely where we are located.  Come down the moutain and take a sharp left at the end of the ski run.  Once on the path, turn right and we're on your right.";
    sectionContainer.appendChild(gettingHereP);

    const weAreHereEle = new Image();
    weAreHereEle.classList.add("weAreHereImg");
    weAreHereEle.alt = "image showing map and a pin of our location.";
    weAreHereEle.src = weAreHereImg;
    sectionContainer.appendChild(weAreHereEle);
  }
  