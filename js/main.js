const counter = document.getElementById("Counter");
const animal = document.getElementById("Animal"); 
const animalBar = document.getElementById("choose-animal-bar");
const coins = document.getElementById("Coins");

const animalStartWidth = animal.offsetWidth;
const animalStartHeight = animal.offsetHeight;
const animalAnimationHeight = 100;
const animalAnimationWidth = 100;

let clicks = 0;

function drawMainPage(){
    console.log(counter.textContent.length)
    animal.addEventListener("click",clickMainAnimal);

    let animalBarEvents = new AnimalBarEvents();
    for (let i = 1; i < 6;i++){
        let animals = document.createElement("img");
        animals.src = `source/animals/animal_${i}.png`;
        animals.id = `animal_${i}`;
        animals.addEventListener("click",animalBarEvents);
        animalBar.appendChild(animals);
    }
}

class AnimalBarEvents{
    handleEvent(event) {
        switch(event.type) {
            case 'click':
                let target = event.currentTarget;
                let scale_size = 0.5;
                target.style.transform = `scale(${scale_size})`;
                let timer = setTimeout(function increase() { 
                    scale_size = 1;
                    target.style.transform = `scale(${scale_size})`;
                    animal.src = `source/animals/${target.id}.png`;
                },50)

                break;
        }
    }
}

function clickMainAnimal(){
    clicks++;
    counter.textContent = `Вы сделали ${clicks} клик(ов)`;
    coins.textContent = `${Math.floor(clicks/5)}`
    animalMainAnimation();
}

function animalMainAnimation(){
    let currentClick = clicks;
    let scale_size = 0.3;
    let timer = setInterval(resize,1)
    function resize(){
        
        animal.style.transform = `scale(${scale_size})`;
        scale_size += 0.01
        if(scale_size > 1 || currentClick != clicks){
            clearInterval(timer);
        }
    }
}

drawMainPage();