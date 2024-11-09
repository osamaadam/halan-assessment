import { transpose } from "../src/06-transpose";

describe("transpose", () => {
  it.each([
    {
      arr: [
        [1, 2],
        [3, 4],
      ],
      expected: [
        [1, 3],
        [2, 4],
      ],
    },
    {
      arr: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ],
      expected: [
        [1, 5],
        [2, 6],
        [3, 7],
        [4, 8],
      ],
    },
  ])("should return $expected for $arr", ({ arr, expected }) => {
    expect(transpose(arr)).toEqual(expected);
  });
});
