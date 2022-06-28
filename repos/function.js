function sing(){
  console.log('Do');
  console.log('Re');
  console.log('Mi');
}

function greet(fname,lastname){
  console.log( `firstname ${fname} ${lastname[0]}.`);
  // console.log("Hi");
}
function repeat(str, numtimes){
  let result = '';
  for (let i = 0; i <numtimes; i++){
    result += str;
  }
  console.log(result);
}

function add  (x,y){
let sum = x+y;
  return sum;
}
function cap(str){
    let newstr = str[0].toUpperCase();
    str = str.slice(1);
    return newstr + str;}
