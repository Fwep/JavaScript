Array.prototype.bubbleSort = function() {
  const swap = (arr, i1, i2) => {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }
  
  let sorted = true;
  let arr = this;

  while (sorted) {
    sorted = false;
    
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1 && arr[i] > arr[i + 1]) {
        sorted = true;
        swap(arr, i, i + 1);
      }
    }
  }

  return arr;
}

String.prototype.substrings = function() {
  let res = [];
  
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      res.push(this.substring(i, j));
    }
  }

  return res;
}