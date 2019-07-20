const sum = function(arg1, arg2) {
  let total = 0;
  let args = Array.from(arguments);
  args.forEach(arg => total += arg);
  return total;
}

const sum2 = (arg1, arg2, ...otherArgs) => {
  let total = arg1 + arg2;
  if (otherArgs.length) otherArgs.forEach(arg => total += arg);
  return total;
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}
Function.prototype.myBind = function() {
  let bindTimeArgs = Array.from(arguments);
  let fn = this;

  return function() {
    let totalArgs = bindTimeArgs.concat(Array.from(arguments));
    fn.apply(totalArgs[0], totalArgs.slice(1));
  }
}

Function.prototype.myBind2 = function(...bindTimeArgs) {
  return (...callTimeArgs) => {
    let args = bindTimeArgs.concat(callTimeArgs);
    this.apply(args[0], args.slice(1));  
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// const notMarkovSays = markov.says.myBind2(pavlov);
// notMarkovSays("meow", "me");

const curriedSum = function(numArgs, ...args) {
  let numbers = [...args];  
  
  const _curriedSum = function(arg) {
    if (arg) numbers.push(arg);
    if (numbers.length == numArgs) {
      let sum = 0;
      numbers.forEach(num => sum += num);
      return sum;
    } else { return _curriedSum;
    }
  }

  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  let args = [];

  const _curry = (arg) => {
    args.push(arg);
    if (args.length == numArgs) {
      return this(...args)
    } else {
      return _curry
    }
  }

  return _curry;
}

Function.prototype.curry2 = function(numArgs) {
  let args = [];

  const _curry = (arg) => {
    args.push(arg);
    if (numArgs == args.length) {
      this.apply(null, args);
    } else {
      return _curry;
    }
  }

  return _curry;
}