const robot = require('robotjs')
const utils = require('./utils.js');

module.exports.selectGameWindow = async function() {
    utils.log('Focusing on game window')
    
    robot.moveMouse(50, 20);
    robot.mouseClick();

    return
}

module.exports.moveHoldToStation = async function() {
    robot.moveMouse(661,572)
    await utils.delay(1, 250)
    robot.mouseClick('right')
    await utils.delay(1, 250)
    robot.moveMouse(707, 581)
    await utils.delay(1, 250)
    robot.mouseClick()
    await utils.delay(1, 250)
    robot.moveMouse(707, 601)
    await utils.delay(1, 250)
    robot.mouseToggle("down");
    robot.dragMouse(555, 650)
    await utils.delay(1, 250)
    robot.mouseToggle("up");
    await utils.delay(1, 500)
}

module.exports.isDocked = function() {
    return (
        robot.getPixelColor(1221,231) == "131415" &&
        robot.getPixelColor(1232,198) == "533f07" &&
        robot.getPixelColor(1268,209) == "896503" &&
        robot.getPixelColor(1244,201) == "523e06" &&
        robot.getPixelColor(1234,209) == "543f07" &&
        robot.getPixelColor(1228,208) == "533f07" &&
        robot.getPixelColor(1224,188) == "533f07" &&
        robot.getPixelColor(1239,183) == "554107" &&
        robot.getPixelColor(1267,209) == "896503" &&
        robot.getPixelColor(1321,210) == "785803"
    )
}

module.exports.isInBelt = function(isWarping) {
    return robot.getPixelColor(674,768) == "999897";
}

module.exports.isHoldFull = function() {
    var hex = robot.getPixelColor(330, 400);
    return `${hex}` == "024a5f"
}

module.exports.clickUndockButton = function() {
    robot.moveMouse(1280, 198)
    robot.mouseClick()
}

module.exports.clickMiningTab = async function() {
    // Click on the mining tab
    robot.moveMouse(1037, 199)
    await utils.delay(1, 100)
    robot.mouseClick()
    await utils.delay(1, 100)
}

module.exports.clickGeneralTab = async function() {
    // Click on the general tab
    robot.moveMouse(1125, 196)
    await utils.delay(1, 100)
    robot.mouseClick()
    await utils.delay(1, 100)
}

module.exports.clickRocksTab = async function() {
    // Click on the rocks tab
    robot.moveMouse(1071, 196)
    await utils.delay(1, 100)
    robot.mouseClick()
    await utils.delay(1, 100)
}

module.exports.approachFirstRock = async function() {
    robot.moveMouse(1095, 238)
    await utils.delay(1, 250)
    robot.mouseClick('right')
    await utils.delay(1, 250)
    robot.moveMouse(1163, 249)
    await utils.delay(1, 250)
    robot.mouseClick()
}

module.exports.clickFirstRock = async function() {
    // Click on the mining tab
    robot.moveMouse(1095, 238)
    await utils.delay(1, 100)
    robot.mouseClick()
    await utils.delay(1, 100)
}

module.exports.clickSecondRock = async function() {
    // Click on the mining tab
    robot.moveMouse(1095, 261)
    await utils.delay(1, 100)
    robot.mouseClick()
    await utils.delay(1, 100)
}

module.exports.warpToStation = async function() {

    robot.moveMouse(1117,244)
    await utils.delay(1, 250)
    robot.mouseClick('right')
    await utils.delay(1, 250)
    robot.moveMouse(1140,299)
    await utils.delay(1, 250)
    robot.mouseClick()
    await utils.delay(5)

}

module.exports.warpToBelt = async function() {

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

module.exports.pressKey = function(key) {
    robot.keyTap(key)
}

module.exports.stopShip = async function() {
    utils.delay(1,100)
    robot.moveMouse(656,759)
    utils.delay(1,100)
    robot.mouseClick()
    utils.delay(1,100)
}

module.exports.clickTarget = async function() {
    utils.delay(1,100)
    robot.moveMouse(1111,122)
    utils.delay(1,100)
    robot.mouseClick()
    utils.delay(1,100)
}

module.exports.clickFirstTargetPosition = async function() {
    utils.delay(1,100)
    robot.moveMouse(780,87)
    utils.delay(1,100)
    robot.mouseClick()
    utils.delay(1,100)
}

module.exports.clickSecondTargetPosition = async function() {
    utils.delay(1,100)
    robot.moveMouse(889,90)
    utils.delay(1,100)
    robot.mouseClick()
    utils.delay(1,100)
}

