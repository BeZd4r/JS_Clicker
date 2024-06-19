const counter = document.getElementById("Counter");
const animal = document.getElementById("Animal"); 
const animalBar = document.getElementById("choose-animal-bar")

const animalStartWidth = 350;
const animalStartHeight = 350;
const animalAnimationHeight = 100;
const animalAnimationWidth = 100;

let clicks = 0;

function drawMainPage(){

    animal.width = animalStartWidth;
    animal.height = animalStartHeight;

    let animalBarEvents = new AnimalBarEvents();
    animal.addEventListener("click",clickAnimal);
    for (let i = 1; i < 6;i++){
        let animals = document.createElement("img");
        animals.src = `source/animals/animal_${i}.png`;
        animals.id = `animal_${i}`;
        animals.height = 80;
        animals.width = 80;
        animals.addEventListener("click",animalBarEvents);
        animalBar.appendChild(animals);
    }
}

class AnimalBarEvents{
    handleEvent(event) {
        switch(event.type) {
            case 'click':
                let target = event.currentTarget;
                target.width = 50;
                target.height = 50;
                
                let timer = setTimeout(function increase() { 
                    console.log("event.currentTarget.width");
                    target.width = 80;
                    target.height = 80;
                },50)

                animal.src = `source/animals/${target.id}.png`;
                break;
        }
    }
}

function clickAnimal(){
    clicks++;
    counter.textContent = `Вы сделали ${clicks} клик(ов)`;
    animalAnimation(clicks);
}

function animalAnimation(currentclicks){
    animal.width = animalAnimationWidth;
    animal.height = animalAnimationHeight;
    
    let timer = setInterval(resizeAnimal,1);

    function resizeAnimal(){

        animal.height += 10;
        animal.width += 10;

        if (animal.width == animalStartWidth || 
        animal.height == animalStartHeight || currentclicks != clicks ){
            clearTimeout(timer)
        }
    }
}

drawMainPage();