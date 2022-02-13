// Masala:
/* Bizga quyidagi massiv berilgan:
myList = [1,3,4,6,7,8,10,12,23,45,56,78,99]

Massiv ichidan bizga kerakli qiymatning indeksini (tartib raqamini) 
linear search yordamida qaytaruvchi funksiya yozing. Agar qidiralayotgan 
qiymat massiv ichida mavjud bo’lmasa -1 yoki None qiymatini qaytaring.
 */

// let myList = [1, 3, 4, 6, 7, 8, 10, 12, 23, 45, 56, 78, 99];
// let user = +prompt("Son kiriting"),
//   res = null;

// for (let i = 0; i < myList.length; i++) {
//   if (user === myList[i]) {
//     res = -1;
//   } else res = "None";
// }
// console.log(res);

let myList = [1, 3, 4, 6, 7, 8, 10, 12, 23, 45, 56, 78, 99];
// Linear Search algoritmi

function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (key === myList[i]) {
      return -1;
    }
  }
  return "None";
}

console.log(linearSearch(myList, -1));

// Binary Search algoritmi

// 1, 2, 3, 4, 5, 6, 7
//  6 > 4
// 6

//  4 5 6 7
let myList = [1, 3, 4, 6, 7, 8, 10, 12, 23, 45, 56, 78, 99];

function binarySearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;
}
console.log(binarySearch(myList, 1));
