const robot = require('robotjs');
//const utils = require('../src/utils.js')


// async function run() {
//     robot.moveMouse(661,572)
//     await utils.delay(1, 250)
//     robot.mouseClick('right')
//     await utils.delay(1, 250)
//     robot.moveMouse(707, 581)
//     await utils.delay(1, 250)
//     robot.mouseClick()
//     await utils.delay(1, 250)
//     robot.moveMouse(707, 601)
//     await utils.delay(1, 250)
//     robot.mouseToggle("down");
//     robot.dragMouse(555, 650)
//     await utils.delay(1, 250)
//     robot.mouseToggle("up");
//     await utils.delay(1, 500)
// }

// run()

// move the mouse to start dragging
// robot.moveMouse(661,572)
// robot.mouseClick('right')

// robot.moveMouse(707, 581)

let mouse = robot.getMousePos()

console.log(mouse)