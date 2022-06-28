// function bankrobber(){
//   const heroes = ['spider','super','wonder','wolverine','panther']
//   function cryforhelp(){
//     for(let hero of heroes){
//       console.log(`please help us ${hero.toUpperCase()}`);
//     }
//   }
//   cryforhelp();
// }

// function add(y,u){
//   return y+u;
// }

// const mult = function(t,i){
//   return t*i;
// }
function calltwice(func){
  func();
  func();
}

function rolldie(){
  const random = Math.floor(Math.random()*6) +1
  console.log(random);
}

calltwice(rolldie)
