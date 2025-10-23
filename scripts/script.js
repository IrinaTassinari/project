new WOW().init();

new WOW({
  boxClass: 'wow',      // класс элементов для анимации
  animateClass: 'animate__animated',
  offset: 100,          // на сколько пикселей до появления элемента запускать анимацию
  mobile: true,         // включить на мобильных
  live: true            // обновлять при динамической загрузке контента
}).init();

const btnGreen = document.getElementById('go-forward')
if(btnGreen){
    btnGreen.addEventListener('click', () => {
    window.location.href = './index2.html'
})
}


const btnGoBack = document.getElementById('btn-go-back')
if(btnGoBack){
    btnGoBack.addEventListener('click', () => {
    window.location.href = './index.html'
})
}


// Если ты подключил один и тот же script.js на обе страницы (index.html и index2.html),
// то на первой странице кнопки btn-go-back нет → появляется ошибка.
