/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  str = str.toUpperCase();
  return str.includes("1XbeT".toUpperCase()) || str.includes("XXX");
}
