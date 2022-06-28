// const button = document.querySelector('button');

// button.addEventListener('click', function (evt){
//     console.log(evt);
// })

const changecol = document.querySelector('#changeButt');
const container = document.querySelector('#container');

container.addEventListener('click', function(){
    container.classList.toggle('hide');
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(e){
//     console.log(e.key);
//     console.log(e.code);
// })
// input.addEventListener('keyup', function(){
//     console.log('Key up')
// })

// window.addEventListener('keydown', function(e){
//     switch(e.code){
//         case 'ArrowUp':
//     console.log("Up")
//     break;
//         case "ArrowDown":
//         console.log('Down')
//     break;
//     default:
//     console.log('ignored');
// }
// })