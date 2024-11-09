import { dfsTreeSum, bfsTreeSum, Node } from "../src/09-tree-sum";

describe("treeSum", () => {
  const tree = new Node(1, [
    new Node(2, [new Node(3), new Node(4)]),
    new Node(5, [new Node(6), new Node(7), new Node(2)]),
  ]);

  const expected = 30;

  describe("depth-first search", () => {
    it("should return the sum of all nodes", () => {
      expect(dfsTreeSum(tree)).toEqual(expected);
    });
  });

  describe("breadth-first search", () => {
    it("should return the sum of all nodes", () => {
      expect(bfsTreeSum(tree)).toEqual(expected);
    });
  });
});
