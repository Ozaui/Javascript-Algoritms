// Soru 1 — En Büyük Sayıyı Bul

const biggestNumber = (...nums) => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
};

console.log(
  "En büyük sayı: ",
  biggestNumber(0, 4, 2, 6, 2, 4, 6, 8, 5, 3, 9, 3, 11, 6)
);
console.log("En büyük sayı: ", biggestNumber());

// Soru 2 — Diziyi Tersine Çevir (Reverse)
const reverseArray = (arr) => {
  let arrToString = "";
  for (let i = 0; i < arr.length; i++) {
    arrToString += arr[i].toString();
  }
  let reverseString = "";
  for (let i = arrToString.length - 1; i >= 0; i--) {
    reverseString += arrToString[i];
  }

  return reverseString.split("");
};

console.log("arr to string: ", reverseArray([1, 2, 3, 4, 5]));

// Soru 3 — Palindrome Kontrolü
const palindrome = (str) => {
  let splitedString = str.split("");
  let newString = "";
  for (let i = splitedString.length - 1; i >= 0; i--) {
    newString += splitedString[i];
  }
  if (newString == str) return true;
  else return false;
};

console.log(palindrome("kayak"));
