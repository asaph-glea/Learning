
// setTimeout(() =>{
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() =>{
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() =>{
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() =>{
//                 document.body.style.backgroundColor = 'blue';
//                 setTimeout(() =>{
//                     document.body.style.backgroundColor = 'brown';
//                 },1000);
//             },1000);
//         },1000);
//     },1000);   
// },1000);

// const delayColor = (newcolor, delay, doNext) =>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor = newcolor;
//         doNext();
//     }, delay)
// }
// delayColor('olive', 1000 ,() =>{
//     delayColor('magenta', 1000,() =>{
//         delayColor('purple', 1000,() =>{
//             delayColor('blue', 1000,() =>{
//                 delayColor('grey', 1000,() =>{
        
//                 })
//             })
//         })
//     })
// });

const delayColorChange = (color, delay) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            document.body.style.backgroundColor= color;
            resolve();
        },delay)
    })
}
// delayColorChange('red',1000)
// .then(()=> delayColorChange('green',1000))
// .then(()=> delayColorChange('grey',1000))
// .then(()=> delayColorChange('orange',1000))
// .then(()=> delayColorChange('teal',1000))
// .then(()=> delayColorChange('magenta',1000))
// .then(()=> delayColorChange('pink',1000))
// .then(()=> delayColorChange('brown',1000))

async function rainBow(){
    await delayColorChange('red',1000)
    await delayColorChange('grey',1000)
    await delayColorChange('orange',1000)
    await delayColorChange('yellow',1000)
    await delayColorChange('teal',1000)
    return "All Done"
    
}

async function printRain(){
    await rainBow();
    console.log('End')
}

printRain();