import { comp } from "../6kyu_are_they_the_same";

describe("compare array function", () => {
  it("should return true for matching arrays", () => {
    const result = comp(
      [121, 144, 19, 161, 19, 144, 19, 11],
      [
        11 * 11,
        121 * 121,
        144 * 144,
        19 * 19,
        161 * 161,
        19 * 19,
        144 * 144,
        19 * 19,
      ]
    );
    expect(result).toEqual(true);
  });

  it("should return false for non-matching arrays", () => {
    const result = comp(
      [121, 144, 19, 161, 19, 144, 19, 11],
      [
        11 * 21,
        121 * 121,
        144 * 144,
        19 * 19,
        161 * 161,
        19 * 19,
        144 * 144,
        19 * 19,
      ]
    );
    expect(result).toEqual(false);
  });

  it("should return false if either array is null", () => {
    const result = comp(null, [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ]);
    expect(result).toEqual(false);
  });

  it("should return true for empty arrays", () => {
    const result = comp([], []);
    expect(result).toEqual(true);
  });
});
