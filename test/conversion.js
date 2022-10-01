const { hms_to_ms, ms_to_ms } = require("../index.js")

console.log("hour-minute-second conversion\n")
console.log(hms_to_ms("1:01:00"))
console.log("---------------")
console.log("minute-second conversion\n")
console.log(ms_to_ms("1:00"))
