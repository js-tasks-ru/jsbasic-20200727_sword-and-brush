/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let check = (Object.keys(obj).length === 0) ? true : false;
  return check;
}
