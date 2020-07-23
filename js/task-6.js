let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Enter a number:');
  numbers.push(Number(input));
} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
}

console.log(`Общая сумма чисел равна ${total}`);
