
let money = 50;
let bet = 1;

let locking = false;

let lock1 = false;
let lock1 = false;
let lock1 = false;

const apple = document.getElementById("apple");
const cherry = document.getElementById("cherry");
const watermelon = document.getElementById("watermelon");

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");


function getRandomFruit() {
    return Math.floor((Math.random() * 3) + 1);
}

document.title = money.value + " Pistettä";

