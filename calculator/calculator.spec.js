const { add } = require("./calculator.js");

// test away!

test("test that truth is trugh", () => {
  expect(true).toBe(true);
  // if (true === true) {
  //     // do some that indicates that the test passed
  // } else {
  //     // do something that indicates that it failed
  // }
});

it("should test that true is true", () => {
  expect(true).toBe(true);
});
