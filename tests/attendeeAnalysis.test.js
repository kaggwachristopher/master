const { describe, expect } = require("@jest/globals");
const getAttendeeInformation = require("../attendeeAnalysis");

const attendeeMock = {
    firstName: "Chris",
    lastName: "Kaggwa",
    yearOfBirth: 2021
}

let calculatorMock = {
    calculateAge: jest.fn()
};

describe("getAttendeeInformation tests", () => {
    test('should call calculate age only once', () => {
        // calculatorMock = {
        //     calculateAge: jest.fn()
        // };

        getAttendeeInformation(calculatorMock, attendeeMock)

        expect(calculatorMock.calculateAge).toHaveBeenCalledTimes(1)
    });

    test('should call calculate age with the provided birth year', () => {

        getAttendeeInformation(calculatorMock, attendeeMock)

        expect(calculatorMock.calculateAge).toHaveBeenCalledWith(attendeeMock.yearOfBirth)
    });

    test('should return the correct attendee information', () => {
        //arrange
        let calculatorMock = {
            calculateAge: jest.fn()
        };
        let ageResponse = 6;
        calculatorMock.calculateAge.mockReturnValue(ageResponse)

        //act
        var attendeeInformationResponse = getAttendeeInformation(calculatorMock, attendeeMock)

        //assert
        expect(attendeeInformationResponse.age == ageResponse &&
            attendeeInformationResponse.fullName == "Chris Kaggwa").toBeTruthy()
    });
});