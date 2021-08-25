import { zip } from "../zip";

describe("zip()", () => {
  let addFn = (x: any, y: any) => x + y;
  let z = zip(addFn);
  test("happy path", () => {
    expect(z(["a", "b", "c"], ["x", "y", "z"])).toStrictEqual([
      "ax",
      "by",
      "cz",
    ]);
  });
  test("should use shortest array length", () => {
    expect(z(["a", "b"], ["x", "y", "z"])).toStrictEqual(["ax", "by"]);
  });
  test("should return empty list for any empty input arr args", () => {
    expect(z(["a", "b"], [])).toStrictEqual([]);
  });
  test("a partially applied zip works with Array.reduce for [[a..],[b..],...]", () => {
    let arr = [
      ["a", "b", "c"],
      ["x", "y", "z"],
      ["p", "q", "r"],
    ];
    expect(arr.reduce(z)).toStrictEqual(["axp", "byq", "czr"]);
  });
});
