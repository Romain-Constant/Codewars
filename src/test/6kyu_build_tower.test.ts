import { towerBuilder } from "../6kyu_build_tower";

describe.skip("build tower function tests unit", () => {
  it('should return ["*"] when 1 is passed as parameter', () => {
    const result = towerBuilder(1);
    expect(result).toEqual(["*"]);
  });

  it('should return [" * ","***"] when 2 is passed as parameter', () => {
    const result = towerBuilder(2);
    expect(result).toEqual([" * ", "***"]);
  });

  it('should return ["  *  "," *** ","*****"] when 3 is passed as parameter', () => {
    const result = towerBuilder(3);
    expect(result).toEqual(["  *  ", " *** ", "*****"]);
  });
});
