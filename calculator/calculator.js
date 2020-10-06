module.exports = {
  add,
};

function add(a = 0, b = 0) {
  return a + b;

  if (a === b) {
    return a * 2;
  } else {
    return a * b;
  }
}
