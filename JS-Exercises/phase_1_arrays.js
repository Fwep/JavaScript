Array.prototype.uniq = function() {
  return this.filter((num, idx) => this.indexOf(num) == idx)
}

Array.prototype.twoSum = function() {
  let seen = {};
  let res = [];
  this.forEach((num, idx) => {
    let comp = -num;
    if (comp in seen) {
      let idxs = seen[comp];
      idxs.forEach(num => res.push([num, idx]));
    }
    (num in seen) ? seen[num].push(idx) : seen[num] = [idx]
  })

  return res;
}

Array.prototype.transpose = function() {
  let res = Array.from(
      {length: this[0].length},
      () => Array.from({ length: this.length })
    );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      res[j][i] = this[i][j];
    }
  }

  return res;
}