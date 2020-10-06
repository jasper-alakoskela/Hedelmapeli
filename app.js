const apple = document.getElementById("apple");
const cherry = document.getElementById("cherry");
const watermelon = document.getElementById("watermelon");

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");

const fruits = ["apple", "cherry", "watermelon"];

function getRandomFruit(fruits) {
    return Math.floor(Math.random() * fruits.length);
}

function spin() {
    slot1 = getRandomFruit();
    slot2 = getRandomFruit();
    slot3 = getRandomFruit();

    if (slot1 == apple && slot2 == apple) {
        console.log("1€");
    }

    else if (slot1 == apple && slot2 == apple && slot3 == apple) {
        console.log("2€");
    }

    else if (slot1 == cherry && slot2 == cherry) {
        console.log("2€");
    }

    else if (slot1 == cherry && slot2 == cherry && slot3 == cherry) {
        console.log("5€");
    }

    else if (slot1 == watermelon) {
        console.log("1€");
    }

    else if (slot1 == watermelon && slot2 == watermelon) {
        console.log("5€");
    }

    else if (slot1 == watermelon && slot2 == watermelon && slot3 == watermelon) {
        console.log("10€");
    }

    else {
        console.log("et voittanut mitään");
    }

}