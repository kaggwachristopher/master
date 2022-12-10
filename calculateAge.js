class AgeCalculator {
    static calculateAge = birthYear => {
        const curentYear = new Date().getFullYear();
        const age = curentYear - birthYear
        return age
    }
}

module.exports = AgeCalculator
