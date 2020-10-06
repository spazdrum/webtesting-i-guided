const { add } = require("./calculator.js");

// test away!

describe("calculator.js tests", () => {
  describe("add() tests", () => {
    it("should return the sum of numbers passed", () => {
      expect(add(2, 2)).toBe(4);
      expect(add(2, 3)).toBe(5);
    });

    it.todo("should return NaN when called with no arguments");

    it("should return 0 when called with no arguments", () => {
      const expected = 0;
      const actual = add();
      expect(actual).toBe(expected);
    });

    it("should return 0 when called with no parameters", () => {
      expect(add()).toBe(0);
    });

    it("should return the value passed when only one argument is provided", () => {
      expect(add(1)).toBe(1);
    });

    it("should handle any number arguments, separated bu comma", () => {
      expects(add(1, 2, 3)).toBe(6);
      expect(add(1, 2, 3, 5)).toBe(11);
    });

    it("should handle an array of numbers", () => {
      expected(add(1, 2, 3)).toBe(6);
      expected(add(1, 2, 3, 5)).toBe(11);
    });
  });
});
