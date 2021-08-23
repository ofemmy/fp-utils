import { hasProp } from "../hasProp";
describe("hasProp()", () => {
  const testObj = {
    name: "John Bull",
    age: 24,
    hobbies: ["swimming", "shopping"],
  };
  test("should return false for empty string", () => {
    expect(hasProp("")(testObj)).toBe(false);
  });

  test("should return false for false prop", () => {
    expect(hasProp("size")(testObj)).toBe(false);
  });
  test("should return true for correct prop", () => {
    expect(hasProp("hobbies")(testObj)).toBe(true);
  });
});
