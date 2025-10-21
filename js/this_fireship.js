'use strict';

//this === current execution context
//browser - window
console.log(this);

function whodis() {
  console.log(this);
}

whodis();

const jeff0 = {
  face: '##',
  //whodis
};

const itsJeff = whodis.bind(jeff0);
itsJeff();

//constructor function

function Horse(name) {
  this.name = name;

  this.sayHello = function () {
    console.log(`Hey ${this.name}!`);
  }

  this.cry = function (index) {
    console.log(`${index} neigh!`);
    return this;
  }
}

const myHorse = new Horse('Secretariat');
myHorse.sayHello();
//method chaining
myHorse.cry(1).cry(2).cry(3);

const jeff1 = {
  face: '$$',
  whodis: function () {
    console.log('who this?', this);
  },
  whoAmI: () => console.log('who am i?', this)
  //points to the global window object
};

jeff1.whodis();
jeff1.whoAmI();

//3 prototype methods in function object - bind,call,apply
function showFace(param1, param2) {
  console.log(this.face, `${param1} - ${param2}`);
}

const showJeffsFace = showFace.bind(jeff0, 1, 2, 3);
showJeffsFace();

showFace.call(jeff0, 4, 5, 6);
showFace.apply(jeff0, [7, 8, 9]);