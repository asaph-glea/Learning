// function rgbToHex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r,g,b){
//     return `${r}, ${g}, ${b}`;
// }

// function makeColor(r,g,b){
//     const color ={};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function(){
//         const {r,g,b} = this;
//         return `${r}, ${g}, ${b}`;
//     }
//     color.hex = function() {
//         const {r,g,b} = this;
//         return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//       }
//     return color;
// }
// const firstColor = makeColor(45,65,78);
// firstColor.hex();
// firstColor.rgb();

// const black = makeColor(0,0,0);
// black.hex();
// black.rgb();

// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b; 
// }
// Color.prototype.rgb =  function(){
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };
// Color.prototype.hex = function() {
//         const {r,g,b} = this;
//         return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// Color.prototype.rgba = function(a=1.0){
//     const {r,g,b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }
// const color1= new Color(220,221,245)
// const color2= new Color(67,1,34)

// class Color{
//     constructor(r,g,b,name){
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }
//     innerRGB(){
//         const {r,g,b} = this;
//         return `${r}, ${g}, ${b}`;
//     }
//     rgb(){
//         return `rgb(${this.innerRGB()})`;
//     }
//     rgba(a=1.0){
//         return `rgba(${this.innerRGB()}, ${a})`;
//     }
//     hex(){
//         const {r,g,b} = this;
//         return ("#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
//     }
// }
// const c1 = new Color(56,89,200,'tomtom');
// const c2 = new Color(78,180,253,'ototo');
// const c3 = new Color(18,189,145,'motmot');
class Pet{
    constructor(name,age){
        console.log('INcat constructor')
        this.name = name;
        this.age =age;
    }
    eat(){
        return `${this.name} is eating!`
    }
}

class Cat extends Pet{
    constructor(name,age,livesLeft=9){
        console.log('IN cat constructor')
        super(name,age);
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'Meoswwwww!'
    }
}

class Dog extends Pet{
    bark(){
        return 'WOOF woof!!!'
    }
    eat(){
        return `${this.name} scarfs his food!`
    }
}