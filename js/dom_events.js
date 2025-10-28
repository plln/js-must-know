//'use strict';
console.log('events js loaded');

const clickMe = (event) => {
    console.log('handle on click', event.target.textContent);
}

//HTMLCollection not an Array
const elements = document.getElementsByTagName('button');
console.log(typeof elements, elements);
//ref - https://stackoverflow.com/questions/19324700/how-to-loop-through-all-the-elements-returned-from-getelementsbytagname
//const buttons = Array.from(elements);
[...elements].forEach(button => {
    button.onclick = clickMe;
});

let actual = Math.floor(Math.random() * 20);
console.log(actual);

function guessNumber(min, max, guess) {
    guess = Math.round((min + max) / 2);
    console.log(`min - ${min} | max - ${max} | guess - ${guess}`);
    if (guess === actual) return guess;
    else {
        if (guess < actual) {
            min = guess;
        } else {
            max = guess;
        }
        return guessNumber(min, max, guess);
    }
}

const guess = guessNumber(0, 20, null);
console.log(`${actual} equals ${guess}?`, actual === guess);