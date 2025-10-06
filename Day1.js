// Gün 1 – Temel Array & Number İşlemleri
// Array içindeki tüm sayıların toplamını bul.

const numbers = [5, 12, 8, 130, 44];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum: ", sum);

// Verilen iki sayının çarpımı yerine toplamını döndüren fonksiyon

console.log("Avarage: ", sum / numbers.length);

// Tek sayıları filtrele: Array’deki tüm tek sayıları ayrı bir array olarak döndür.

const oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 1) {
    oddNumbers.push(numbers[i]);
  }
}

console.log(oddNumbers);

for (let i = 0; i < numbers.length; i++) {}

// Array içindeki en büyük ve en küçük sayıyı bul.

let min = numbers[0];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("max: ", max);
console.log("min: ", min);
