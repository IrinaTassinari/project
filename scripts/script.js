new WOW().init();

new WOW({
  boxClass: 'wow',      // класс элементов для анимации
  animateClass: 'animate__animated',
  offset: 100,          // на сколько пикселей до появления элемента запускать анимацию
  mobile: true,         // включить на мобильных
  live: true            // обновлять при динамической загрузке контента
}).init();

const btnGreen = document.querySelector('.btn-green')
btnGreen.addEventListener('click', () => {
    window.location.href = './index2.html'
})