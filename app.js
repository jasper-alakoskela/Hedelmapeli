
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
    }
}

function chooseBet() {

    let smallBet = document.getElementById("small");
    let mediumBet = document.getElementById("medium");
    let largeBet =  document.getElementById("large");

    smallBet = 0.50;
    mediumBet = 1;
    largeBet = 2;

    if(bet == smallBet){
        document.getElementById("betText").innerHTML = 0.50;

        document.getElementById("2apple").innerHTML = "1";
        document.getElementById("3apple").innerHTML = "2";
        document.getElementById("2cherry").innerHTML = "2";
        document.getElementById("3cherry").innerHTML = "3";
        document.getElementById("1watermelon").innerHTML = "1";
        document.getElementById("2watermelon").innerHTML = "3";
        document.getElementById("3watermelon").innerHTML = "5";
    }

    else if(bet == mediumBet){
        document.getElementById("betText").innerHTML = 1;

        document.getElementById("2apple").innerHTML = "2";
        document.getElementById("3apple").innerHTML = "3";
        document.getElementById("2cherry").innerHTML = "3";
        document.getElementById("3cherry").innerHTML = "5";
        document.getElementById("1watermelon").innerHTML = "2";
        document.getElementById("2watermelon").innerHTML = "5";
        document.getElementById("3watermelon").innerHTML = "8";
    }

    else{
        document.getElementById("betText").innerHTML = 2;

        document.getElementById("2apple").innerHTML = "3";
        document.getElementById("3apple").innerHTML = "5";
        document.getElementById("2cherry").innerHTML = "5";
        document.getElementById("3cherry").innerHTML = "8";
        document.getElementById("1watermelon").innerHTML = "3";
        document.getElementById("2watermelon").innerHTML = "8";
        document.getElementById("3watermelon").innerHTML = "10";
    }

    const slot1 = document.getElementById("slot1").src;
    const slot2 = document.getElementById("slot2").src;
    const slot3 = document.getElementById("slot3").src;


    if (slot1 == slot2 && slot2 == slot3) {
       /*tämä pitää selvittää*/  let file_name = slot1.split('/').pop();
        switch (file_name) {

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
        let file_name = slot1.split('/').pop();
        switch (file_name) {

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
        let file_name = slot1.split('/').pop();
        switch (file_name) {

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
