const nameInput = document.getElementById('font-size-control');
const nameText = document.getElementById('text');

nameInput.addEventListener('input', handlerChangeSize);

function handlerChangeSize(event) {
    const size = event.currentTarget.value
    nameText.style.fontSize = `${size}px`
};

nameText.style.fontSize = `${nameInput.value}px`;