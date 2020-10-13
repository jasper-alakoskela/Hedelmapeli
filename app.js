
let money = 50;
let bet = 1;

let locking = false;

let lock1 = false;
let lock2 = false;
let lock3 = false;

function spin() {
    if (bet > money) {
        console.log("game over");
    }

    money = money - bet
    document.getElementById("moneyText").innerHTML = money;

    document.title = money + "€";

    if (lock1 == true || lock2 == true || lock3 == true) {
        lukitseminen = true;
    } else {
        lukitseminen = false;
    }

    if (lock1 == false) {
        changeImage("slot1");
    }
    if (lock2 == false) {
        changeImage("slot2");
    }
    if (lock3 == false) {
        changeImage("slot3");
    }

    checkWin();

    lock1 = false;
    lock2 = false;
    lock3 = false;

    if (lukitseminen == false) {
        document.getElementById("lockbtn1").src = "img/lock.png";
        document.getElementById("lockbtn1").disabled = false;
        document.getElementById("lockbtn2").src = "img/lock.png";
        document.getElementById("lockbtn2").disabled = false;
        document.getElementById("lockbtn3").src = "img/lock.png";
        document.getElementById("lockbtn3").disabled = false;

    }
    else {
        document.getElementById("lockbtn1").src = "img/lockerr.png";
        document.getElementById("lockbtn1").disabled = true;
        document.getElementById("lockbtn2").src = "img/lockerr.png";
        document.getElementById("lockbtn2").disabled = true;
        document.getElementById("lockbtn3").src = "img/lockerr.png";
        document.getElementById("lockbtn3").disabled = true;

    }
}

function changeImage(slot) {

    let image = "";
    randomFruit = Math.floor((Math.random() * 3) + 1);
    console.log(randomFruit);

    switch (randomFruit) {
        case 1:
            image = "img/apple.png";
            break;
        case 2:
            image = "img/cherry.png";
            break;
        case 3:
            image = "img/watermelon.png";
            break;
    }

    document.getElementById(slot).src = image;

}

function lockingImg(slot_nro) {

    switch (slot_nro) {
        case 1:
            if (lock1 == true) {
                lock1 = false;
                document.getElementById("slot1").src = "img/lock.png";
            }
            else {
                lock1 = true;
                document.getElementById("slot1").src = "img/locked.png";
            }
            break;

        case 2:
            if (lock2 == true) {
                lock2 = false;
                document.getElementById("slot2").src = "img/lock.png";
            }
            else {
                lock2 = true;
                document.getElementById("slot2").src = "img/locked.png";
            }
            break;

        case 3:
            if (lock3 == true) {
                lock3 = false;
                document.getElementById("slot3").src = "img/lock.png";
            }
            else {
                lock3 = true;
                document.getElementById("slot3").src = "img/locked.png";
            }
            break;
    }
}

function chooseBet() {
    let smallBet = document.getElementById("small");
    let mediumBet = document.getElementById("medium");
    let largeBet = document.getElementById("large");

    smallBet = 0.50;
    mediumBet = 1;
    largeBet = 2;

    let smallBetArray = [1, 2, 2, 3, 1, 3, 5];
    let mediumBetArray = [2, 3, 3, 5, 2, 5, 8];
    let largeBetArray = [3, 5, 5, 8, 3, 8, 10];

    if (bet == smallBet) {
        document.getElementById("betText").innerHTML = 0.50;
        document.querySelectorAll(".prizes span").innerHTML = smallBetArray;

    }

    else if (bet == mediumBet) {
        document.getElementById("betText").innerHTML = 1;
        document.querySelectorAll(".prizes span").innerHTML = mediumBetArray;

    }

    else {
        document.getElementById("betText").innerHTML = 2;
        document.querySelectorAll(".prizes span").innerHTML = largeBetArray;

    }
}

function checkWin() {

    const slot1 = document.getElementById("slot1").src;
    const slot2 = document.getElementById("slot2").src;
    const slot3 = document.getElementById("slot3").src;


    if (slot1 == slot2 && slot2 == slot3) {
        let fileName = slot1.split('/').pop();
        console.log("voitto");
        switch (fileName) {

            case "img/apple.png":
                if (bet == 0.50) {
                    money = money + 2;
                }
                else if (bet == 1) {
                    money = money + 3;
                }
                else {
                    money = money + 4;
                }
                break;

            case "img/cherry.png":
                if (bet == 0.50) {
                    money = money + 3;
                }
                else if (bet == 1) {
                    money = money + 5;
                }
                else {
                    money = money + 8;
                }
                break;

            case "img/watermelon.png":
                if (bet == 0.50) {
                    money = money + 5;
                }
                else if (bet == 1) {
                    money = money + 8;
                }
                else {
                    money = money + 10;
                }
                break;
        }
    }

    if (slot1 == slot2 && slot2 != slot3) {
        let fileName = slot1.split('/').pop();
        console.log("voitto");
        switch (fileName) {

            case "img/apple.png":
                if (bet == 0.50) {
                    money = money + 1;
                }
                else if (bet == 1) {
                    money = money + 2;
                }
                else {
                    money = money + 3;
                }
                break;

            case "img/cherry.png":
                if (bet == 0.50) {
                    money = money + 2;
                }
                else if (bet == 1) {
                    money = money + 3;
                }
                else {
                    money = money + 4;
                }
                break;

            case "img/watermelon.png":
                if (bet == 0.50) {
                    money = money + 3;
                }
                else if (bet == 1) {
                    money = money + 5;
                }
                else {
                    money = money + 8;
                }
                break;
        }
    }

    if (slot1 != slot2 && slot2 != slot3) {
        let fileName = slot1.split('/').pop();
        console.log("voitto");
        switch (fileName) {

            case "img/watermelon.png":
                if (bet == 0.50) {
                    money = money + 1;
                }
                else if (bet == 1) {
                    money = money + 2;
                }
                else {
                    money = money + 3;
                }
                break;

        }
    }
}
