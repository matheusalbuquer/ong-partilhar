document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#menu');
    const nav = document.querySelector('#nav');

    let isOpen = false;

    menu.addEventListener('click', () => {
        if (!isOpen) {
            nav.classList.add('ativo');
            isOpen = true;
        } else {
            nav.classList.remove('ativo');
            isOpen = false;
        }
    });
});
