const AgeCalculator = require("../calculateAge");

test('should return the correct age', () => {
    // Look for a problem with this test vs it's code
    expect(AgeCalculator.calculateAge(2019)).toBe(3)
});