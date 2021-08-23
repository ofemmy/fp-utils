import { ifElse } from "../ifElse";
describe("ifElse", () => {
  const isEven = (x: number) => x % 2 === 0;
  const mockTrueClause = jest
    .fn()
    .mockImplementation((x) => console.log(x + " is even"));
    const mockFalseClause = jest
    .fn()
    .mockImplementation((x) => console.log(x + " is not even"));


  test("should run the true clause", () => {
    ifElse(isEven, [(x) => "", mockTrueClause])(4);
    expect(mockTrueClause).toHaveBeenCalled();
  });

  test('should run the false clause', () => {
    ifElse(isEven, [mockFalseClause,(x) => ""])(3);
    expect(mockFalseClause).toHaveBeenCalled();
  })
  
});
