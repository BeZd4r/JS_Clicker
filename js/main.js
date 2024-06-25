const counter = document.getElementById("Counter");
const animal = document.getElementById("Animal"); 
const currentAnimalBox = document.getElementById("current-Animal-Box")
const currentAnimal = document.getElementById("Current-animal");
const animalsMenu = document.getElementById("Animals-menu");
const coins = document.getElementById("Coins");

const animalStartWidth = animal.offsetWidth;
const animalStartHeight = animal.offsetHeight;

let clicks = 0;
let coin = 0;
let menuIsActive = false;

function fillMenu(){
    for (let i = 1; i < 6;i++){

        let animalField = document.createElement("div");
        animalField.classList.add("animals-fields-menu");
        animalsMenu.appendChild(animalField);

        let animalIcon = document.createElement("img");
        animalIcon.src = `source/animals/animal_${i}.png`;
        animalIcon.id = `animal_${i}`;
        animalIcon.classList.add("animals-icons");
        animalIcon.addEventListener("click", new ChangeAnimal);
        animalField.appendChild(animalIcon);

        let animalPrice = document.createElement("div");
        animalPrice.classList.add("animals-prices");
        animalField.appendChild(animalPrice);

        let animalPriceIcon = document.createElement("img");
        animalPriceIcon.src = `source/coin.png`;
        animalPriceIcon.classList.add("coins-img")
        animalPrice.appendChild(animalPriceIcon);

        let animalPriceText = document.createElement("h1");
        animalPriceText.textContent = i*10;
        animalPrice.appendChild(animalPriceText);
    }
}

function addEvents(){
    animal.addEventListener("click",clickMainAnimal);
    currentAnimalBox.addEventListener("click",callAnimalsMenu);
}

function clickMainAnimal(){
    clicks++;
    coin = Math.floor(clicks/5);
    counter.textContent = `Вы сделали ${clicks} клик(ов)`;
    coins.textContent = `${coin}`;
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

function callAnimalsMenu(){
    if (menuIsActive){
        disableMenu();
    }
    else{
        enableMenu();
    }
    
}

function disableMenu(){
    menuIsActive = !menuIsActive;
    animalsMenu.style.display = "none";
}
function enableMenu() {
    menuIsActive = !menuIsActive;
    animalsMenu.style.display = "block";
}
class ChangeAnimal {
    handleEvent(event){
        let currentTarget = event.currentTarget;
        switch(event.type) {
            case "click":
                currentAnimal.src = currentTarget.src;
                animal.src = currentTarget.src;
                disableMenu();
                break;
        }
    }
}

addEvents();
fillMenu();