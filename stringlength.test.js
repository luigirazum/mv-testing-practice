const stringLength = require('./stringlength');

test('stringLength must return 4 with "hola" string', () => {
  // Arrange
  const string = 'hola';

  // Act
  const strLength = stringLength(string);

  // Assert
  expect(strLength).toBe(4);
});

test('stringLength must return 9 with "my string" string', () => {
  // Arrange
  const string = 'my string';

  // Act
  const strLength = stringLength(string);

  // Assert
  expect(strLength).toBe(9);
});

test('stringLength must return 1 with "s" string', () => {
  // Arrange
  const string = 's';

  // Act
  const strLength = stringLength(string);

  // Assert
  expect(strLength).toBe(1);
});

test('stringLength must return 10 with "my strings" string', () => {
  // Arrange
  const string = 'my strings';

  // Act
  const strLength = stringLength(string);

  // Assert
  expect(strLength).toBe(10);
});

test('stringLength must throw an error if an empty string is provided', () => {
  // Arrange
  const string = '';

  // Act
  const strLength = () => stringLength(string);

  // Assert
  expect(strLength).toThrow(Error);
});

test('stringLength must throw an error for "this string" if a 10+ characters string is provided', () => {
  // Arrange
  const string = 'this string';

  // Act
  const strLength = () => stringLength(string);

  // Assert
  expect(strLength).toThrow(Error);
});

test('stringLength must throw an error for "another string" if a 10+ characters string is provided', () => {
  // Arrange
  const string = 'another string';

  // Act
  const strLength = () => stringLength(string);

  // Assert
  expect(strLength).toThrow(Error);
});