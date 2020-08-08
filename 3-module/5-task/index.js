/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numArr = str.split(",").join(" ").split(" ").map(toNumber => +toNumber)
    .filter(isNum => typeof isNum === "number" && !isNaN(isNum));

  return {
    min: Math.min(...numArr),
    max: Math.max(...numArr),
  }
}
