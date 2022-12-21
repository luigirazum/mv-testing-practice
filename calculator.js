class Calculator {
  add = (a, b) => a + b;

  substract = (a, b) => a - b;

  multiply = (a, b) => a * b;
  
  divide = (a, b) => {
    if (!b) {
      throw new Error('Cannot divide by zero!');
    }

    return a / b;
  };
}

module.exports = Calculator;