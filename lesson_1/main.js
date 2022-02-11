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

let myList = [1, 3, 4, 6, 7, 8, 10, 12, 23, 45, 56, 78, 99];
// 1, 2, 3, 4, 5, 6, 7
//  6 > 4
// 6

//  4 5 6 7

function binarySearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    let middleIndex = (i + arr.length - 1) / 2;
    if (key > arr[middleIndex]) {
      i = middleIndex;
    }
  }
  return "None";
}

console.log(binarySearch(myList, 99));
