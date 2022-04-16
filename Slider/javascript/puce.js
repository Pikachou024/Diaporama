let listePuces = document.querySelectorAll(".NavPuce-listepuce-puce");
for (let i = 0; i < listePuces.length; i++) {
    listePuces[i].addEventListener("click", clickPuce);
}

function clickPuce(event) {

    let onClickPuce = event.currentTarget;
    let newindex = onClickPuce.dataset.index;
    index = parseInt(newindex, 10);

    cacheImage();
    afficheImage();
    flecheGauche.addEventListener("click", imagePrecedente);
    flecheDroite.addEventListener("click", imageSuivante);
    if (index == 0) {
        flecheGauche.removeEventListener("click", imagePrecedente);
    }
    if (index == imagesListMax - 1) {
        flecheDroite.removeEventListener("click", imageSuivante);
        play.removeEventListener("click", startDiapo);
    }
}