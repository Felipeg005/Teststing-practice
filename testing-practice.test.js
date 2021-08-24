// Task 1

test('string lenght is greater than 10', () => {
  //Arrange
  const stringLength =(string) => {
    string = 'hello world';
  //Act
  if (string.length <= 0 || string.length >= 10){
    throw new Error('string has less or more than 10 characters');
  } else {
    return string.length;
  }}
  //Assert
  expect(() => stringLength()).toThrow(Error);
});

// Task 2

test('string is reversed', () => {
  //Arrange
  const stringReverse =(string) => {
    string = 'hello world';
  //Act
    return string.split("").reverse().join("");  
}
  //Assert
  expect(stringReverse()).toBe('dlrow olleh');
});

// Task 3
describe('calculator', () => {
  //Arrange
  class Calculator {
    //Act
    add(value){
      return value += value;
    }
  
    substract(value) {
      return value = value - value;
    }
  
    divide(value) {
      return value = value / value;
    }
  
    multiply(value) {
      return value = value * value;
    }
  }
  
  const calculator = new Calculator();

  //Assert
  describe('calculator add function', () => {
  test('add 3', () => {
    expect(calculator.add(3)).toBe(6);
  });
  test('add 5', () => {
    expect(calculator.add(5)).toBe(10);
  });
  test('add 10', () => {
    expect(calculator.add(10)).toBe(20);
  });
});

  describe('calculator substraction function', () => {
  test('substract 3', () => {
    expect(calculator.substract(3)).toBe(0);
  });
  test('substract 5', () => {
    expect(calculator.substract(5)).toBe(0);
  });
  test('substract 10', () => {
    expect(calculator.substract(10)).toBe(0);
  });
});

  describe('calculator divide function', () => {
  test('Divide 3', () => {
    expect(calculator.divide(3)).toBe(1);
  });
  test('Divide 5', () => {
    expect(calculator.divide(5)).toBe(1);
  });
  test('Divide 10', () => {
    expect(calculator.divide(10)).toBe(1);
  });
});

  describe('calculator multiply function', () => {
  test('multiply 3', () => {
    expect(calculator.multiply(3)).toBe(9);
  });
  test('multiply 5', () => {
    expect(calculator.multiply(5)).toBe(25);
  });
  test('multiply 10', () => {
    expect(calculator.multiply(10)).toBe(100);
  });
});
});

// Task 4

test('capitalize String' , () =>{
  //Arrange
  const string = 'hello';
  //Act
  let capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  //Assert
  expect(capitalize(string)).toBe('Hello');
});