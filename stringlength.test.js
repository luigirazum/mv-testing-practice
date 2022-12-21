const stringLength = require('./stringlength');

test('stringLength must return 4 with -hola- string', () => {
  // Arrange
  const string = 'hola';

  // Act
  const strLength = stringLength(string);

  // Assert
  expect(strLength).toBe(4);
});

test('stringLength must return 9 with -my string- string', () => {
  // Arrange
  const string = 'my string';

  // Act
  const strLength = stringLength(string);

  // Assert
  expect(strLength).toBe(9);
});