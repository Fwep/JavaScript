Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
}

Array.prototype.myMap = function(cb) {
  const res = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
}

Array.prototype.myReduce = function(cb, initialValue) {
  let arrToIterate = this;
  if (!initialValue) {
    initialValue = this[0];
    arrToIterate = arrToIterate.slice(1);
  }

  let res = initialValue;

  arrToIterate.forEach((el) => {
    res = cb(res, el);
  });

  console.log(res, initialValue);

  return initialValue;
}