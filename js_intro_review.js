const madLib = (verb, adj, noun) => { // O(1) time | O(1) space
   console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`);
}

let isSubstring = function(searchString, subString) {
  for  (let i = 0; i < searchString.length; i++) {
      if (searchString.slice(i, i + subString.length) === subString) return true;
  }
  return false;
}

const fizzBuzz = array => {
  return array.map(num => {
    if (num % 3 == 0 && num % 5 != 0) return "fizz";
    if (num % 5 == 0 && num % 3 != 0) return "buzz";
    return num;
  })
}

const isPrime = number => {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

const firstNPrimes = n => {
  let res = [];
  let idx = 2;
  while (res.length < n) {
    if (isPrime(idx)) res.push(idx);
    idx++;
  }

  return res;
}

const sumOfNPrimes = n => {
  let sum = 0;
  let firstN = firstNPrimes(n);
  firstN.forEach(prime => sum += prime);
  return sum;
}

const printCallback = names => {
  names.forEach(name => console.log(name));
}

const titleize = (names, printCallback) => {
  let titledNames = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  printCallback(titledNames);
}

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
  console.log(this);
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'reeeeeeeeeee'`);
}

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick)
}

Elephant.prototype.play = function() {
  let trick = this.tricks[(Math.floor(Math.random() * 10) % this.tricks.length)];
  console.log(`${this.name} is ${trick}!`)
}

Elephant.paradeHelper = (elephant) => {
  console.log(`${elephant.name} is trotting by!`)
}

const dinerBreakfast = (food) => {
  let order = ["cheesy scrambled eggs"];

  const makeOrder = order => {
    let orderStr = "I'd like cheesy scrambled eggs"
    for (let i = 1; i < order.length; i++) {
      orderStr += ` and ${order[i]}`
    }
    orderStr += " please."

    console.log(orderStr);
  }

  order.push(food);
  makeOrder(order);
}

let dumbo = new Elephant();