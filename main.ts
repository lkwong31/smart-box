let shide = 0
let wendu = 0
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showString("welcome to smart farm")
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    wendu = dht11_dht22.readData(dataType.temperature)
    basic.pause(100)
    shide = dht11_dht22.readData(dataType.humidity)
    basic.showString("" + (input.temperature()))
    if (wendu < 16) {
        basic.showString("cold")
    }
    if (wendu > 30) {
        basic.showString("hot")
    }
    if (wendu > 16 && wendu < 30) {
        basic.showString("" + (wendu))
    }
})
