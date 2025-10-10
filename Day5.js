// !Örnek1: Recurive faktoriyel hesaplayınız

const revursiveFactoriel = (i) => {
  if (i == 0 || i == 1) return 1;
  return i * revursiveFactoriel(i - 1);
};

console.log("faktoriyel: ", revursiveFactoriel(5));

// !Örnek 2: Recurive Fibonacci Serisi

const recuriveFibonatci = (i) => {
  if (i == 0) return 0;
  if (i == 1) return 1;
  return recuriveFibonatci(i - 1) + recuriveFibonatci(i - 2);
};

console.log("fibonatci: ", recuriveFibonatci(6));

// !Örnek 2: Recurive Fibonacci Serisi Array olarak

const recuriveFibonatciArray = (i) => {
  if (i == 1) return [0];
  if (i == 2) return [0, 1];
  prev = recuriveFibonatciArray(i - 1);
  next = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, next];
};

console.log("fibonatci with recurive:", recuriveFibonatciArray(5));

console.log([0, 1] + [1, 2, 3]);
