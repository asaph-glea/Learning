const buttX=document.querySelector("#playerx");
const buttY=document.querySelector("#playery");
const resetButt=document.querySelector("#reset");
const scorelimit = document.querySelector('#scoreLimit');
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

let p1score = 0;
let p2score = 0;
let maxScore = 5;
let isGameOver = false;

scorelimit.addEventListener('change', function(){
    maxScore = parseInt(this.value);
    reset();
})

buttX.addEventListener('click', function(){
    if(!isGameOver){
        let newScore = p1score +=1;
        if(p1score === maxScore){   
            isGameOver = true;
            score1.classList.add('has-text-success')
            score2.classList.add('has-text-danger')
            buttX.disabled = true;
            buttY.disabled = true;
        }
        score1.textContent = newScore;
    }
   
});


buttY.addEventListener('click', function(){
    if(!isGameOver){
        let newScore = p2score +=1;
        if(p2score === maxScore){   
            isGameOver = true;
            score1.classList.add('has-text-success');
            score2.classList.add('has-text-danger');
            buttX.disabled = true;
            buttY.disabled = true;
        }
        score2.textContent = newScore;
    }
   
});

resetButt.addEventListener('click',reset)

function reset(){
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    score1.classList.remove('has-text-success')
    score2.classList.remove('has-text-danger')
    buttX.disabled = false;
    buttY.disabled = false;
}