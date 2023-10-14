function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const bodyElement = document.body;
const changeColorButton = document.querySelector('.change-color');


changeColorButton.addEventListener('click', handlerChangeColor);

function handlerChangeColor(event) {
  bodyElement.style.backgroundColor = getRandomHexColor();
};