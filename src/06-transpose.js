/**
 * @param {Array<Array<number>>} arr
 * @returns {Array<Array<number>>}
 */
export function transpose(arr) {
  const transposed = [];

  for (let i = 0; i < arr[0].length; i++) {
    const row = [];

    for (let j = 0; j < arr.length; j++) {
      row.push(arr[j][i]);
    }

    transposed.push(row);
  }

  return transposed;
}
