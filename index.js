// IN ORDER FOR THIS TO WORK IT HAS TO BE (1402x798)

const utils = require('./src/utils.js');
const robot = require('./src/robot.js');

const station = require('./src/station.js')
const space = require('./src/space.js')

// Loop Management
var QUIT = false;

// State Management
var STARTING = true;
var DOCKED = true;
var WARP_TO_BELT = false;
var WARPING_TO_BELT = false;
var WARP_TO_STATION = false;
var WARPING_TO_STATION = false;
var IN_BELT = false;

// Timeouts
var WARPING_TIMEOUT = 30;
var DOCKED_TIMEOUT = 5;
var UNDOCK_DELAY = 15;

function displayState() {
    utils.log(`\n`)
    utils.log('=== STATE CHECK ===')
    utils.log(`STARTING: ${STARTING}`)
    utils.log(`DOCKED: ${DOCKED}`)
    utils.log(`WARPING_TO_BELT: ${WARPING_TO_BELT}`)
    utils.log(`WARPING_TO_STATION: ${WARPING_TO_STATION}`)
    utils.log(`IN_BELT: ${IN_BELT}`)
    utils.log('=== STATE CHECK ===')
    utils.log(`\n`)
}

async function determineState() {
    utils.log('\nDetermining game state...\n')
    // DOCKED = robot.isDocked()
    // IN_BELT = robot.isInBelt()

    return displayState()
}

// Setup
async function setup() {
    // Focus on the game window
    utils.log('Focusing on the game window')
    await robot.selectGameWindow()

    await utils.delay(3)
    STARTING = false
    utils.log('Starting the program')

    return run()
}

// Loop
async function run() {
    utils.log('Running loop')
    await utils.delay(1)

    await determineState()

    if (WARPING_TO_BELT || WARPING_TO_STATION) {
        utils.log('=== IS WARPING ===')
        await utils.delay(WARPING_TIMEOUT)
        
        if (WARPING_TO_BELT) {
            WARPING_TO_BELT = false
            IN_BELT = true
        }
        
        if (WARPING_TO_STATION) {
            WARPING_TO_STATION = false
            DOCKED = true
        }

    }

    if (DOCKED) {
        utils.log('=== IS DOCKED ===')
        await utils.delay(DOCKED_TIMEOUT)
        await station.dockedActions()
        await utils.delay(UNDOCK_DELAY)

        DOCKED = false;
        WARP_TO_BELT = true;
    }

    if (WARP_TO_BELT) {
        utils.log('=== WARPING TO BELT ===')
        WARP_TO_BELT = false
        await space.warpToBelt()
        WARPING_TO_BELT = true
    }

    if (IN_BELT) {
        utils.log('=== IN BELT ===')
        await space.mineRocks()
        WARP_TO_STATION = true
    }

    if (WARP_TO_STATION) {
        utils.log('=== WARPING TO STATION ===')
        WARP_TO_STATION = false
        await space.warpToStation()
        WARPING_TO_STATION = true
    }

    await utils.delay(1)

    if (QUIT) return utils.log('Finished!')
    return run()
}

setup()
