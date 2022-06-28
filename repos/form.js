const form = document.querySelector('#formShelter');
const input = document.querySelector('#catname');
const list = document.querySelector('#cats');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const catName = input.value;
    const newli = document.createElement('li');
    newli.innerText = catName;
    console.log(newli);
    list.append(newli);
    input.value = '';
});

// const input = document.querySelector('input');

// const h1 = document.querySelector('h1');
// input.addEventListener('change',function(e){
//     console.log("Dry")
// })

// input.addEventListener('input',function(e){
//     h1. innerText = input.value;
//     console.log(e);
// })

