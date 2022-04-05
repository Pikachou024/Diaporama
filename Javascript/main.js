// let largeur = innerWidth;
// if (innerWidth <= 705) {
//     console.log(innerWidth);
// document.querySelector(".SectionFleche-gauche").classList.toggle("order1")
// }
// else {
//     document.querySelector(".SectionFleche-gauche").classList.toggle("order1")
// }

let mainindex
mainindex = 0
let tableauPictures = document.querySelectorAll(".ListImages img")

let arret;
let image;
image = document.querySelector(".image01");
image.classList.add("affiche");

function afficheImage() {
    for (let j = 0; j < tableauPictures.length; j++) {
        tableauPictures[j].classList.remove("affiche")
    }
    tableauPictures[mainindex].classList.add("affiche");
}

let FlecheDroite;
FlecheDroite = document.querySelector(".SectionFleche-droite");
FlecheDroite.addEventListener("click", AfficheCacheD)

function AfficheCacheD() {
    mainindex++
    afficheImage()
    console.log(mainindex);
    if (mainindex == 6) {
        FlecheDroite.removeEventListener("click", AfficheCacheD)
        clearInterval(arret)
    }
    FlecheGauche.addEventListener("click", AfficheCacheG);
}

let FlecheGauche;
FlecheGauche = document.querySelector(".SectionFleche-gauche");
FlecheGauche.addEventListener("click", AfficheCacheG);

function AfficheCacheG() {
    mainindex--
    afficheImage()
    if (mainindex == 0) {
        FlecheGauche.removeEventListener("click", AfficheCacheG)
    }
    FlecheDroite.addEventListener("click", AfficheCacheD)

}

let sectionPlay;
sectionPlay = document.querySelector(".SectionButton-play");
sectionPlay.addEventListener("click", playDiapo);

function playDiapo() {
    arret = setInterval(diapoImage, 2000);
    function diapoImage() {
        AfficheCacheD()
    }

    let sectionPause;
    sectionPause = document.querySelector(".SectionButton-pause");
    sectionPause.addEventListener("click", function () {
        clearInterval(arret)
    });
}

let tableauPuces = document.querySelectorAll(".HeaderPuce div")
for (let i = 0; i < tableauPuces.length; i++) {
    tableauPuces[i].addEventListener("click", clickPuce);
}

function clickPuce(event) {
    for (let j = 0; j < tableauPictures.length; j++) {
        tableauPictures[j].classList.remove("affiche")
    }
    let onClickPuce = event.currentTarget;
    let newindex = onClickPuce.dataset.index;
    mainindex = parseInt(newindex)
    afficheImage()
    FlecheGauche.addEventListener("click", AfficheCacheG);
    FlecheDroite.addEventListener("click", AfficheCacheD)


}