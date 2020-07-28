/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  let total = n;
  for (; n > 1; n--) {
    total *= n - 1;
  }
  return total;

}

