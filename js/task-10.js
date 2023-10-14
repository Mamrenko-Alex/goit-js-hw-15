function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

// Елементи з якими будемо працювати
const quantityElements = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Підключаємо події
createButton.addEventListener('click', handlerCreateSet);
destroyButton.addEventListener('click', handlerDestroySet);

// Функція на додання карток
function createBoxes(amount) {
  let result = ''
  const boxSize = 30

  for (let i = 0; i < amount; i++) {
    const backgroundColor = getRandomHexColor();
    const currentSize = `${boxSize + i * 10}px`;
    result += `<div 
    class="color-${backgroundColor}"
    style="background-color: ${backgroundColor}; width: ${currentSize}; height: ${currentSize}">
    </div>`;
  };
  return result
}

// Відслідковувач подій "create"
function handlerCreateSet(event) {
  const amount = quantityElements.value;

  if (!amount || Number(amount) === 0) {
    alert('Введіть число більше 0')
  } else {
    boxesContainer.innerHTML = createBoxes(amount)
  }
  quantityElements.value = ''
};

// Відслідковувач подій "destroy"
function handlerDestroySet() {
  boxesContainer.innerHTML = ''
}
