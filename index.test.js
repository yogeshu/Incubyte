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

test("should return 6 for three numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("should return 10 for 4 numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("should return 6 for new line separator", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should return 3 for custom delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});
