const range = (start, end) => {
  if (start > end) return [];
  if (start == end) return [end];

  return [start].concat(range(start + 1, end));
}

const sumRec = (arr) => {
  if (!arr.length) return 0;
  return arr[0] + sumRec(arr.slice(1));
}

const exp1 = (b, n) => {
  if (n == 0) return 1;
  return b * exp1(b, n - 1);
}

const exp2 = (b, n) => {
  if (!n) return 1;
  if (n == 1) return b;
  if (n % 2 == 0) {
    let sub = exp2(b, n/2);
    return sub * sub;
  } else {
    let sub = exp2(b, (n-1)/2);
    return b * exp2(sub, b);
  }
}

const fibonacci = (n) => {
  if (n == 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  let prevFibs = fibonacci(n - 1);
  prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]);
  return prevFibs;
}

const deepDup = (arr) => {
  return arr.map(el => {
    if (typeof el == 'object') {
      return deepDup(el);
    } else {
      return el;
    }
  })
}

const bsearch = (arr, target) => {
  if (!arr.length) return -1;

  let mid = Math.floor(arr.length/2);
  let midEl = arr[mid];

  if (midEl == target) {
    return mid;
  } else if (target < midEl) {
    return bsearch(arr.slice(0, mid), target);
  } else {
    return (mid + 1) + bsearch(arr.slice(mid + 1), target);
  }
}

const mergesort = (arr) => {
  if (arr.length <= 1) return arr;
  let left = arr.slice(0, Math.floor(arr.length/2));
  let right = arr.slice(Math.floor(arr.length/2));
  
  const merge = (left, right) => {
    let res = [];

    while (left.length && right.length) { 
      if (left[0] > right[0]) {
        res.push(right.shift());
      } else {
        res.push(left.shift());
      }
    }

    return res.concat(left, right);
  }

  return merge(mergesort(left), mergesort(right));
}

const subsets = (arr) => {
  if (!arr.length) return [[]];
  let subset = subsets(arr.slice(1));
  return subset.concat(subset.map(el => [arr[0]].concat(el)));
}