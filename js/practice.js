// 5*. Напишите код, который будет спрашивать
// логин с помощью prompt и логировать результат
// в консоль браузера.

// Если посетитель вводит «Админ»,
// то prompt запрашивает пароль
// Если ничего не введено или нажата
// клавиша Esc – вывести строку «Отменено»
// В противном случае вывести строку «Я вас не знаю»
// Пароль проверять так:

// Если введён пароль «Я главный»,
// то вывести строку «Здравствуйте!»
// Иначе выводить строку «Неверный пароль»

// переписать на switch case
// вложенные проверки переписать на тернар

// const loginInput = prompt("Введите свой логин");

// if (loginInput === "Админ") {
//   const passwordInput = prompt("Введите свой пароль");
//   if (passwordInput) {
//     if (passwordInput === "Я главный") {
//       console.log("Здравствуйте!");
//     } else {
//       console.log("Неверный пароль");
//     }
//   } else {
//     console.log("Отменено");
//   }
// } else {
//   console.log("Я вас не знаю");
// }

// const loginInput = prompt("Введите свой логин");

// if (loginInput === "Админ") {
//   const passwordInput = prompt("Введите свой пароль");
//   if (passwordInput) {
//     passwordInput === "Я главный" ? console.log("Здравствуйте!") : console.log("Неверный пароль");
//   } else {
//     console.log("Отменено");
//   }
// } else {
//   console.log("Я вас не знаю");
// }

const loginInput = prompt("Введите свой логин");

if (loginInput === "Админ") {
  const passwordInput = prompt("Введите свой пароль");
  switch (passwordInput) {
      case "Я главный":
        console.log("Здравствуйте!");
        break;
      default: (console.log("Неверный пароль"))  
  }

//   if (passwordInput) {
//     if (passwordInput === "Я главный") {
//       console.log("Здравствуйте!");
//     } else {
//       console.log("Неверный пароль");
//     }
//   } else {
//     console.log("Отменено");
//   }
} else {
  console.log("Я вас не знаю");
}