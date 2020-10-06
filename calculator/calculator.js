module.exports = {
  add,
};

function add(args) {
  const values = Array.isArray(args) ? args : Array.from(arguments);

  return values.reduce((sum, value) => {
    return sum + value;
  }, 0);
  // return a + b;

  if (a === b) {
    return a * 2;
  } else {
    return a * b;
  }
}
