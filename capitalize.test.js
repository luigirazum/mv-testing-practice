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

  test('string "capitalize" should be returned as "Capitalize"', () => {
    // Arrange
    const string = 'capitalize';

    // Act
    const stringCapitalized = capitalize(string);

    // Assert
    expect(stringCapitalized).toMatch(/Capitalize/);
  });
});

describe('Tests for one word string', () => {
  test('string "hello world" should be returned as "Hello World"', () => {
    // Arrange
    const string = 'hello world';

    // Act
    const stringCapitalized = capitalize(string);

    // Assert
    expect(stringCapitalized).toMatch(/Hello World/);
  });
});