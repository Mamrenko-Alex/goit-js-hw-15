const loginForm = document.querySelector('.login-form');
const email = loginForm.elements.email;
const password = loginForm.elements.password;

loginForm.addEventListener('submit', handlerValidation);

function handlerValidation(event) {
    event.preventDefault();

    const currentEmail = email.value;
    const currentPassword = password.value

    if (currentEmail.trim() === '' || currentPassword === '') {
        alert('Усі поля повинні бути заповнені');
    } else {
        const result = {
            email: currentEmail,
            password: currentPassword,
        };

        console.log(result);
        loginForm.reset();
    }
};
/*
Тут без вкладеності не зміг обійтись, бо вирішив що при alert краще зберегти
поля які користувач ввів. Типу юзерекспіріенс. Щоб користувач, у разі помилки
не мусив вводити всі данні заново, а просто мав можливість заповнити 
недостаючі поля.
*/