/**
 * @param {string} str Timecode to convert
*/

module.exports = function(str) {
    if (typeof str == "string") {
        let split = str.split(":")
        if (split.length > 2) {
            throw new Error("Check the parameter and try again.")
        }
        return (new Number(split[0] * 60) + new Number(split[1])) * 1000
    } else {
        throw new RangeError("passed value is not a string.")
    }
}