const express = require('express');
const app = express();
const redditData = require('./data.json');
const path = require('path');

app.use(express.static(path.join(__dirname,'public')))


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.get("/",(req,res)=>{
    res.render('home');
})
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data){
        res.render('subreddit',{ ...data})
    }else{
        res.render('notFound',{subreddit})
    }
    
})
app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random()*50)+1;
    res.render('random', {rand:num});
})
app.get('/cats',(req,res)=>{
    const cats = ['Blue','Grey','Mink','Paula'];
    res.render('cats',{cats});
    
})
app.listen(3000,()=>{
    console.log('Listening port 3000');
})
