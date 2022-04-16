let play = document.querySelector(".fa-solid.fa-circle-play");
play.addEventListener("click", startDiapo);

let pause = document.querySelector(".fa-solid.fa-circle-pause");
pause.addEventListener("click", pauseDiapo);

function startDiapo() {
    arret = setInterval(diapoImage, 1500);
    play.classList.add("hide");
    pause.classList.remove("hide");
    function diapoImage() {
        if (index == imagesListMax - 2) {
            pauseDiapo()
        }
        imageSuivante();
    }
};

function pauseDiapo() {
    clearInterval(arret)
    pause.classList.add("hide");
    play.classList.remove("hide");
};