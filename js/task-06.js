const nameInput = document.getElementById('validation-input');

nameInput.addEventListener('blur', handlerCheckLength);

function handlerCheckLength(event) {
    const dataLength = Number(nameInput.getAttribute('data-length'));
    const currentLength = event.currentTarget.value.length;
    nameInput.classList.remove('valid');
    nameInput.classList.add('invalid')
    
    if (dataLength === currentLength) {
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
    };
};
