import { age } from "../EXERCISM_space_age";

describe.skip("age", () => {
  it("should return 280.88", () => {
    const result = age("mercury", 2134835688);
    expect(result).toEqual(280.88);
  });

  it("should return 9.78", () => {
    const result = age("venus", 189839836);
    expect(result).toEqual(9.78);
  });
});
