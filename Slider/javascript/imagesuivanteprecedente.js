let flecheDroite = document.querySelector(".fa-solid.fa-arrow-right")
flecheDroite.addEventListener("click", imageSuivante);

let flecheGauche = document.querySelector(".fa-solid.fa-arrow-left");
flecheGauche.addEventListener("click", imagePrecedente);

function imageSuivante() {
    index++
    afficheImage();
    if (index == imagesListMax - 1) {
        flecheDroite.removeEventListener("click", imageSuivante);
        clearInterval(arret)
    }
    flecheGauche.addEventListener("click", imagePrecedente);
}
if (index == 0) {
    flecheGauche.removeEventListener("click", imagePrecedente);
}
function imagePrecedente() {
    index--;
    afficheImage();

    if (index == 0) {
        flecheGauche.removeEventListener("click", imagePrecedente);
    }
    flecheDroite.addEventListener("click", imageSuivante);
}