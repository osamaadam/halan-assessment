/**
 * @param {Function} fn1
 * @param {Function} fn0
 */
export function composeFns(fn1, fn0) {
  return function (str) {
    return fn1(fn0(str));
  };
}
