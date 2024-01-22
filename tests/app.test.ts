// A A A

describe('App', () => {
	test('Should be 30', () => {
		// 1. Arrange
		const num1 = 10;
		const num2 = 20;

		//Act
		const result = num1 + num2;

		//Assert

		expect(result).toBe(30)
	});
});
