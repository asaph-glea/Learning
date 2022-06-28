const btn = document.querySelector('#v2')
btn.onclick = function(){
  console.log("You clicked me");
}

function scream(){
  console.log('AHHHHHHHHHHHH')
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick = () =>{
  alert('Dick head')
}

const buttn2 = document.querySelector('#v3');

buttn2.addEventListener('click',() =>{ alert('Welcome to the webpage')})

function twist(){
  console.log('Twist');
}

function shout(){
  console.log('Shouting');
}

const tash = document.querySelector('#tas');


tash.addEventListener('click',twist);
tash.addEventListener('click', shout);