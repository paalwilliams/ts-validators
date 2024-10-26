import { isStr } from "../validators";
import { TestCase } from "./test.types";

describe("isStr", () => {
  const testCases: TestCase[] = [
    { testValue: undefined, expectedResult: false },
    { testValue: "string", expectedResult: true },
    { testValue: 2, expectedResult: false },
  ];
  it.each(testCases)(
    "returns $expectedResult when called with `$testValue`",
    ({ testValue, expectedResult }) => {
      const result = isStr(testValue);
      expect(result).toBe(expectedResult);
    },
  );
});
