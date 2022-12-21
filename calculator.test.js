const Calculator = require ('./calculator');

describe('Add operations with Calculator', () => {
  test('Add 0 + 0 is equal to 0', () => {
    // Arrange
    const a = 0;
    const b = 0;
    const calculator = new Calculator();

    // Act
    const addResult = calculator.add(a, b);

    // Assert
    expect(addResult).toBe(0);
  });

  test('Add 0 + 1 is equal to 1', () => {
    // Arrange
    const a = 0;
    const b = 1;
    const calculator = new Calculator();

    // Act
    const addResult = calculator.add(a, b);

    // Assert
    expect(addResult).toBe(1);
  });

  test('Add 1 + 1 is equal to 2', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const calculator = new Calculator();

    // Act
    const addResult = calculator.add(a, b);

    // Assert
    expect(addResult).toBe(2);
  });
});