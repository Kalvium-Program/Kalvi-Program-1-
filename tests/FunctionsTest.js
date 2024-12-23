describe("squareArray", function() {
  it("should return a new array where each element is squared", function() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = squareArray(numbers);
    expect(result).toEqual([1, 4, 9, 16, 25, 36]);
  });
});
describe("calculateProduct", function() {
  it("should return the product of all elements in the array", function() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = calculateProduct(numbers);
    expect(result).toBe(720);  // 1 * 2 * 3 * 4 * 5 * 6 = 720
  });
});
describe("concatenateWords", function() {
  it("should return a string with all words concatenated with spaces", function() {
    const words = ['apple', 'banana', 'cat', 'dog'];
    const result = concatenateWords(words);
    expect(result).toBe("apple banana cat dog");
  });
});
describe("addElement", function() {
  it("should add the number 7 to the array", function() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = addElement(numbers);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
describe("removeLastElement", function() {
  it("should remove the last element from the array", function() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = removeLastElement(numbers);
    expect(result).toEqual([1, 2, 3, 4, 5]);  // Last element (6) is removed
  });
});
