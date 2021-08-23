import { hasPath } from "../hasPath";
describe("hasPath", () => {
  const testObj = {
    name: "John Bull",
    age: 24,
    hobbies: ["swimming", "shopping"],
    company: {
      name: "John Bull LLC",
      accredited: true,
      manager: {
        name: "Paul Joe",
        age: 42,
      },
      400: {},
    },
    200: {},
  };
  test("should return false for array of empty string", () => {
    expect(hasPath([""])(testObj)).toBe(false);
  });
  test("should return false for key not in object", () => {
    expect(hasPath(["size"])(testObj)).toBe(false);
  });
  test("should return true for key in object", () => {
    expect(hasPath(["name"])(testObj)).toBe(true);
  });
  test("should return true for keys in object", () => {
    expect(hasPath(["company", "accredited"])(testObj)).toBe(true);
  });
  test("should return true for nested keys in object", () => {
    expect(hasPath(["company", "manager", "name"])(testObj)).toBe(true);
  });
  test("should return false for wrong order of props", () => {
    expect(hasPath(["manager", "company"])(testObj)).toBe(false);
  });
  test("should return true also of key is a number", () => {
    expect(hasPath([200])(testObj)).toBe(true);
  });
});
