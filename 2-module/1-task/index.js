/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
let sumSalary = (data) => {
  return Object.values(data).filter(isNumber => typeof isNumber === "number").reduce((prevSalary, nextSalary) => prevSalary + nextSalary, 0);

};