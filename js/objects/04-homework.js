// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Пиши код ниже этой строки
//   for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   console.log(keys);
//   console.log(values);


// Задача 12

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }


  // console.log(countProps({ name: 'Mango', age: 2 }));

//  Задача 13

// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Пиши код ниже этой строки
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//       values.push(apartment[key]);
//   }

//   console.log(values);

// Задача 14

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
// const keys = Object.keys(object);
//   for (const key of keys) {
//       propCount += 1;
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }

// console.log(countProps({ name: 'Mango', age: 2 }));

// Задача 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
// const values = Object.values(salaries);
// for (const value of values) {
//   totalSalary += value;
// }
//   // Пиши код выше этой строки
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// Задача 17

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);

// Задача 18

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Пиши код выше этой строки
// }

// console.log(getProductPrice('Сканер'));

// Задача 19

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let keys = [];
//   let values = [];

//   for (const product of products) {
//   keys = Object.keys(product);
//     if (keys.includes(propName)) {
//       values.push(product[propName]);
//     }
// }
// return values;
//   // Change code above this line
// }

// console.log(getAllPropValues("name"));

// Задача 20

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let totalPrice = 0;
// for (const product of products) {
//   if (productName === product.name) {
//     totalPrice = product.price * product.quantity;
//   }
// }
// return totalPrice;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Дроид'));

// Задача 21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const { yesterday, today, tomorrow } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// Задача 23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const { yesterday: highYesterday, 
//   today: highToday, 
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

// Задача 25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// const { today: {low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
// tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } } = forecast;

// Задача 26

// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const { today: {low: todayLow, high: todayHigh },
// tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));

// Задача 30

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   return data = {category, priority,  ...data, completed};
//   // Пиши код выше этой строки
// }

// console.log(makeTask({ text: 'Купить хлеб' }));

// Задача 31

// function add(...args) {
//   console.log(args);
//   let result = 0;
//   for (const arg of args) {
//     result += arg;
//   }
//   return result;
//   // Пиши код выше этой строки
// }

// console.log(add(15, 27));

// Задача 32

// Пиши код ниже этой строки
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   return total;
//   // Пиши код выше этой строки
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// Задача 33

// Пиши код ниже этой строки
// function findMatches(firstArray, ...args) {
//   const matches = []; // Не изменяй эту строку
// console.log(firstArray);
// console.log(args);

// for (const arg of args) {
//   if (firstArray.includes(arg)) {
//     matches.push(arg);
//   }
// }
//   // Пиши код выше этой строки
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// Задача 34

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };

// Задача 35

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     return this.books
	
	
//     // Пиши код выше этой строки
//   },
//   // getBooks() {
//   //   return this.books;
//   // },
// };

// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));

// Задача 37

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//     return this.potions;
//   }
//   // Пиши код выше этой строки
// };

// Задача 38

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     return this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };

// Задача 39

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(potionName);
//     return this.potions.splice(potionIndex, 1);
//     // Пиши код выше этой строки
//   },
// };

// Задача 40

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(oldName);
//     return this.potions.splice(potionIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };

// Задача 41

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],

//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//         if (potionName === potions[i].name) {
//             potions.splice(i, 1);
//         }
//     }
//   },
//   updatePotionName(oldName, newName) {
    
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//         if (oldName === potions[i].name) {
//           this.potions.splice(i, 1, {name: newName, price: this.potions[i].price});
//         }
//     }
    
//   },
//   // Пиши код выше этой строки
// };

// console.log(atTheOldToad.getPotions());

// // atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });

// console.log(atTheOldToad.getPotions());

// atTheOldToad.removePotion('Дыхание дракона');

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));

