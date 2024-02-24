def on_received_number(receivedNumber):
    global sprite
    sprite += 10
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    if sprite >= 90:
        radio.send_string("")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_received_string(receivedString):
    global sprite
    sprite += 50
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global sprite
    sprite = sprite - 10
input.on_button_pressed(Button.B, on_button_pressed_b)

sprite = 0
led.set_brightness(4)
radio.set_group(255)
basic.show_leds("""
    # # # # #
    # # # # #
    # # . # #
    # # # # #
    # # # # #
    """)
sprite = 0

def on_forever():
    led.set_brightness(2)
    if sprite >= 10:
        basic.show_leds("""
            . # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # .
            """)
    elif sprite >= 20:
        basic.show_leds("""
            . # # # #
            . # # # #
            # # . # #
            # # # # .
            # # # # .
            """)
    elif sprite >= 30:
        basic.show_leds("""
            . # # # #
            . # # # #
            . # . # .
            # # # # .
            # # # # .
            """)
    elif sprite >= 40:
        basic.show_leds("""
            . # # # #
            . # # # .
            . # . # .
            . # # # .
            # # # # .
            """)
    elif sprite >= 50:
        basic.show_leds("""
            . # # # .
            . # # # .
            . # . # .
            . # # # .
            . # # # .
            """)
    elif sprite >= 60:
        basic.show_leds("""
            . # # . .
            . # # # .
            . # . # .
            . # # # .
            . . # # .
            """)
    elif sprite >= 70:
        basic.show_leds("""
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            """)
    elif sprite >= 80:
        basic.show_leds("""
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            """)
    elif sprite >= 90:
        basic.show_leds("""
            . . . . .
            . . # # .
            . # . # .
            . # # . .
            . . . . .
            """)
    elif sprite >= 100:
        basic.show_leds("""
            . . . . .
            . . # # .
            . . . . .
            . # # . .
            . . . . .
            """)
basic.forever(on_forever)

def on_forever2():
    if sprite >= 110:
        game.game_over()
basic.forever(on_forever2)
