const robot = require('robotjs');

let x = 674
let y = 768

robot.moveMouse(x, y)

var hex = robot.getPixelColor(x, y);

console.log(hex)
