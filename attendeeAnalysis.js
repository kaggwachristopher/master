class AttendeeAnalysis {
    //note that we dont instantiate ageCalculator from inside
    static getAttendeeInformation(ageCalculator, attendee) {
        const fullName = `${attendee.firstName} ${attendee.lastName}`
        const age = ageCalculator.calculateAge(attendee.yearOfBirth)
        return { fullName, age }
    }
}
module.exports = AttendeeAnalysis.getAttendeeInformation