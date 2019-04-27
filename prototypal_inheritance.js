Function.prototype.inherits1 = function(Parent) { // Surrogate method
  function Surrogate() {};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

Function.prototype.inherits2 = function(Parent) { // Object.create method
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
}

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function bark() {
  console.log(this.name + " barks!");
};

function Corgi(name) {
  Dog.call(this, name);
}

Corgi.inherits2(Dog);

Corgi.prototype.waddle = function waddle() {
  console.log(this.name + " waddles!");
};

const blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();