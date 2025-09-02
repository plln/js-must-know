'use strict';

//this === current execution context
//browser - window
console.log(this);

function whodis() {
  console.log(this);
}

whodis();

const jeff = {
  face: '$$',
  whodis
};

jeff.whodis();