const utils = require('../src/utils.js')
const robot = require('../src/robot.js')

async function run() {
    var done = false;

    //ensure 2 targets are selected
    utils.log("Clicking first rock")
    await robot.clickFirstRock()
    await utils.delay(2)
    utils.log("Targeting first rock")
    await robot.clickTarget()
    await utils.delay(2)

    utils.log("Clicking second rock")
    await robot.clickSecondRock()
    await utils.delay(2)
    utils.log("Targeting second rock")
    await robot.clickTarget()
    await utils.delay(2)

    // Set each miner to start mining
    utils.log("Starting mining")
    await robot.clickFirstTargetPosition()
    await utils.delay(1)
    robot.pressKey("f1")
    await utils.delay(1)
    await robot.clickSecondTargetPosition()
    await utils.delay(1)
    robot.pressKey("f2")
    await utils.delay(1)

    // Delay 58 seconds
    await utils.delay(58)

    // Turn off miners
    robot.pressKey("f1")
    robot.pressKey("f2")

}

run()