// Task 5
// Напиши скрипт з наступним функціоналом:

// - При завантаженні сторінки користувачеві пропонується в `prompt` ввести число.
//   Введення зберігається в змінну `input` і додається в масив чисел `numbers`.
// - Операція введення числа користувачем і збереження в масив триває до тих пор,
//   пір, поки користувач не натисне `Cancel` в `prompt`.
// - Після того як користувач припинив введення натиснувши `Cancel`, якщо масив не
//   порожній, необхідно порахувати суму всіх елементів масиву і записати її в
//   змінну `total`. Використовуй цикл `for` або `for...of`. Після чого в консоль
//   виведи рядок `'Загальна сума чисел дорівнює [сума]'`.

// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір
// символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй
// `alert` з текстом `'Було введено не число, попробуйте ще раз'`, при цьому
// результат `prompt` записувати в масив чисел не потрібно, після чого знову
// користувачеві пропонується ввести число в `prompt`.

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Please enter a number:");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (!isNaN(number)) {
    numbers.push(number);
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
} while (input !== null);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  console.log(`Total sum of numbers is ${total}`);
} else {
  console.log("No numbers entered.");
}
