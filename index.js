// Path: index.js

const add = (numbers) => {
  if (numbers === "") {
    return 0;
  }
  //   return numbers.split(",").reduce((acc, num) => acc + parseInt(num), 0);

  const delimiter = numbers.startsWith("//") ? numbers[2] : ",";
  const nums = numbers.startsWith("//") ? numbers.slice(4) : numbers;
  const separator = new RegExp(`[${delimiter}\n]`); // copied from chatGpt solution
  return nums.split(separator).reduce((acc, num) => acc + parseInt(num), 0);
};

module.exports = { add };
