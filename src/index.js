
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var b = [];
  if (!Array.isArray(matrix)) {
    return b;
  }
  if (matrix.length <= 0) {
    return b;
  }
  for (let i = 0; i < matrix.length; i++) {
      if (i%2 !== 0) {
        matrix[i].reverse();
      }
    b = b.concat(matrix[i]);
  }
  return b;
}
