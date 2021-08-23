import { ifElse } from "../ifElse";
describe("ifElse", () => {
  const isEven = (x: number) => x % 2 === 0;
  const mockTrueClause = jest.fn().mockImplementation((x) => x + " is even");
  const mockFalseClause = jest
    .fn()
    .mockImplementation((x) => x + " is not even");

  test("should run the true clause", () => {
    ifElse(isEven, [(x) => "", mockTrueClause])(4);
    expect(mockTrueClause).toHaveBeenCalled();
  });

  test("should run the false clause", () => {
    ifElse(isEven, [mockFalseClause, (x) => ""])(3);
    expect(mockFalseClause).toHaveBeenCalled();
  });
  test("test return value for truth prdeicate", () => {
    const result = ifElse(isEven, [
      (x) => ({ value: x }),
      (x) => ({ value: x * 2 }),
    ])(4);
    expect(result).toEqual({ value: 8 });
  });
});
