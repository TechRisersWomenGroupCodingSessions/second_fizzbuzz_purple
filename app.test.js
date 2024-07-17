const fizzbuzz = require('./app');

// test('separates rows with newline', () => {
//   expect(fizzbuzz(2)).toBe("1\n2");
// });

// test('print out "Fizz" if number is divisible by 3', () => {
//   expect(fizzbuzz(3)).toBe("1\n2\nFizz");
// });

// test('print out "Buzz" if number is divisible by 5', () => {
//   expect(fizzbuzz(5)).toBe("1\n2\nFizz\n4\nBuzz");
// });

test('print out "Buzz" if number is divisible by 5', () => {
  expect(fizzbuzz(5)).toBe("1\n2\nFizz\n4\nBuzz");
});