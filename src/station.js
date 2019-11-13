const robot = require('./robot.js')
const utils = require('./utils.js')

module.exports.dockedActions = async function() {

    utils.log('Moving stuff to station from ship')
    await robot.moveHoldToStation()

    await utils.delay(2)

    await robot.clickUndockButton()

    await utils.delay(1)

    return
}