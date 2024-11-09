/**
 * @param {number[]} arr
 * @returns {number}
 */
export function indexOfFirstDuplicate(arr) {
  const visited = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (visited.has(arr[i])) {
      return i;
    }

    visited.add(arr[i]);
  }

  return -1;
}
