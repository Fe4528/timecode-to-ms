/**
 * @param {string} str Timecode to convert
*/

module.exports = function(str) {
    if (typeof str == "string") {
        let split = str.split(":")
        if (split.length > 3) {
            throw new Error("Check the parameter and try again.")
        }
        return (new Number(split[0] * 3600) + new Number(split[1] * 60) + new Number(str[2])) * 1000
    } else {
        throw new RangeError("passed value is not a string.")
    }
}
