/**
 * @param {Array<string>} arr
 */
export function unique(arr) {
  const map = {};

  for (const item of arr) {
    map[item] = map[item] + 1 || 1;
  }

  for (const [key, val] of Object.entries(map)) {
    if (val > 1) {
      delete map[key];
    }
  }

  return Object.keys(map);
}
