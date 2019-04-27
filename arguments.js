function sumStuff(arg, ...otherArgs) {
  let args = otherArgs;
  let res = arg;
  args.forEach(num => res += num);
  return res;
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

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

Function.prototype.myBind1 = function (ctx) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function _boundFn() {
    const callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  }
}

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs))
}

const curriedSum = (numArgs) => {
  let numbers = [];
  const _curriedSum = (arg) => {
    numbers.push(arg);
    if (numbers.length === numArgs) {
      let res = 0;
      numbers.forEach(num => res += num);
      return res;
    } else {
      return _curriedSum;
    }

  }
  return _curriedSum;
}

Function.prototype.curry = (numArgs) => {
  let args = [];

  const _curry = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this(...args);
    } else {
      return _curry
    }
  }

  return _curry;
}

Function.prototype.curry1 = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(args) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(args);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
}

