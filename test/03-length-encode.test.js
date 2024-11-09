import { describe, it } from "vitest";
import { runLengthEncode, runLengthDecode } from "../src/03-length-encode";

describe("runLengthEncode", () => {
  describe("when string is empty", () => {
    it("should return an empty string", () => {
      expect(runLengthEncode("")).toBe("");
    });
  });

  describe("when string is not empty", () => {
    const testCases = [
      ["aaaaaaaaaabbbaxxxxyyyzyx", "a10b3a1x4y3z1y1x1"],
      ["aaaabbbcc", "a4b3c2"],
      ["ab", "a1b1"],
      ["a", "a1"],
    ];
    it.each(testCases)("should return %s for %s", (str, expected) => {
      expect(runLengthEncode(str)).toBe(expected);
    });
  });

  describe("when string is empty", () => {
    it("should return an empty string", () => {
      expect(runLengthEncode("")).toBe("");
    });
  });
});

describe("runLengthDecode", () => {
  describe("when string is empty", () => {
    it("should return an empty string", () => {
      expect(runLengthDecode("")).toBe("");
    });
  });

  describe("when string is not empty", () => {
    const testCases = [
      ["a10b3a1x4y3z1y1x1", "aaaaaaaaaabbbaxxxxyyyzyx"],
      ["a4b3c2", "aaaabbbcc"],
      ["a1b1", "ab"],
      ["a1", "a"],
    ];
    it.each(testCases)("should return %s for %s", (str, expected) => {
      expect(runLengthDecode(str)).toBe(expected);
    });
  });

  describe("when string is empty", () => {
    it("should return an empty string", () => {
      expect(runLengthDecode("")).toBe("");
    });
  });
});
