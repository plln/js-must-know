'use strict';

console.log('welcome to functions!');

//function declarations are hoisted
const loaves = makeBread(7);
console.log(loaves);

//function declaration
function makeBread(qty) {
  const bread = 'bread!'.repeat(qty);
  return bread;
}


//function expression
const makeBeer = function (qty) {
  return 'beer!'.repeat(qty);
}

//function expressions are not hoisted
const beers = makeBeer(5);
console.log(beers);

//IIFE
const val = (function () {
  const x = 23;
  return x;
})();
console.log(`IIFE => ${val}`);

//IIFE detour
//1. avoid polluting global scope
(function () {
  var msg = 'Hello from IIFE!';
  console.log(msg);
})();

console.log(typeof msg);

//2.private variables in module patterns (encapsulate data)
const counter = (function () {
  let count = 17;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    }
  };
})();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

//4. Execute initialization code
(function () {
  const settings = {
    theme: 'dark',
    layout: 'grid'
  };
  applySettings(settings);
})();

function applySettings(settings) {
  console.log('applying theme:', settings.theme);
  console.log('changing layout:', settings.layout);
}

//simple iife module
const calculator = (function (init) {
  let result = init;

  function add(x) {
    result += x;
    return result;
  }

  function subtract(x) {
    result -= x;
    return result;
  }

  return {
    add, subtract
  };
})(23);

console.log(calculator.add(5));
console.log(calculator.subtract(3));


