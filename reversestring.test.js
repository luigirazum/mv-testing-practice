const reverseString = require ('./reversestring');

test('reverseString must return "aloh" with "hola" string', () => {
  // Arrange
  const string = 'hola';

  // Act
  const rvrString = reverseString(string);

  // Assert
  expect(rvrString).toMatch(/aloh/);
});

test('reverseString must return "ramar" with "ramar" string', () => {
  // Arrange
  const string = 'ramar';

  // Act
  const rvrString = reverseString(string);

  // Assert
  expect(rvrString).toMatch(/ramar/);
});

test('reverseString must return "esrever" with "reverse" string', () => {
  // Arrange
  const string = 'reverse';

  // Act
  const rvrString = reverseString(string);

  // Assert
  expect(rvrString).toMatch(/esrever/);
});
