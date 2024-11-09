export class Node {
  /** @type {number} */
  value;
  /** @type {Node[]} */
  children;
  constructor(value = 0, children = []) {
    this.value = value;
    this.children = children;
  }
}

/**
 * @param {Node} root
 * @returns {number}
 */
export function dfsTreeSum(root) {
  if (root === null) {
    return 0;
  }

  const childrenSum = root.children.reduce(
    (acc, child) => acc + dfsTreeSum(child),
    0
  );

  return root.value + childrenSum;
}

/**
 * @param {Node} root
 * @returns {number}
 */
export function bfsTreeSum(root) {
  if (root === null) {
    return 0;
  }

  let sum = 0;
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    sum += node.value;

    queue.push(...node.children);
  }

  return sum;
}
