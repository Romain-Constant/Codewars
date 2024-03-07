import { humanReadable } from "../5kyu_human_reading_table";

describe.skip("human reading table unit tests", () => {
  it("should return 00:00:00 when 0 is passed", () => {
    const result = humanReadable(0);
    expect(result).toEqual("00:00:00");
  });

  it("should return 00:00:05 when 5 is passed", () => {
    const result = humanReadable(5);
    expect(result).toEqual("00:00:05");
  });

  it("should return 00:01:00 when 60 is passed", () => {
    const result = humanReadable(60);
    expect(result).toEqual("00:01:00");
  });

  it("should return 23:59:59 when 86399 is passed", () => {
    const result = humanReadable(86399);
    expect(result).toEqual("23:59:59");
  });

  it("should return 99:59:59 when 359999 is passed", () => {
    const result = humanReadable(359999);
    expect(result).toEqual("99:59:59");
  });
});
