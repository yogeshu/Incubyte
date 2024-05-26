// write test cases for the index.js file using jest

const { add } = require("./index");

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return 1 for a single number", () => {
  expect(add("1")).toBe(1);
});

test("should return 6 for two numbers", () => {
  expect(add("1,5")).toBe(6);
});
