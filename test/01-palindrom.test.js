import { describe } from "vitest";
import { isPalindrom } from "../src/01-palindrom";

describe("is palindrom", () => {
  describe("when string is a palindrom", () => {
    const palindromicStrings = ["level", "anna", "noon", "rotor"];
    it.each(palindromicStrings)("should return true for %s", (str) => {
      expect(isPalindrom(str)).toBe(true);
    });
  });

  describe("when string is not a palindrom", () => {
    const nonPalindromicStrings = ["osama", "adam", "halan"];

    it.each(nonPalindromicStrings)("should return false for %s", (str) => {
      expect(isPalindrom(str)).toBe(false);
    });
  });

  describe("when string is empty", () => {
    it("should return true", () => {
      expect(isPalindrom("")).toBe(true);
    });
  });
});
