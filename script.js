var timer = 10;
var score = 0;
var hitrn = 0

function increaseScore(){
    score += 10
    document.querySelector("#scoreval").textContent = score;
}

function runHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble(){
    var clutter = '';

    for(var i=1; i<=133; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div id="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `Game Over`;
        }
    }, 1000)
}

document.querySelector("#pbtm")
.addEventListener("click", function (details){
var clickNum = Number(details.target.textContent);/*because by defalut it will get string*/
if(clickNum === hitrn){
    increaseScore();
    makeBubble();
    runHit();
}
});

runTimer()
makeBubble()
runHit()