import { high } from "../6kyu_highest_scoring_word";

describe.skip("build tower function tests unit", () => {
  it('should return "taxi" when "man i need a taxi up to ubud" is passed as parameter', () => {
    const result = high("man i need a taxi up to ubud");
    expect(result).toEqual("taxi");
  });

  it('should return "massage" when "massage yes massage yes massaged" is passed as parameter', () => {
    const result = high("massage yes massage yes massage");
    expect(result).toEqual("massage");
  });

  it("should return the word that appears earliest in the original string if two words score the same", () => {
    const result = high("aa b");
    expect(result).toEqual("aa");
  });

  it("should return the word that appears earliest in the original string if two words score the same", () => {
    const result = high("climbing volcano");
    expect(result).toEqual("volcano");
  });
});
