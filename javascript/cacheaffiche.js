let index = 0;
let arret;
let imagesList = document.querySelectorAll(".ContentPicture-list-img");
let imagesListMax = imagesList.length;

function cacheImage() {
    for (let j = 0; j < imagesList.length; j++) {
        imagesList[j].classList.remove("affiche");
        listePuces[j].classList.remove("red")
    }
}
function afficheImage() {
    play.addEventListener("click", startDiapo);
    cacheImage();
    imagesList[index].classList.add("affiche");
    if (imagesList[index].classList.contains("affiche") == true) {
        listePuces[index].classList.add("red")
        if (imagesList[imagesListMax - 1].classList.contains("affiche") == true) {
            play.removeEventListener("click", startDiapo);
        }
    }
}