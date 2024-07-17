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

// test('print out "FizzBuzz" if number is divisible by 3 and 5', () => {
//   expect(fizzbuzz(15)).toContain("14\nFizzBuzz");
// });

// test('raise an error when passing invalid value', () => {
//   expect(() => {fizzbuzz('lol')}).toThrowError;
// });

test('raise a custom error when passing invalid value', () => {
    expect(() => { fizzbuzz('lol') }).toThrowError('Lol, you messed up :P');
});