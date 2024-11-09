import { indexOfFirstDuplicate } from "../src/08-first-duplicate";

describe("firstDuplicate", () => {
  describe("when there's a duplicate", () => {
    it.each([
      { arr: [1, 2, 3, 4, 5, 2], expected: 5 },
      { arr: [1, 2, 2, 4, 5, 6], expected: 2 },
      { arr: [1, 2, 3, 4, 3, 3], expected: 4 },
    ])("should return $expected for $arr", ({ arr, expected }) => {
      expect(indexOfFirstDuplicate(arr)).toEqual(expected);
    });
  });

  describe("when there's no duplicate", () => {
    it.each([
      { arr: [1, 2, 3, 4, 5, 6], expected: -1 },
      { arr: [1, 2, 3, 4, 5], expected: -1 },
      { arr: [1, 2, 3, 4], expected: -1 },
    ])("should return $expected for $arr", ({ arr, expected }) => {
      expect(indexOfFirstDuplicate(arr)).toEqual(expected);
    });
  });
});
