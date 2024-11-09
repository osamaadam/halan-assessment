import { unique } from "../src/05-unique";

describe("unique", () => {
  it.each([
    {
      arr: ["apples", "oranges", "flowers", "apples"],
      expected: ["oranges", "flowers"],
    },
    { arr: ["apples", "apples"], expected: [] },
    {
      arr: ["apples", "oranges", "flowers"],
      expected: ["apples", "oranges", "flowers"],
    },
  ])("should return $expected for $arr", ({ arr, expected }) => {
    expect(unique(arr)).toEqual(expected);
  });
});
