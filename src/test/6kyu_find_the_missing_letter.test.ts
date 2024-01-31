import { findMissingLetter } from "../6kyu_find_the_missing_letter";

describe.skip("Find the missing letter", () => {
  it("should find the missing letter in array ['a','b','c','d','f']", () => {
    const result = findMissingLetter(["a", "b", "c", "d", "f"]);
    expect(result).toEqual("e");
  });

  it("should find the missing letter in array ['O','Q','R','S']", () => {
    const result = findMissingLetter(["O", "Q", "R", "S"]);
    expect(result).toEqual("P");
  });
});
