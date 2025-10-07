// Faktoriyel hesaplayan fonksiyon

// iterative funtion
const faktoriyel = (i) => {
  let result = 1;
  for (let a = i; a > 1; a--) {
    result = result * a;
  }
  return result;
};

console.log("Result: ", faktoriyel(4));

// recursive funtion
const recursiveFaktoriyel = (i) => {
  if (i == 0 || i == 1) return 1;
  return i * recursiveFaktoriyel(i - 1);
};

console.log("Result with recurive ", recursiveFaktoriyel(4));

// Soru: Fibonacci dizisini bulan fonksiyon yaz.
// (0, 1, 1, 2, 3, 5, 8, 13, …)

// iterative function
const fibonatci = (i) => {
  let fib = [0, 1];
  for (let j = 2; j < i; j++) {
    fib.push(fib[j - 1] + fib[j - 2]);
  }
  return fib;
};

console.log("fibonatci: ", fibonatci(5));

// recursive function
const recuriveFibonatci = (i) => {
  if (i == 1) return [0];
  if (i == 2) return [0, 1];
  prev = recuriveFibonatci(i - 1);
  next = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, next];
};

console.log("fibonatci with recurive:", recuriveFibonatci(5));
