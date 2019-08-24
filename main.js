const calc = {
    ShowingValue: "0",
};
const storage = [0, 0, 0, 0]
let timerActive = false;
let timerSeconds = 00;
let timerMinutes = 00;
let timerTest = "sssss";
let valueToBeStored;

const display = document.querySelector(".display");
const equalsBtn = document.getElementById("equalsButton");
const allCearBtn = document.getElementById("allClearBtn");
const entryClearBtn = document.getElementById("entryClearBtn");
const timerBtn = document.getElementById('timerBtn');
const storeBtn = document.getElementById("storeBtn");
const buttons = document.querySelector('.buttons');

equalsBtn.addEventListener("click", evaluate);
allClearBtn.addEventListener("click", clearFunc);
entryClearBtn.addEventListener("click", entryClear);
timerBtn.addEventListener('click', startTimer);
storeBtn.addEventListener("click", storeValue)

function evaluate() {
    let results = eval(calc.ShowingValue);
    calc.ShowingValue = results;
};

function clearFunc() {
    calc.ShowingValue = 0;
    updateDisplay()
}

function entryClear() {
    console.log("sad")
    calc.ShowingValue = calc.ShowingValue.slice(0, -1);
    updateDisplay;
}

function updateDisplay(input) {
    display.value = calc.ShowingValue;
}

function numberInput(button) {
    const { ShowingValue } = calc;
    calc.ShowingValue = ShowingValue === '0' ? button : ShowingValue + button;
    updateDisplay()
}

function startTimer() {
    if (timerActive == false) {
        timerActive = true;
        timerBtn.innerText = "0" + timerMinutes + ":" + "0" + timerSeconds;
        timer = setInterval(function () {
            timerSeconds++;
            // Slicar bort nollan när variablerna blir tvåsiffriga.
            timerBtn.innerText = ("0" + timerMinutes).slice(-2) + ":" + ("0" + timerSeconds).slice(-2);

            if (timerSeconds == 59) {
                timerSeconds = -1;
                timerMinutes++;
            }
            if (timerMinutes == 60) {
                timerActive = false;
                clearInterval(timer);
                timerSeconds = 00;
                timerMinutes = 00;
                timerBtn.innerText = "time's up! 60min passed!";
            }
            // 1000ms = 1sek.
        }, 1000)
    } else if (timerActive == true) {
        timerActive = false;
        clearInterval(timer);
        timerSeconds = 00;
        timerMinutes = 00;
        timerBtn.innerText = "timer";
    }
}

function storeValue() {
    let valueToBeStored = calc.ShowingValue;
    buttons.addEventListener("click", storageAppend = (event) => {
        console.log(event)
        switch (event.target.id) {
            case "storageBtnA":
                console.log("A - funkar");
                storage[0] = valueToBeStored;
                buttons.removeEventListener("click", storageAppend);
                break;

            case "storageBtnB":
                console.log("B - funkar")
                storage[1] = valueToBeStored;
                buttons.removeEventListener("click", storageAppend);
                break;

            case "storageBtnC":
                console.log("C - funkar")
                storage[2] = valueToBeStored;
                buttons.removeEventListener("click", storageAppend);
                break;

            case "storageBtnD":
                console.log("D - funkar")
                storage[3] = valueToBeStored;
                buttons.removeEventListener("click", storageAppend);
                break;
        }
    })
}

function testFunc(event) {

    console.log(event)
    switch (event.target.id) {
        case "storageBtnA":
            console.log("A - funkar")
            storage[0] = valueToBeStored;
            buttons.removeEventListener("click", testfunc(event))
            break;

        case "storageBtnB":
            console.log("B - funkar")
            storage[1] = valueToBeStored;
            buttons.removeEventListener("click", (event))
            break;

        case "storageBtnC":
            console.log("C - funkar")
            storage[2] = valueToBeStored;
            buttons.removeEventListener("click", (event))
            break;

        case "storageBtnD":
            console.log("D - funkar")
            storage[3] = valueToBeStored;
            buttons.removeEventListener("click", (event))
            break;
    }
}

buttons.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    else {
        updateDisplay(numberInput(target.value))
    }
    switch (target.id) {
        case "storageBtnA":
            if (storage[0] > 0) {
                calc.ShowingValue = storage[0]
                updateDisplay();
                break;
            } else {
                break;
            }
        case "storageBtnB":
            if (storage[1] > 0) {
                calc.ShowingValue = storage[1]
                updateDisplay();
                break;
            } else {
                break;
            }
        case "storageBtnC":
            if (storage[2] > 0) {
                calc.ShowingValue = storage[2]
                updateDisplay();
                break;
            } else {
                break;
            }
        case "storageBtnD":
            if (storage[3] > 0) {
                calc.ShowingValue = storage[3]
                updateDisplay();
                break;
            } else {
                break;
            }
    }
})








// Clear funktion //



// ------------------------------------------------------------- //

//undo funktion //




// ------------------------------------------------------------- //

// update display //

// ------------------------------------------------------------- //



// --- Timer ---//
// Hämta timer-knappen och lägg till en eventlistener. //


// Funktion som en timer, och ändrar innerText i timer-knappen. utefter timern. //
// Om timerActive är true när man trycker på knappen så sätts den till false och knappen och timern återställs //
// När timern når 60 minuter återställs timern, och ett meddelande visas.

// --------------------------------------------------------------//

// Storage funktion //














