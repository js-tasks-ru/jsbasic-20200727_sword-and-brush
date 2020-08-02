/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
let sumSalary = (data) => {
  let result = Object.values(data).filter(item => typeof item === "number").reduce((a, b) => a + b, 0);
  return result;
};