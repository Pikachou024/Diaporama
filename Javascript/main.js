let tableau;
let i;
let arret;


let FlecheDroite;
FlecheDroite = document.querySelector(".SectionFleche-droite");
FlecheDroite.addEventListener("click", AfficheCacheD)

let image;
image = document.querySelector(".image01");
image.classList.add("affiche");


i = 0

function AfficheCacheD(tableau) {

    tableau = [".image01", ".image02", ".image03", ".image04", ".image05", ".image06", ".image07"];
    document.querySelector(tableau[i]).classList.remove("affiche");
    i++
    document.querySelector(tableau[i]).classList.add("affiche");

    if (i == 6) {
        FlecheDroite.removeEventListener("click", AfficheCacheD)
        clearInterval(arret)
    }
    FlecheGauche.addEventListener("click", AfficheCacheG);

}



let FlecheGauche;
FlecheGauche = document.querySelector(".SectionFleche-gauche");
FlecheGauche.addEventListener("click", AfficheCacheG);
function AfficheCacheG(tableau) {
    tableau = [".image01", ".image02", ".image03", ".image04", ".image05", ".image06", ".image07"];
    document.querySelector(tableau[i]).classList.remove("affiche");
    document.querySelector(tableau[i - 1]).classList.add("affiche");
    i--
    if (i == 0) {
        FlecheGauche.removeEventListener("click", AfficheCacheG)

    }
    FlecheDroite.addEventListener("click", AfficheCacheD)
}


let sectionPlay;
sectionPlay = document.querySelector(".SectionButton-play");
sectionPlay.addEventListener("click", playDiapo);

function playDiapo() {
    arret = setInterval(diapoImage, 1000);

    function diapoImage() {
        tableau = [".image01", ".image02", ".image03", ".image04", ".image05", ".image06", ".image07"];
        AfficheCacheD(tableau)
        console.log("hola");
    }
    let sectionPause;
    sectionPause = document.querySelector(".SectionButton-pause");
    sectionPause.addEventListener("click", function () {
        clearInterval(arret)
    });
}
let allbuton;
allbuton = document.querySelectorAll(".HeaderPuce div");
console.log(allbuton);
// for (let index = 0, index < ; index++ )
allbuton.addEventListener("click", navButton);

function navButton() {
    console.log("coucou");
}




