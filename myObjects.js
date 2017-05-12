// Objects
var dog = {
    // properties
    name: "Sparky",
    breed: "Greyhound",
    age: 4
}

console.log("Meet " + dog.name)
console.log("He is " + dog.age + " years old.")

// change properties after they have been initialized
dog.name = "Sally"
console.log("My dog likes to be called " + dog.name)

/* Note: You can create bjects two ways:

   var dog = {}

   or

   var dog = new object()
*/

// Store arrays in Objects
var treats = ["bone", "steak"]
dog.treats = treats // The "treats" array is now stored in the Objects

// Use functions() or methods in an Object
dog.bark = function(){
  console.log("Arf!")
}
dog.bark()

// OBJECTS: Prototypes/ Inheritance / THIS

/*  In JavaScript all function() are objects and can do everything
    regular objects do.
*/

var meal = {
  steak: "Yes!"
  tofu: "maybe"
}
console.log(steak)

//  Check if the function Dog() is an object
function Dog(){
  return "Hello"
}
console,log(Dog instanceof Object)

/*  A prototype is an object that is a source of propoerties. When an object
    is asked for a property that it doesn't have, it will search the prototype
    to see if it has the desired propoerty.
*/

var Human = function(){
  age: 25;
  myAge: function(){
    console.log(this.age)
  }
}
Human.toString(Human.age)

/*  Inheritance is when a user defined object inherits properties from another
    object's prototype.
*/

//In the below code, have David inherit the property myAge from the Human object
var Male = function(age){
  this.age = age
}
//  Connect the chain of prototypes from Male to Human to Object
Male.prototype = Human.prototype David = new Male(44)
Dvid.myAge()

/*  A constructor is a function() that creates objects from a shared prototype.
    For a function to be a constructor, you will need to call it with the
    keyword "new". By using "new" you create an instance of the constructor.
*/

function Dog(name){
  this.name = name
}
var poodle = new Dog("Willa")
console.log(poodle.name)

/*  The keyword "this" is a variable that is bound to the newly constructed
    object. Each instance of the constructor will refer to the values that
    "this" holds. The keyword "this" can be a variable and an object.
*/

function Dog(age){
  this.age = age
}
var corgi = new Dog(5)
console.log(corgi.age)

/*  Use an instance called "boy" to use the keyword "this" to store his
    name property.
*/

function Person(name){
  this.name = name
  this.hello = function(){
    console.log("Hi " + this.name)
  }
}
var boy = new Person()
boy.name = "Nathan"
boy.helo()

/*  The instanceOf operator takes an object and constructor function as
    parameters. the operator checks if the provided object is an instance of
    the given constructor function.
*/

function Animal(){}
  var otter = new Animal()
  otter instanceOf Animal

/*  To add properties to our prototype use .prototype. All properties added
    to the prototypewill be accessible to the prototype instances.
*/

//  Add the property "human" to the "person" prototype below
function Person(name, age){
  this.name = name
  this.age = age
}
var guy = new Person("Alex", 24)
Person.prototype.human = true
console.log(guy.human)
