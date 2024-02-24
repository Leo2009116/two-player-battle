enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    sprite += 10
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    game.addScore(1)
})
input.onGesture(Gesture.Shake, function () {
    if (sprite >= 90) {
        radio.sendString("")
        game.addScore(100)
    }
})
radio.onReceivedString(function (receivedString) {
    sprite += 50
})
input.onButtonPressed(Button.B, function () {
    sprite = sprite - 10
    game.addScore(1)
})
let sprite = 0
led.setBrightness(4)
radio.setGroup(255)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
sprite = 0
game.setScore(0)
basic.forever(function () {
    led.setBrightness(2)
    if (sprite >= 100) {
        basic.showLeds(`
            . # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # .
            `)
    } else if (sprite >= 90) {
        basic.showLeds(`
            . # # # #
            . # # # #
            # # . # #
            # # # # .
            # # # # .
            `)
    } else if (sprite >= 80) {
        basic.showLeds(`
            . # # # #
            . # # # #
            . # . # .
            # # # # .
            # # # # .
            `)
    } else if (sprite >= 70) {
        basic.showLeds(`
            . # # # #
            . # # # .
            . # . # .
            . # # # .
            # # # # .
            `)
    } else if (sprite == 60) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # . # .
            . # # # .
            . # # # .
            `)
    } else if (sprite == 50) {
        basic.showLeds(`
            . # # . .
            . # # # .
            . # . # .
            . # # # .
            . . # # .
            `)
    } else if (sprite == 40) {
        basic.showLeds(`
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            `)
    } else if (sprite == 30) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (sprite == 20) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
    } else if (sprite == 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (sprite >= 110) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (sprite > 110) {
        game.gameOver()
    }
})
