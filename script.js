const colorMapping = {
  mamie: "--color-mamie",
  maman: "--color-maman",
  peppa: "--color-peppa",
  papi: "--color-papi",
  papa: "--color-papa",
  george: "--color-george",
};

document.addEventListener("DOMContentLoaded", function () {
  const cardNames = document.querySelectorAll(".card-name");
  cardNames.forEach((cardName) => {
    const parentCard = cardName.closest(".card");
    const className = parentCard.classList[1];
    const colorVariable = colorMapping[className];
    cardName.style.color = `var(${colorVariable})`;
  });
});

const sounds = document.getElementsByClassName("sound");

for (const sound of sounds) {
  sound.addEventListener("click", (event) => {
    const name = event.target.getAttribute("data-sound");
    const audio = document.getElementById(name);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  });
}
