/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let newStr = [];
  str = str.split("");

  for (let i = 0; str.length > i; i++)
    if (str[i] === "-") {
      newStr.push(str[i + 1].toUpperCase());
      i += 1;
    } else {
      newStr.push(str[i]);
    }
  return newStr.join("");
}
