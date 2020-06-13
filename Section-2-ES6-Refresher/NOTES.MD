## ES6 Refresher

* var --> scoped to the function
* let ==> scoped to the block level
* const ==> scoped to the block level, cannot be reassign

const person = {
  name: 'John',
  walk: function () { }, //es5
  talk() { 
    console.log(this)
  }//es6
}


// this always returns reference to current object
// value of this is determined by how a function is called

person.talk() will print this which will show person object

const talk = person.talk;
talk() --> this will be undefined(if strict mode is enabled) or window object


// to bind tthis

const talk = person.talk.bind(person); -> bind method will bind this to person object


Arrow functions
arrow functions dont rebind this
the inner functions will inherit this

template literals ==> `lorem ipsum ${some variable}`

array methods
map -> render list

Object destructuring
const someObj = {
  x: 1,
  y: 1,
  z: 1
}
const { x: t, y} = someObj;

Spread operators
const f = [1,2]
const s = [3,4]

const g = [...f, 5 , ...s];

similar for objects --> {..t, ..b, etc}

Classes
  constructor

inheritance
  extends
  super

Modules
  import  
  export

Named and Default exports