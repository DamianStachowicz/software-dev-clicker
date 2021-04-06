let money = 0;
let interval = 1000; // ms
let keysStroked = 0;
let minKeyStrokes = 5;
let baseAmount = 100;
let bugProbability = 0.1;

function main() {
}

function getMoney() {
    return money;
}

function handleKeyStroke() {
    keysStroked++;
    if (keysStroked >= minKeyStrokes) {
        keysStroked = 0;

        if (Math.random() > bugProbability) {
            increaseMoney(baseAmount);
        } else {
            onBug();
        }
    }
}

function onBug() {
    console.log("BUG!");
}

function increaseMoney(amount) {
    money += amount;

    let elem = document.getElementById('money');
    if(typeof elem !== 'undefined' && elem !== null) {
        elem.innerHTML = money;
    }
}

function getRandomArrayElement(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return null;
    }

    return array[Math.floor(Math.random() * array.length)];  
}

class Programmer {
    name;
    surname;

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };
};

function buyProgrammer() {

}