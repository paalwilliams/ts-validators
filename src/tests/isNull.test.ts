import { isNull } from "../validators";
import { TestCase } from "./test.types";

describe("isNull", () => {
  const testCases: TestCase[] = [
    { testValue: undefined, expectedResult: false },
    { testValue: "string", expectedResult: false },
    { testValue: 2, expectedResult: false },
    { testValue: null, expectedResult: true },
  ];
  it.each(testCases)(
    "returns $expectedResult when called with `$testValue`",
    ({ testValue, expectedResult }) => {
      const result = isNull(testValue);
      expect(result).toBe(expectedResult);
    },
  );
});
