input.onButtonPressed(Button.A, function () {
    basic.showString("Kid")
    basic.showNumber(Kid)
    basic.pause(1000)
    Kid += 1
    basic.showNumber(Kid)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("TIE")
    basic.showNumber(TIE)
    basic.pause(1000)
    TIE += 1
    basic.showNumber(TIE)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Computer")
    basic.showNumber(Computer)
    basic.pause(1000)
    Computer += 1
    basic.showNumber(Computer)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Kid")
    basic.showNumber(Kid)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Computer")
    basic.showNumber(Computer)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("TIE")
    basic.showNumber(TIE)
    basic.pause(1000)
    basic.clearScreen()
})
let TIE = 0
let Computer = 0
let Kid = 0
Kid = 0
Computer = 0
TIE = 0
basic.showString("Kid V.S Computer")
