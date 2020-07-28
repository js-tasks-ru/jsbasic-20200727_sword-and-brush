/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (isNaN(n) || n < 0) {
    return "Введите натуральное число";
  } else if (n === 0) {
    return 1;
  } else {
    let total = n;
    for (; n > 1; n--) {
      total *= n - 1;
    }
    return total;
  }
}

