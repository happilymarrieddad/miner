const robot = require('robotjs');
const utils = require('../src/utils.js')

async function run() {

    // Click on the mining tab
    robot.moveMouse(1037, 199)
    await utils.delay(1, 100)
    robot.mouseClick()
    await utils.delay(1, 100)


    const INCREMENTOR = 18;
    const NUM_BELTS = 4;
    var currentBelt = 0;
    const startingBeltX = 975
    const startingBeltY = 238


    robot.moveMouse(
        startingBeltX, 
        startingBeltY + (
            currentBelt * INCREMENTOR
        )
    )

    await utils.delay(1, 250)
    robot.mouseClick('right')
    await utils.delay(1, 250)
    robot.moveMouse(
        startingBeltX + 46,
        startingBeltY + (
            currentBelt * INCREMENTOR
        ) + 9
    )
    await utils.delay(1, 250)
    robot.mouseClick()
    await utils.delay(1)
}

run()