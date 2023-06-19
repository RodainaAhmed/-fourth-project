input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(30)
    basic.showIcon(IconNames.SmallHeart)
})
