const robot = require('./robot.js')
const utils = require('./utils.js')

module.exports.warpToBelt = async function() {
    await robot.clickMiningTab()

    await robot.warpToBelt()

    return
}

module.exports.warpToStation = async function() {
    await robot.clickGeneralTab()

    await robot.warpToStation()

    return
}

// Probably the most complicated part of the app
module.exports.mineRocks = async function() {
    var done = false;
    var incr = 0;
    
    // select rocks tab
    utils.log("Clicking rocks tab")
    await robot.clickRocksTab()
    await utils.delay(1)

    // select first rock
    utils.log("Clicking first rock")
    await robot.clickFirstRock()
    await utils.delay(1)

    // move towards it
    utils.log("Approaching first rock")
    await robot.approachFirstRock()

    // delay
    await utils.delay(39)

    // stop ship
    utils.log("Stopping ship")
    await robot.stopShip()
    await utils.delay(3)

    do {
        incr++
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
        await utils.delay(2)
        robot.pressKey("f1")
        await utils.delay(2)
        await robot.clickSecondTargetPosition()
        await utils.delay(2)
        robot.pressKey("f2")
        await utils.delay(2)
    
        // Delay 58 seconds
        await utils.delay(55)
    
        // Turn off miners
        robot.pressKey("f1")
        robot.pressKey("f2")

        // This should UNDO targeting
        await robot.clickFirstTargetPosition()
        await utils.delay(2)
        await robot.clickTarget()
        await utils.delay(2)

        await robot.clickSecondTargetPosition()
        await utils.delay(2)
        await robot.clickTarget()
        await utils.delay(2)

        // Only done if the hold is full
        let isHoldFull = await robot.isHoldFull()
        console.log("Hold Full: " + isHoldFull)
        console.log("Incr: ", incr)

        if (incr >= 14) {
            done = true
        }

        if (isHoldFull) {
            done = true
        }

        if (done) {
            utils.log("Hold is full so returning to stationg")
        } else {
            utils.log("Hold is NOT full so continuing to mine")
        }
    }
    while(!done)

    return
}

module.exports.isFullInBelt = async function() {
    return robot.isHoldFull()
}