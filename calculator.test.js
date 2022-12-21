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

describe('Substract operations with Calculator', () => {
  test('Substract 1 - 0 is equal to 1', () => {
    // Arrange
    const a = 1;
    const b = 0;
    const calculator = new Calculator();

    // Act
    const substractResult = calculator.substract(a, b);

    // Assert
    expect(substractResult).toBe(1);
  });

  test('Substract 1 - 1 is equal to 0', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const calculator = new Calculator();

    // Act
    const substractResult = calculator.substract(a, b);

    // Assert
    expect(substractResult).toBe(0);
  });

  test('Substract 2 - 1 is equal to 1', () => {
    // Arrange
    const a = 2;
    const b = 1;
    const calculator = new Calculator();

    // Act
    const substractResult = calculator.substract(a, b);

    // Assert
    expect(substractResult).toBe(1);
  });
});

describe('Multiply operations with Calculator', () => {
  test('Multiply 1 * 0 is equal to 0', () => {
  // Arrange
    const a = 1;
    const b = 0;
    const calculator = new Calculator();

    // Act
    const multiplyResult = calculator.multiply(a, b);

    // Assert
    expect(multiplyResult).toBe(0);
  });

  test('Multiply 1 * 1 is equal to 1', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const calculator = new Calculator();

    // Act
    const multiplyResult = calculator.multiply(a, b);

    // Assert
    expect(multiplyResult).toBe(1);
  });

  test('Multiply 2 * 1 is equal to 2', () => {
    // Arrange
    const a = 2;
    const b = 1;
    const calculator = new Calculator();

    // Act
    const multiplyResult = calculator.multiply(a, b);

    // Assert
    expect(multiplyResult).toBe(2);
  });
});

describe('Divide operations with Calculator', () => {
  test('Divide 1 / 0 throws an Error', () => {
  // Arrange
    const a = 1;
    const b = 0;
    const calculator = new Calculator();

    // Act
    const divideResult = () => calculator.divide(a, b);

    // Assert
    expect(divideResult).toThrow(Error);
  });

  test('Divide 1 / 1 is equal to 1', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const calculator = new Calculator();

    // Act
    const divideResult = calculator.divide(a, b);

    // Assert
    expect(divideResult).toBe(1);
  });

  test('Divide 2 / 1 is equal to 2', () => {
    // Arrange
    const a = 2;
    const b = 1;
    const calculator = new Calculator();

    // Act
    const divideResult = calculator.divide(a, b);

    // Assert
    expect(divideResult).toBe(2);
  });
});