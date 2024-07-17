const fizzbuzz = require('./app');

test('separates rows with newline', () => {
  expect(fizzbuzz(2)).toBe("1\n2");
});