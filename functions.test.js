const functions = require('./functions');

it('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

it('Adds 2 + 2 should NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

it('should be null', () => {
  expect(functions.isNull()).toBeNull();
});

it('should be fallsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
