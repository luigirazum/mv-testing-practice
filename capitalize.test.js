const capitalize = require ('./capitalize');

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
