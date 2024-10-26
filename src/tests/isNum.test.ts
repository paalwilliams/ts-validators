import { isNum } from "../validators";
import { TestCase } from "./test.types";

describe("isNum", () => {
  const testCases: TestCase[] = [
    { testValue: undefined, expectedResult: false },
    { testValue: "string", expectedResult: false },
    { testValue: 2, expectedResult: true },
  ];
  it.each(testCases)(
    "returns $expectedResult when called with `$testValue`",
    ({ testValue, expectedResult }) => {
      const result = isNum(testValue);
      expect(result).toBe(expectedResult);
    },
  );
});
