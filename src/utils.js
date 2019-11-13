module.exports.delay = function(d, m = 1000) {
    if (isNaN(m)) m = 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, d * m)
    })
}

module.exports.log = function(...args) {
    console.log(...args)
}
