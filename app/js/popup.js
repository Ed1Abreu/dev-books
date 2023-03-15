const botao = document.querySelector('#link-CEP');
const popup = document.querySelector('.popup-wrapper');


botao.addEventListener('click', () => {
    popup.style.display = 'block';
})

popup.addEventListener('click', event => {
    const classNameOfClikedElement = event.target.classList[0];
    const classNames = ['popup-close','popup-wrapper','popup-link'];
    const shouldClosePopUp = classNames.some(className =>
         className === classNameOfClikedElement);
    
    if (shouldClosePopUp) {
        popup.style.display = 'none';
    }
})
