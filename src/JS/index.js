const buttonChangeTheme = document.getElementById("button-change-theme");
const body = document.querySelector("body");
const imageButton = document.querySelector(".img-button");

buttonChangeTheme.addEventListener("click",() => {

    const modeDarkActive = body.classList.contains("mode-dark");

    body.classList.toggle("mode-dark");

    if(modeDarkActive) {
       imageButton.setAttribute("src", "src/imagens/sun.png");
    } else{
       imageButton.setAttribute("src", "src/imagens/moon.png");
    }
});