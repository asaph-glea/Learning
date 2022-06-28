const formLogin = document.querySelector('#formLogin');
const finame = document.querySelector('#fname');
const laname = document.querySelector('#lname');
const unList = document.querySelector('#unList');
// const lis = document.querySelectorAll('li');
// for( let li of lis){
//     li.addEventListener('click', function(){
//         li.remove();
//     })
// }

formLogin.addEventListener('submit',function(e){
    e.preventDefault();
    let fnametxt =  finame.value;
    let lanametxt =  laname.value;
    let newList = document.createElement('li');
    newList.innerText = `${fnametxt} ${lanametxt}`;
    unList.append(newList);
    fnametxt.value = '';
    lanametxt.value = '';
})

unList.addEventListener('click', function(e){
    e.target.remove();
})