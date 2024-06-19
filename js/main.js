const counter = document.getElementById("Counter");
const homo = document.getElementById("Homo"); 

const homoStartWidth = 400;
const homoStartHeight = 400;
const homoAnimationHeight = 100;
const homoAnimationWidth = 100;


let clicks = 0;

homo.width = homoStartWidth;
homo.height = homoStartHeight;

function onClickHomo(){
    clicks++;
    counter.textContent = `Вы сделали ${clicks} клик(ов)`;
    HomoAnimation(clicks);
}

function HomoAnimation(currentclicks){
    homo.width = homoAnimationWidth;
    homo.height = homoAnimationHeight;
    
    let timer = setInterval(resizeHomo,1);

    function resizeHomo(){

        homo.height += 10;
        homo.width += 10;

        if (homo.width == homoStartWidth || 
        homo.height == homoStartHeight || currentclicks != clicks ){
            clearTimeout(timer)
        }
    }
  
}