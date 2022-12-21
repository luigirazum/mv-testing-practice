const capitalize = require ('./capitalize');

describe('Tests for non valid strings', () => {
  test('empty string should thrown an error', () => {
    // Arrange
    const string = '';

    // Act
    const stringCapitalized = () => capitalize(string);

    // Assert
    expect(stringCapitalized).toThrow(Error);
  });

  test('null should thrown an error', () => {
    // Arrange
    const string = null;

    // Act
    const stringCapitalized = () => capitalize(string);

    // Assert
    expect(stringCapitalized).toThrow(Error);
  });

  test('undefined should thrown an error', () => {
    // Arrange
    const string = undefined;

    // Act
    const stringCapitalized = () => capitalize(string);

    // Assert
    expect(stringCapitalized).toThrow(Error);
  });
});

describe('Tests for one word string', () => {
  test('string "a" should be returned as "A"', () => {
    // Arrange
    const string = 'a';

    // Act
    const stringCapitalized = capitalize(string);

    // Assert
    expect(stringCapitalized).toMatch(/A/);
  });
});
