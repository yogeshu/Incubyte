// Path: index.js

const add = (numbers) => {
  if (numbers === "") {
    return 0;
  }
  return numbers.split(",").reduce((acc, num) => acc + parseInt(num), 0);
};

module.exports = { add };
