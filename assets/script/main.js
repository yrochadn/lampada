const btn = document.querySelectorAll('button');
const img = document.querySelector('img');
const body = document.querySelector('body')

function onLight(){
    img.src = './assets/img/on.gif'
    alert('A luz está ligada!');
    body.classList.remove('dark')
} 

function offLight(){
    img.src = './assets/img/off.gif'
    alert('Desligando.....');
    body.classList.add('dark')
    
}