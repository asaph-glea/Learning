const franc = require('franc');
const langs = require('lang');
const colors = require('colors');
const input = process.argv[2];
const langCode = franc(input);

if(langCode === 'und'){
    console.log("Text Language not found".red);
}else{
const language = langs.where("3",langCode);
console.log(`Our best guess is: ${language.name}`.green);
}

