'use strict';

function greet(me = 'ecmascript') {
  console.log(`vanakkam ${me}!`);
}

greet('mamu');

// chapter 2 - primitives and objects
// primitive types - boolean, number, bigint, string, null, undefined, symbol
console.log(typeof true);
console.log(typeof 23, typeof 42.56);
console.log(typeof 'hello!');
console.log(typeof {});
console.log(typeof []);
console.log(typeof greet);
console.log(typeof null);
console.log(typeof undefined);

//equality
console.log('less strict nonStrictEquals', null == undefined);
console.log('strict nonStrictEquals', null === undefined);

var x;
console.log(`default value '${x}' (when unassigned)`);
console.log(`default value '${greet()}' when nothing is returned`);

var y = null;
console.log(`explictly assigned - ${y}`);

//object - collection of key value pairs
x = {};
x['foo'] = 'bar';
console.log(x);

//primitive wrappers - please avoid
var foo = Boolean(false);
console.log(foo, foo == false, foo === false);
var greet = String('hola');
console.log('hola' == greet, 'hola' === greet, typeof greet);

//chapter 3 - truthy vs falsy and control flows
var truthy;

if (truthy) {
  console.log('truthy!')
} else {
  console.log('falsy!');
}

console.log(true);
console.log('empty object', !!{}); //empty object is considered true
console.log('empty array', !![]); //empty array is considered true
console.log('empty string', !!''); //empty string is falsy
console.log('non empty string', !!'hi'); //non-empty string is truthy
console.log('numeric zero', !!0); //number zero is falsy
console.log('number other than zero', !!-1); //number other than zero is truthy

var x = !!false;
console.log('logical NOT (applied twice)', x);

var y = true && false;
console.log('logical AND', y);

var z = false || true;
console.log('logical OR', z);

var nonStrictEquals = (23 == '23');
console.log("23 == '23'", nonStrictEquals);

var strictEquals = (23 === '23');
console.log("23 === '23'", strictEquals);

var ternary = (truthy) ? 1 : 0;
console.log('ternary', ternary);

var expression = 'cat';

switch (expression) {
  case 'dog':
    console.log('woof!');
    break;
  case 'cat':
    console.log('meow!');
    break;
  default:
    console.log('default cry!!');
    break;
}

try {
  if (!truthy) {
    throw new Error('403 - unauthorized');
  }
  console.log('we are safe here!');
} catch (error) {
  console.error('we are broke!', error);
} finally {
  console.log('always runs...no matter what');
}

//chapter 4 - variables (var, let, const)
//(function () {
var g = 'global';

function app() {
  var l = 'local';
  console.log(g);
}

//console.log(l);
app();
//})();

//console.log(g);

//hoisting
console.log(electric);
var electric;
electric = 'tesla';
console.log(electric);

//use let/const instead of var
if (true) {
  var num = 23;
  //let num = 24;
}
console.log('weird var', num);

//chapter 5 - functions
function hello(input) {
  const output = `Hello ${input}!`;
  return output;
}
console.log(hello('Jeff'));

const hola = (input) => `Hola ${input}!!`;
console.log(hola('Jeff'));

//higher order functions
function cool(fn) {
  fn();
}

cool(() => console.log('sweet!'));

//closures
//similar to classes/objects-methods in oops
//outer function defines the state, while the inner function modfifies that state
function outer() {
  const fish = 'nemo';
  let count = 0;

  function inner() {
    count++;
    return `${count} ${fish}`;
  }

  return inner;
}

const fun = outer();
console.log(fun());
console.log(fun());
console.log(fun());

//chapter 6 - objects
//collection of key, value pairs

const obj0 = new Object();
obj0.name = 'clown';
obj0.face = '$%';
console.log(obj0.name, obj0.face);

//object literal
const obj = {
  name: 'clown',
  face: '#$',
  age: 99,
  hello: function () {
    return `Hello ${this.name}!`;
  },
  hola: () => this.num //this refers to the global object (window)
};

obj['name'] = 'joker';
console.log(obj);
console.log(obj.hello());
console.log(obj.hola());

const clown = {
  face: '@'
};

const ghost = {
  face: '&'
};

function whoAmI(p1, p2) {
  return this.face + '->' + p1 + ':' + p2;
}

//console.log(whoAmI(1, 2));
console.log(whoAmI.call(clown, 1, 2));
console.log(whoAmI.apply(ghost, [1, 2]));
const clownFace = whoAmI.bind(clown, 23, 42);
console.log(clownFace());