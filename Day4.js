/*
* Soru 1: Tekrarlanan Elemanı Hızlıca Tespit Etme (Set Kullanımı)

? Problem: Bir tamsayı dizisi (array) veriliyor. Bu dizide herhangi bir elemanın birden fazla geçip geçmediğini (true ya da false olarak) döndüren bir fonksiyon yazın.

Örnekler:

Girdi: [1, 2, 3, 1] → Çıktı: true

Girdi: [4, 5, 6, 7] → Çıktı: false

! Kısıt: Çözümünüzün zaman karmaşıklığı O(n^2)'den daha iyi olmalıdır.

Çözüm İpucu: Set veri yapısının benzersizlik özelliğini kullanarak, dizideki her elemanı eklerken aynı zamanda kontrol edebilirsin.
*/

const trueValues = [1, 2, 3, 1];
const falseValues = [4, 5, 6, 7];

const isUnique = (arr) => {
  const uniqueValues = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (uniqueValues.has(arr[i])) {
      return false;
    }
    uniqueValues.add(arr[i]);
  }
  return true;
};

console.log("True: ", isUnique(falseValues));
console.log("False: ", isUnique(trueValues));

/*
* Soru 2: İki Sayının Toplamı (Hash Tablo Hızlandırma)

? Problem: Bir tamsayı dizisi (nums) ve bir hedef tamsayı (target) veriliyor. Dizideki hangi iki sayının toplamının target'a eşit olduğunu bulan bir algoritma yazın. Fonksiyonunuz bu iki sayının dizideki indekslerini içeren bir dizi döndürmelidir.

Örnek:

Girdi: nums = [2, 7, 11, 15], target = 9 → Çıktı: [0, 1]

Kısıt: Çözümünüzün zaman karmaşıklığı O(n) olmalıdır.

Çözüm İpucu: Tamamlayıcı sayıyı (target - mevcut sayı) hızlıca aramak için gördüğünüz sayıları ve indekslerini bir Map (veya Object) içinde saklayarak O(1) hızında kontrol etmelisin.
*/

const nums = [2, 7, 11, 15];

const twoSumO2 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

const twoSumO = (arr, target) => {
  const numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const complement = target - currentNum;

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(currentNum, i);
  }
  return [];
};

console.log(twoSumO2(nums, 26));
console.log(twoSumO(nums, 26));

/* 
* 3. Soru: En Çok Tekrar Eden Karakteri Bulma (Map/Object Kullanımı)
? Problem: Bir dize (string) veriliyor. Bu dizede en çok tekrar eden karakteri bulan bir fonksiyon yazın. Eşitlik durumunda, ilk karşılaşılan karakteri döndürmelisin.

Örnekler:
Girdi: "abrakadabra"
Çıktı: "a" (6 kez tekrar ediyor)

Girdi: "hello world"
Çıktı: "l" (3 kez tekrar ediyor)

Çözüm İpucu: Dizedeki her karakterin sayısını tutmak için bir Map (veya Object) kullan. Dize üzerinde tek bir geçiş (iterasyon) yaparak tüm karakter sayılarını hesapladıktan sonra, Map üzerinde en yüksek değere (tekrarlama sayısına) sahip anahtarı bulmalısın.
*/

const letterCounter = (str) => {
  const letter = {};
  for (let i = 0; i < str.split("").length; i++) {
    if (str[i] in letter) {
      letter[str[i]] += 1;
    } else {
      letter[str[i]] = 1;
    }
  }
  for (const [key, value] of Object.entries(letter)) {
    if (Math.max(...Object.values(letter)) === value) {
      return key;
    }
  }
};

console.log(letterCounter("abrakadabra"));
