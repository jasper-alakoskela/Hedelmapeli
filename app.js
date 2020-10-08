
let money = 50;
let bet = 1;

let locking = false;

let lock1 = false;
let lock2 = false;
let lock3 = false;

document.title = money + " Pistettä";

function spin() {
    if (bet > money) {
        console.log("game over");
    }

    money = money - bet
    document.getElementById("money").innerHTML = money;

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

    chooseBet();
    lock1 = false;
    lock2 = false;
    lock3 = false;

    if (lukitseminen == false) {
        document.getElementById("slot1").src = "img/apple.png";
        document.getElementById("slot1").disabled = false;
        document.getElementById("slot2").src = "img/cherry.png";
        document.getElementById("slot2").disabled = false;
        document.getElementById("slot3").src = "img/watermelon.png";
        document.getElementById("slot3").disabled = false;

    }
    else {
        document.getElementById("slot1").src = "img/negative.png";
        document.getElementById("slot1").disabled = true;
        document.getElementById("slot2").src = "img/negative.png";
        document.getElementById("slot2").disabled = true;
        document.getElementById("slot3").src = "img/negative.png";
        document.getElementById("slot3").disabled = true;

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

    }

    document.getElementById(slot).src = image;

}

function lockingImg(slot_nro) {

    switch (slot_nro) {
        case 1:
            if (lock1 == true) {
                lock1 = false;
                document.getElementById("slot1").src = "img/apple.png";
            }
            else {
                lock1 = true;
                document.getElementById("slot1").src = "img/negative.png";
            }
            break;

        case 2:
            if (lock2 == true) {
                lock2 = false;
                document.getElementById("slot2").src = "img/cherry.png";
            }
            else {
                lock2 = true;
                document.getElementById("slot2").src = "img/negative.png";
            }
            break;

        case 3:
            if (lock3 == true) {
                lock3 = false;
                document.getElementById("slot3").src = "img/watermelon.png";
            }
            else {
                lock3 = true;
                document.getElementById("slot3").src = "img/negative.png";
            }
            break;
    }
}

function chooseBet() {

    const smallBet = document.getElementById("small");
    const mediumBet = document.getElementById("medium");

    const slot1 = document.getElementById("slot1").src;
    const slot2 = document.getElementById("slot2").src;
    const slot3 = document.getElementById("slot3").src;


    if (slot1 == slot2 && slot2 == slot3) {
        let file_name = slot1.split('/').pop();
        switch (file_name) {

            case "img/apple.png":
                if (bet == smallBet) {
                    money = money + 1;
                }
                else if (bet == mediumBet) {
                    money = money + 2;
                }
                else {
                    money = money + 4;
                }
                break;

            case "img/cherry.png":
                if (bet == smallBet) {
                    money = money + 2;
                }
                else if (bet == mediumBet) {
                    money = money + 5;
                }
                else {
                    money = money + 8;
                }
                break;

            case "img/watermelon.png":
                if (bet == smallBet) {
                    money = money + 8;
                }
                else if (bet == mediumBet) {
                    money = money + 10;
                }
                else {
                    money = money + 12;
                }
                break;
        }
    }

    if (slot1 == slot2 && slot2 != slot3) {
        let file_name = slot1.split('/').pop();
        switch (file_name) {

            case "img/apple.png":
                if (bet == smallBet) {
                    money = money + 0.50;
                }
                else if (bet == mediumBet) {
                    money = money + 1;
                }
                else {
                    money = money + 2;
                }
                break;

            case "img/cherry.png":
                if (bet == smallBet) {
                    money = money + 1;
                }
                else if (bet == mediumBet) {
                    money = money + 2;
                }
                else {
                    money = money + 3;
                }
                break;

            case "img/watermelon.png":
                if (bet == smallBet) {
                    money = money + 2;
                }
                else if (bet == mediumBet) {
                    money = money + 5;
                }
                else {
                    money = money + 8;
                }
                break;
        }
    }

    if (slot1 != slot2 && slot2 != slot3) {
        let file_name = slot1.split('/').pop();
        switch (file_name) {

            case "img/watermelon.png":
                if (bet == smallBet) {
                    money = money + 0.50;
                }
                else if (bet == mediumBet) {
                    money = money + 1;
                }
                else {
                    money = money + 2;
                }
                break;

        }
    }
}
