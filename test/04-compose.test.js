import { composeFns } from "../src/04-compose";

describe("composeFns", () => {
  describe("when fn1 and fn0 are number operations", () => {
    const inc = (n) => n + 1;
    const square = (n) => n * n;
    const incThenSquare = composeFns(square, inc);

    it("should return 49 for 6", () => {
      expect(incThenSquare(6)).toBe(49);
    });
  });
});
