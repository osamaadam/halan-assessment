/**
 * @param {string} str
 * @returns {string}
 */
export function runLengthEncode(str) {
  let count = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    count++;

    if (str[i] !== str[i + 1]) {
      result += `${str[i]}${count}`;
      count = 0;
    }
  }

  return result;
}

/**
 * @param {string} str
 * @returns {string}
 */
export function runLengthDecode(str) {
  let result = "";
  let count = "";
  let lastletter = "";

  for (let i = 0; i <= str.length; i++) {
    if (i === str.length || isNaN(Number(str[i]))) {
      result += lastletter.repeat(Number(count) || 1);
      count = "";
      lastletter = str[i];
    } else {
      count += str[i];
    }
  }

  return result;
}
