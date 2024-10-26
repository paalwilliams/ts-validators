import { isUndef, isNum, isStr, isNull} from "../validators"
type TestCase = {testValue: unknown, expectedResult: boolean}
describe("test", () => {

	describe("isUndef", () => {
		const testCases: TestCase[] = [{testValue: undefined, expectedResult: true}, {testValue: "string", expectedResult: false}, {testValue: "", expectedResult: false}]
		it.each(testCases)("returns $expectedResult when called with `$testValue`", ({ testValue, expectedResult}) => {
			const result = isUndef(testValue)
			expect(result).toBe(expectedResult)
		})
	})

	describe("isNum", () => {
		const testCases: TestCase[] = [{testValue: undefined, expectedResult: false}, {testValue: "string", expectedResult: false}, {testValue: 2, expectedResult: true}]
		it.each(testCases)("returns $expectedResult when called with `$testValue`", ({ testValue, expectedResult}) => {
			const result = isNum(testValue)
			expect(result).toBe(expectedResult)
		})
	})

	describe("isStr", () => {
		const testCases: TestCase[] = [{testValue: undefined, expectedResult: false}, {testValue: "string", expectedResult: true}, {testValue: 2, expectedResult: false}]
		it.each(testCases)("returns $expectedResult when called with `$testValue`", ({ testValue, expectedResult}) => {
			const result = isStr(testValue)
			expect(result).toBe(expectedResult)
		})
	})

	describe("isStr", () => {
		const testCases: TestCase[] = [{testValue: undefined, expectedResult: false}, {testValue: "string", expectedResult: true}, {testValue: 2, expectedResult: false}]
		it.each(testCases)("returns $expectedResult when called with `$testValue`", ({ testValue, expectedResult}) => {
			const result = isStr(testValue)
			expect(result).toBe(expectedResult)
		})
	})

	describe("isNull", () => {

		const testCases: TestCase[] = [{testValue: undefined, expectedResult: false}, {testValue: "string", expectedResult: false}, {testValue: 2, expectedResult: false}, {testValue: null, expectedResult: true}]
		it.each(testCases)("returns $expectedResult when called with `$testValue`", ({ testValue, expectedResult}) => {
			const result = isNull(testValue)
			expect(result).toBe(expectedResult)
		})
	})
})

