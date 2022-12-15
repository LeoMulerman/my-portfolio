let text = document.querySelector('#text');
let main = document.querySelector('main');
let h1 = document.querySelector('#h1');

main.addEventListener('click', function () {
    text.classList.remove('active')
    h1.style.color = 'orange';
})

