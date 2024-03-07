import { rot13 } from "../5kyu_rot13";

describe("rot13 unit tests", () => {
  it("should return grfg when test in inputed", () => {
    const result = rot13("test");
    expect(result).toEqual("grfg");
  });

  it("should return Grfg when Test in inputed", () => {
    const result = rot13("Test");
    expect(result).toEqual("Grfg");
  });
});
