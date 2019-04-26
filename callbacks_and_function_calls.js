const readline = require('readline');

function teaAndBiscuits () {
  let first, second;

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  reader.question('Would you like some tea? ', arg => {
    first = arg;
    console.log(arg);
    reader.question('Would you like some crumpets? ', arg2 => {
      second = arg2;
      console.log(arg2);
      
      const firstRes = (first === 'yes') ? 'do' : 'don\'t';
      const secondRes = (second === 'yes') ? 'do' : 'don\'t';
      console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
      reader.close();
    });
  });
    
}

function Cat() {
  this.name = 'Markov';
  this.age = 3;
}

function Dog() {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat();
const Noodles = new Dog();

Noodles.chase.apply(Markov, [Noodles]);