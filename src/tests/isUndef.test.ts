import { isUndef } from "../validators";
type TestCase = { testValue: unknown; expectedResult: boolean };
describe("test", () => {
  describe("isUndef", () => {
    const testCases: TestCase[] = [
      { testValue: undefined, expectedResult: true },
      { testValue: "string", expectedResult: false },
      { testValue: "", expectedResult: false },
    ];
    it.each(testCases)(
      "returns $expectedResult when called with `$testValue`",
      ({ testValue, expectedResult }) => {
        const result = isUndef(testValue);
        expect(result).toBe(expectedResult);
      },
    );
  });
});
