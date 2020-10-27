let money = 30;
let bet = 1;

let locking = false;

let lock1 = false;
let lock2 = false;
let lock3 = false;

function playagain() {
    location.reload();
}

function spin() {
    if (bet > money) {
        alert("Rahat loppuivat")
        document.getElementById("playbtn").disabled = true;
        document.getElementById("playagainbtn").style.display = "block";
        console.log("game over");
    }

    money = money - bet
    document.getElementById("moneyText").innerHTML = money;
    document.title = money + "€";

    if (lock1 == true || lock2 == true || lock3 == true) {
        locking = true;
    } else {
        locking = false;
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

    if (locking == false) {
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

function lockingImg(slotNro) {

    switch (slotNro) {
        case 1:
            if (lock1 == true) {
                lock1 = false;
                document.getElementById("lockbtn1").src = "img/lock.png";
            }
            else {
                lock1 = true;
                document.getElementById("lockbtn1").src = "img/locked.png";
            }
            break;

        case 2:
            if (lock2 == true) {
                lock2 = false;
                document.getElementById("lockbtn2").src = "img/lock.png";
            }
            else {
                lock2 = true;
                document.getElementById("lockbtn2").src = "img/locked.png";
            }
            break;

        case 3:
            if (lock3 == true) {
                lock3 = false;
                document.getElementById("lockbtn3").src = "img/lock.png";
            }
            else {
                lock3 = true;
                document.getElementById("lockbtn3").src = "img/locked.png";
            }
            break;
    }
}

function chooseBet(x) {

    bet = x;

    if (x == 0.50) {
        document.getElementById("betText").innerHTML = 0.50;


        document.getElementById("2apple").innerHTML = 0.50;
        document.getElementById("3apple").innerHTML = 1;
        document.getElementById("2cherry").innerHTML = 1;
        document.getElementById("3cherry").innerHTML = 3;
        document.getElementById("2watermelon").innerHTML = 3;
        document.getElementById("3watermelon").innerHTML = 5;
    }

    else if (x == 1) {
        document.getElementById("betText").innerHTML = 1;

        document.getElementById("2apple").innerHTML = 1;
        document.getElementById("3apple").innerHTML = 2;
        document.getElementById("2cherry").innerHTML = 2;
        document.getElementById("3cherry").innerHTML = 4;
        document.getElementById("2watermelon").innerHTML = 4;
        document.getElementById("3watermelon").innerHTML = 8;
    }

    else {
        document.getElementById("betText").innerHTML = 2;

        document.getElementById("2apple").innerHTML = 2;
        document.getElementById("3apple").innerHTML = 3;
        document.getElementById("2cherry").innerHTML = 3;
        document.getElementById("3cherry").innerHTML = 5;
        document.getElementById("2watermelon").innerHTML = 5;
        document.getElementById("3watermelon").innerHTML = 10;
    }
}

function checkWin() {

    const slot1 = document.getElementById("slot1").src;
    const slot2 = document.getElementById("slot2").src;
    const slot3 = document.getElementById("slot3").src;


    if (slot1 == slot2 && slot2 == slot3) {
        let fileName = slot1.split('/').pop();
        switch (fileName) {
            case "apple.png":
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

            case "cherry.png":
                if (bet == 0.50) {
                    money = money + 3;
                }
                else if (bet == 1) {
                    money = money + 4;
                }
                else {
                    money = money + 5;
                }
                break;

            case "watermelon.png":
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
        document.getElementById("moneyText").innerHTML = money
        document.title = money + "€";
    }

    if (slot1 == slot2 && slot2 != slot3) {
        let fileName = slot1.split('/').pop();
        switch (fileName) {

            case "apple.png":
                if (bet == 0.50) {
                    money = money + 0.50;
                }
                else if (bet == 1) {
                    money = money + 1;
                }
                else {
                    money = money + 2;
                }
                break;

            case "cherry.png":
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

            case "watermelon.png":
                if (bet == 0.50) {
                    money = money + 3;
                }
                else if (bet == 1) {
                    money = money + 4;
                }
                else {
                    money = money + 5;
                }
                break;
        }
        document.getElementById("moneyText").innerHTML = money
        document.title = money + "€";
    }
}
