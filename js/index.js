// Модуль 2. Занятие 1. Массивы и функции

// Задача 1

// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение «Блюз» на «Классика».
// 4. Удалите первый элемент и выведите его в консоль.
// 5. Вставьте «Рэп» и «Регги» в начало массива.

// Массив по ходу выполнения операций:

// a. Джаз, Блюз
// b. Джаз, Блюз, Рок-н-ролл
// c. Джаз, Классика, Рок-н-ролл
// d. Классика, Рок-н-ролл
// e.Рэп, Регги, Классика, Рок - н - ролл;

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");

// console.log(styles);

// styles.splice(1, 1, "Классика");

// console.log(styles);

// const deletedElem = styles.shift();

// console.log(deletedElem);

// console.log(styles);

// styles.unshift("Рэп", "Регги");

// console.log(styles);

// --------------------

// Задача 2

// Напишите функцию min(a,b), которая возвращает
// меньшее из чисел a и b.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Аргументы должны быть цифрами!";
//   }

//   return a > b ? b : a;
// }

// console.log(min(10, 7));

// --------------------

// Задача 3

// Напишите функцию logItems(array), которая получает
// массив и использует цикл for,
// который для каждого элемента массива будет выводить
// в консоль сообщение в формате
// <номер элемента> - <значение элемента>.
// Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива
// ['Mango', 'Poly', 'Ajax'] с индексом
// 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const arr = ["Mango", "Poly", "Ajax"];

// function logItems(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${i + 1} - ${arr[i]}`);
//   }
// }

// logItems(arr);

// --------------------

// Задача 4

// Вернуть отсортированную копию по алфавиту
// (не меняя исходный массив)
// не использовать Array.prototype.sort()

// const ex4 = [2, 1, 65];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }

//   return arr;
// }

// console.log(bubbleSort(ex4));

// --------------------

// Задача 5

// Напиши функцию findSmallestNumber(numbers)которая
// ищет самое маленькое число в массиве.

// ДЗ - Посмотреть как можно валидировать массив

// const ex5 = [104, 67, 54, 89, 2, 19];

// function findSmallestNumber(numbers) {
//     let min = numbers[0];

//     for (const number of numbers) {
//         if (min > number) {
//             min = number;
//         }
//     }

//     return min;
// }

// console.log(findSmallestNumber(ex5))

// function findSmallestNumber(numbers) {
//   let min = numbers[0];

//   for (const number of numbers) {
//     if (min > number) {
//       min = number;
//     }
//   }

//   return min;
// }

// console.log(findSmallestNumber(ex5));

// --------------------

// Задача 6

// Напиши функцию calculateAverage()
// которая принимает произвольное кол-во
// аргументов и возвращает их среднее значение.
// Все аругменты будут только числами.

// function calculateAverage() {
//   const args = arguments;
//   let sum = 0;
//   let totalCount = 0;

//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     } else {
//       sum += arg;
//       totalCount++;
//       // totalCount += 1;
//     }
//   }

//   return sum / totalCount;
// }

// console.log(calculateAverage(2, 5, 10, "asdhvghasd", [3, 3, 2]));

// --------------------

// Модуль 2. Занятие 2. Массивы и функции

// Задача 7

// Напиши функцнию findLongestWord(string)
// которая принимает произвольную строку
// состоящую только из слов разделённых
// пробелом (параметр string)
// и возвращает самое длинное слово в этой строке.

// ДЗ - добавить проверку, когда все слова ровны

// function findLongestWord(randomWords) {
//   if (typeof randomWords !== "string") {
//     return;
//   }

//   const splittedWords = randomWords.split(" ");
//   let longestWord = splittedWords[0];

//   for (const word of splittedWords) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
    
//   }

//   return longestWord;
// }

// console.log(findLongestWord("Я хочу стать програмистом"));



// function findLongestWord(string) {
//   // Пиши код ниже этой строки
  
//   string = string.split(' ');
//   let longestWord = string[0];
  
//   for (const word of string) {
//     if (word.length >= longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;

//   // Пиши код выше этой строки
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


// ----------------------

// Задача 8

// Напишите функцию greet(name), которая
// при вызове будет получать имя (например, «Василий»)
// и логировать строку «Привет, <имя>».
// В случае отсутствующего аргумента выводить «Привет, гость»

// function greet(name) {
//   if (typeof name !== 'string') {
//     return "Привет, гость";
//   }

//   return name ? `Привет, ${name}` : 'Привет, гость';
// }

// console.log(greet(6));

// function greet(name) {
//   if (typeof name !== "string") {
//     return "Привет, гость";
//   }

//   return name ? `Привет ${name}` : "Привет, гость";
// }

// console.log(greet(""));

// ----------------------

// Задача 9

// Напишите функцию findTheColor()
// которая принимает название цвета
// и определяет его наличие в масиве.
// Аргумент должен быть строкой.

// ДЗ от Жени - вывести индекс цвета в шаблонной строке

// const colors = ["red", "yellow", "blue", "green"];

// function findTheColor(colorName) {
//   if (typeof colorName !== "string") {
//     return;
//   }

//   return colors.includes(colorName);
// }

// console.log(findTheColor("yellow"));

// ----------------------

// Задача 10

// Выполните рефакторинг заменив объявление
// функции на стрелочную функцию.

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// }

// const checkNumbers = (a, b) => {
//   return a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;
// };

// ----------------------

// Задача 11

// Выполните рефакторинг заменив объявление
// функции на стрелочную функцию.

// function mult(x, y, z) {
//   return x * y * z;
// }

// const mult = (x, y, z) => x * y * z;

// ----------------------

// Задача 12

// Напишите функции для работы с коллекцией обучающих
// курсов courses:

// 1. addCourse(name) - добавляет курс в конец коллекции
// 2. removeCourse(name) - удаляет курс из коллекции
// 3. updateCourse(oldName, newName)- изменяет имя на новое

// const courses = ["HTML", "CSS", "JavaScript", "React"];

// const addCourse = name => courses.push(name);

// addCourse("C++");

// const removeCourse = name => {
//   const index = courses.indexOf(name);

//   if (index !== -1) {
//     courses.splice(index, 1);
//   }

//   return courses;
// };

// removeCourse("CSS");

// const updateCourse = (oldName, newName) => {
//   const index = courses.indexOf(oldName);

//   if (index !== -1) {
//     courses.splice(index, 1, newName);
//   }

//   return courses;
// };

// updateCourse("HTML", "Python");

// // console.log(courses);

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
// for (let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }

//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// let array = [];
// for (let number of numbers) {
//   if (number > value) {
//     array.push(number);
//   }
// }
// return array;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   let array = [];
//   for (let number of array1) {
//     if (array2.includes(number)) {
//       array.push(number);
//     }
//   }
//   return array;
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (let i of order) {
//     total += i;
//   }

//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
// let array = [];
// for (let i = start; i <= end; i += 1) {
//   if (i % 2 === 0)
//   array.push(i);
// }

// return array;
  
//   // Пиши код выше этой строки
// }

// console.log(getEvenNumbers(3, 11));

function includes(array, value) {
  // Пиши код ниже этой строки
  for (let i of array) {
    if (i === value) {
    return true
    }
  }
  // Пиши код выше этой строки
}

console.log(includes([1, 2, 3, 4, 5], 3));