controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    logo.destroy()
    logo2.destroy()
    while (gameState == 0) {
        gameState = 1
        pause(400)
        controller.startLightAnimation(light.cometAnimation, 500)
        scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f 1 c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 c c c f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f 1 1 c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 5 5 5 5 5 5 c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f 1 1 1 c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 9 9 9 f f 1 1 1 5 c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 5 5 5 5 5 5 5 5 c c c 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 f 1 1 1 5 5 c c c c c f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 5 5 5 5 5 5 5 5 5 c c c 8 8 f f f f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 1 1 1 5 c c c c c c c c f f f f f f f f f f f f f f f f f f 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 5 5 c c c c c c c c c c c c f f f f f f f f f f f 1 1 1 1 5 5 5 5 5 5 5 5 5 c c c c 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 5 5 5 c c c c c c c c c c c c c c c c c c b 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c c c c 8 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 5 5 5 c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 5 5 5 5 5 c c c c c c c c c 8 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 8 c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 5 5 5 5 c c c c c c c c c c c c c b 1 1 1 1 1 1 5 5 5 c c c c c c c c c c c c 6 6 6 6 6 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f 5 5 5 5 5 6 6 6 6 5 5 c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 1 b b 1 1 5 5 5 5 5 5 c c c c c c c c c c 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 1 1 1 1 1 1 b b 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 5 5 b b b b b b 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 b b b b b b b b b b b 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 b b b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 b b b 5 5 5 5 5 5 5 5 5 5 b 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 c c c c 5 5 5 5 5 5 5 b b b 5 5 5 5 5 5 b 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 b b 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 1 b b b b 1 1 1 1 c c c f f f c 5 5 5 5 5 5 5 5 5 5 b b b b b b 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c f f f f f f f f f f c c f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 5 5 5 5 5 5 5 5 c b b c c f f f f f c c 5 5 f f f 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 5 5 5 5 5 c c c c c c c c f f f f f f c c f f f f f f f f 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 5 5 5 5 5 c c c c c c c c c f f f f f f c f f f f f f f f f f 5 5 5 5 5 b 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f 8 c f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 9 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c 1 1 5 5 5 5 5 c c c c c c c f f c f f f f f f c f f f f f f f f f f 5 5 5 5 b 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 9 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c 1 1 5 5 5 5 c c c c c c f f f c f f f f f f c f f f f f f f f f f f 5 5 5 b 1 1 1 1 1 5 5 5 5 5 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 9 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f f f f f f c f f f f f f f f f f f f c c b c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 9 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c f f f f f f c f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 1 1 1 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c f f f f f f f f f c c c c c c c c f f f f f f f f f c f f f f f f c c f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c f f f f 8 f f f f f f f 1 1 1 1 1 f f f f f f f f 8 8 8 8 8 f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 6 6 6 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 9 9 9 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c f f f 8 f f f f f f f f f f f f 1 1 1 1 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 6 6 6 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 9 6 6 8 8 8 8 8 8 8 f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 f 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 9 6 6 8 8 8 8 f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 f f f 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 9 6 6 8 f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 f f f f f f f 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f 1 1 1 c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 9 6 6 6 f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 1 1 1 c c c c c 5 5 5 c c c c c c c c c c c c c c c c c 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 9 6 6 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f 1 1 1 1 1 c c c c c c c c c c c c c c c c c c 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 9 6 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 9 6 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 9 6 6 6 6 f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 9 6 6 6 6 f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 9 9 6 6 6 f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 9 6 6 6 f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 1 1 9 9 9 9 6 6 6 6 6 6 f f f f f f f 8 8 8 8 f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f 1 1 1 9 9 9 9 9 6 6 6 f f f f f f f f f f 8 8 8 8 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
        pause(100)
        scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f 1 c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 c c c f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f 1 1 c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f 1 1 1 c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 f f f f f 1 1 1 5 c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 5 5 5 5 5 5 c c c 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 1 1 1 1 5 c c c c c f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 5 5 5 5 5 5 5 c c c 8 8 f f f f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 1 1 1 1 c c c c c c c c f f f f f f f f f f f f f f f f f f 1 1 1 1 5 5 5 5 5 5 5 5 5 c c c 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 1 1 1 1 5 c c c c c c c c c c c c f f f f f f f f f f f 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 f 1 1 1 1 1 5 c c c c c c c c c c c c c c c c c c b 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c c c 8 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 5 c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 5 5 5 5 5 5 c c c c c c c 8 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 8 c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 1 1 1 1 1 1 5 5 c c c c c c c c c c c c c b 1 1 1 1 1 1 1 5 5 5 5 5 c c c c c c c c c 6 6 6 6 6 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f 5 5 5 5 5 6 6 6 6 5 5 c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 b b 1 1 1 1 5 5 5 5 c c c c c c c c c c 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 b b 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 5 b b b b b b 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 b b b b b b b b b b b 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 b b b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 b b b 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 c c c c 1 1 1 5 5 5 5 b b b 5 5 5 5 5 5 b 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 b b 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 1 b b b b 1 1 1 1 c c c f f f c 1 1 5 5 5 5 5 5 5 5 b b b b b b 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c f f f f f f f f f f c c f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 1 1 c b b c c f f f f f c c 5 5 f f f 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 5 5 5 5 c c c c c c c c f f f f f f c c f f f f f f f f 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 5 5 5 5 c c c c c c c c c f f f f f f c f f f f f f f f f f 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f 8 c f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c 1 1 1 5 5 5 5 c c c c c c c f f c f f f f f f c f f f f f f f f f f 5 5 5 5 b 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 9 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c 1 1 1 5 5 5 c c c c c c f f f c f f f f f f c f f f f f f f f f f f 5 5 5 b 1 1 1 1 1 1 1 5 5 5 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 9 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f f f f f f c f f f f f f f f f f f f c c b c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 9 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c f f f f f f c f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c f f f f f f f f f c c c c c c c c f f f f f f f f f c f f f f f f c c f f f 9 9 9 9 9 9 9 9 9 9 9 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c f f f f 8 f f f f f f f 1 1 1 1 1 f f f f f f f f 8 8 8 8 8 f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 6 6 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c f f f 8 f f f f f f f f f f f f 1 1 1 1 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 6 6 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 9 9 9 9 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 c c c c c c c f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 9 6 8 8 8 8 8 8 8 8 f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 f 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 9 6 8 8 8 8 8 f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 f f 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 9 6 8 8 8 8 f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 f f f f f 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 9 9 f f f f f f f f 1 1 1 c c c 1 1 1 1 1 1 5 5 5 5 c c c c c c c c c c c c c f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 9 9 6 f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 1 1 1 c c c c c 1 1 1 c c c c c c c c c c c c c c c c c 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 9 6 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f 1 1 1 1 1 c c c c c c c c c c c c c c c c c c 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 9 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 9 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 9 9 6 6 f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 9 9 9 6 f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 9 6 6 f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 6 6 6 f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 1 1 1 1 1 1 1 9 9 9 6 6 f f f f f f f 8 8 8 8 f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f 1 1 1 1 1 1 1 1 9 6 6 f f f f f f f f f f 8 8 8 8 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
        pause(100)
        scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f 1 c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 c c c f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f 1 1 1 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f 1 1 1 5 c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 5 5 5 5 5 5 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f 1 1 1 1 5 c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 5 5 5 5 5 5 c c c 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 f f f f 1 1 1 1 1 c c c c c f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 5 5 5 5 5 5 c c c 8 8 f f f f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 f f f f 1 1 1 1 5 c c c c c c c f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 5 5 5 5 5 5 c c 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 f f f 1 1 1 1 1 5 5 c c c c c c c c c c f f f f f f f f f f f 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 f 1 1 1 1 1 1 5 5 c c c c c c c c c c c c c c c c b 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c 8 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 5 5 5 c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 c c c c c 8 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 8 c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 1 1 1 1 1 1 5 5 5 5 c c c c c c c c c c b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 c c c c c c 6 6 6 6 6 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f 5 5 5 5 5 6 6 6 6 5 5 c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 b b 1 1 1 1 1 1 5 5 5 5 5 5 c c c c c c 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 b b 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 b b b b b b 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 b b b b b b b b b b b 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 b b b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 b b b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 c c c c 1 1 1 1 1 5 5 b b b 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 b b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 1 b b b b 1 1 1 1 c c c f f f c 1 1 1 1 5 5 5 5 5 5 b b b b b b 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c f f f f f f f f f f c c f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 1 1 c b b c c f f f f f c c 1 1 f f f 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 c c c c c c c f f f f f f c c f f f f f f f f 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 5 5 5 c c c c c c c c f f f f f f c f f f f f f f f f f 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f 8 c f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c 1 1 1 1 1 5 5 5 5 c c c c c f f c f f f f f f c f f f f f f f f f f 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c 1 1 1 1 5 5 5 5 c c c c f f f c f f f f f f c f f f f f f f f f f f 5 5 5 b 1 1 1 1 1 1 1 1 1 1 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c 1 5 5 5 c c c c c f f f c f f f f f f c f f f f f f f f f f f f c c b c c c c c c c c c c f f f f f f f f f 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c f f f f f f c f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c c c c c c c f f f f f f f f f c c c c c c c c f f f f f f f f f c f f f f f f c c f f f 1 1 1 1 1 1 1 1 1 1 1 1 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c c c c f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 c c c c c c f f f f 8 f f f f f f f 1 1 1 1 1 f f f f f f f f 8 8 8 8 8 f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c f f f 8 f f f f f f f f f f f f 1 1 1 1 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 c c c c c f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 9 9 f 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 c c c c c c f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 6 8 8 8 8 8 f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 9 9 9 9 f f 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 6 8 8 8 8 f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 f f f f f f f 1 1 1 c c c 1 1 1 1 1 1 1 1 5 5 5 c c c c c c c c c c c c f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 6 f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 f f f f f f f f f f f 1 1 1 c c c c c 1 1 1 c c c c c c c c c c c c c c c c c 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 6 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 f f f f f f f f f f f f f f f 1 1 1 1 1 c c c c c c c c c c c c c c c c c c 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 6 6 f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 6 f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 6 6 f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 6 6 f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 1 1 1 1 1 1 1 1 1 1 6 6 f f f f f f f 8 8 8 8 f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f 1 1 1 1 1 1 1 1 1 1 6 f f f f f f f f f f 8 8 8 8 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
        pause(100)
        scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f 1 c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 c c c f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 9 9 9 9 9 9 9 9 9 9 f 9 9 9 f f f f 1 1 1 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 1 1 1 1 c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 f f 1 1 1 1 1 c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 5 5 5 5 c c c 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 f 1 1 1 1 1 5 c c c c f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 5 5 5 c c c 8 8 f f f f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 f f 1 1 1 1 1 5 5 c c c c c f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 5 5 5 5 c c 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 f 1 1 1 1 1 1 5 5 5 c c c c c c c c f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 c c 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 1 1 1 1 1 1 5 5 5 5 c c c c c c c c c c c c c b 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 c c c 8 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 5 5 5 5 c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 c c c c c 8 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 8 c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 c c c c c c b 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 c c c c c c 6 6 6 6 6 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f 5 5 5 5 5 6 6 6 6 5 5 c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 b b 1 1 1 1 1 1 1 1 5 5 5 5 5 5 c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 b b b b b b 1 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 b b b b b b b b b b b 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b 1 1 1 1 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 b b b b b b b b b b b 1 1 5 5 5 5 5 5 5 5 5 b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 b b b 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 c c c c 1 1 1 1 1 1 1 b b b 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 b b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 1 b b b b 1 1 1 1 c c c f f f c 1 1 1 1 1 1 5 5 5 5 b b b b b b 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f c c f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 1 1 c b b c c f f f f f c c 1 1 f f f 1 1 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 c c c c c c c f f f f f f c c f f f f f f f f 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 5 c c c c c c f f f f f f c f f f f f f f f f f 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f 8 c f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 1 1 1 1 1 1 1 1 5 5 5 c c c f f c f f f f f f c f f f f f f f f f f 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c 1 1 1 1 1 1 5 5 5 5 c c f f f c f f f f f f c f f f f f f f f f f f 5 5 5 b 1 1 1 1 1 1 1 1 1 1 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c 1 1 1 5 5 5 5 c c f f f c f f f f f f c f f f f f f f f f f f f c c b c c c c c c c c c c f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c f f f f c f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c f f f f f f c f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c c c c c f f f f f f f f f c c c c c c c c f f f f f f f f f c f f f f f f c c f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 c c c f f f f 8 f f f f f f f 1 1 1 1 1 f f f f f f f f 8 8 8 8 8 f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c f f f 8 f f f f f f f f f f f f 1 1 1 1 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 c c f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 8 8 8 8 f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 8 8 8 8 f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 9 9 9 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 9 9 9 9 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 c c c c c c c c c c c f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 9 9 9 9 f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 c c c c c c c c c c c c c 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 f f f f f f f f f f f f f f 1 1 1 1 1 5 5 5 5 5 c c c c c c c c c c c c c 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 8 8 8 8 f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f 8 8 8 8 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
        pause(100)
        scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 f f 1 c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 c c c f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 1 1 1 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 5 c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 1 1 1 1 c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 5 1 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 1 1 1 1 1 c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 5 5 5 5 c 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 1 1 1 1 1 c c c c f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 5 5 5 c c 8 8 f f f f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 1 1 1 1 1 1 c c c c c f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 5 5 c c 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 1 1 1 1 1 1 1 5 5 5 c c c c c c f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 c 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 5 5 5 5 5 c c c c c c c c c c b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 8 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c 8 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 8 c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 c c c b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c 6 6 6 6 6 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f 5 5 5 5 5 6 6 6 6 1 1 c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 b b 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 b b b b b b 1 1 1 1 1 1 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b 1 1 1 1 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 b b b b b b b b b b b 1 1 5 5 5 5 5 5 5 5 5 b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 b b b 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 c c c c 1 1 1 1 1 1 1 b b b 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 b b 1 1 1 1 1 1 1 b b b b 1 1 1 1 c c c f f f c 1 1 1 1 1 1 5 5 5 5 b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f c c f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 1 1 c b b c c f f f f f c c 1 1 f f f 1 1 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 c c c c c c c f f f f f f c c f f f f f f f f 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 5 c c c c c c f f f f f f c f f f f f f f f f f 5 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f 8 c f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 1 1 1 1 1 1 1 1 1 1 5 c c c f f c f f f f f f c f f f f f f f f f f 5 5 5 5 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c 1 1 1 1 1 1 1 1 1 5 c c f f f c f f f f f f c f f f f f f f f f f f 5 5 5 b 1 1 1 1 1 1 1 1 1 1 c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c 1 1 1 1 1 5 5 c c f f f c f f f f f f c f f f f f f f f f f f f c c b c c c c c c c c c c f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c 1 5 5 c c c f f f f c f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c f f f f f f c f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 c c c c c c c f f f f f f f f f c c c c c c c c f f f f f f f f f c f f f f f f c c f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c c f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 f f f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c f f f f 8 f f f f f f f 1 1 1 1 1 f f f f f f f f 8 8 8 8 8 f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c f f f 8 f f f f f f f f f f f f 1 1 1 1 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c c f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 8 f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 8 8 f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 9 f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 c c c c c c c c c c f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 9 f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 c c c c c c c c c c c c 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 9 f f f f f f f f f f f 1 1 1 1 1 5 5 5 5 5 c c c c c c c c c c c c c 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 9 f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 8 8 8 8 f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 8 8 8 8 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
        pause(100)
        scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
        pause(100)
        scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
        effects.starField.startScreenEffect()
        tail.setVelocity(0, -100)
        mySprite.setVelocity(0, -100)
        pause(400)
        mySprite.setVelocity(0, 0)
        tail.setVelocity(0, 0)
        tail.setFlag(SpriteFlag.StayInScreen, true)
        mySprite.setFlag(SpriteFlag.StayInScreen, true)
        controller.moveSprite(mySprite, 100, 100)
        controller.moveSprite(tail, 100, 100)
        gameState = 2
        info.setLife(3)
        info.setScore(0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    tail,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    50,
    true
    )
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . . . a . . . . . . . . 
. . . . . . a 5 a . . . . . . . 
. . . . . . a 5 5 a . . . . . . 
. . . . . . a 5 5 a . . . . . . 
. . . a . a 5 9 5 6 . . . a . . 
. . a 5 a a 5 9 5 5 a . a 5 a . 
. . a b 5 a 6 9 6 5 5 a 5 b a . 
. . . a b 5 5 6 5 5 5 5 b a . . 
. . . . a b b 5 b b b b a . . . 
. . . . . 6 a b 6 a a a . . . . 
. . . . . . a b a . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . a . . . . . . . . 
. . . . . . a 5 a . . . . . . . 
. . . . . . a 5 a . . . . . . . 
. . . . . a a 5 5 a a . . . . . 
. . . . a 5 9 5 5 9 5 a . . . . 
. . . . a 5 9 5 5 a 5 a . . . . 
. . . . a 5 9 6 5 5 5 a . . . . 
. . . . a b 6 5 5 5 b a . . . . 
. . . . . a b b 5 b a . . . . . 
. . . . . . a 9 b a . . . . . . 
. . . . . . a b a . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    50,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . . . a . . . . . . . . 
. . . . . . a 5 a . . . . . . . 
. . . . . . a 5 a . . . . . . . 
. . . . . a a 5 5 a a . . . . . 
. . . . a 5 9 5 5 9 5 a . . . . 
. . . . a 5 9 5 5 a 5 a . . . . 
. . . . a 5 9 6 5 5 5 a . . . . 
. . . . a b 6 5 5 5 b a . . . . 
. . . . . a b b 5 b a . . . . . 
. . . . . . a 9 b a . . . . . . 
. . . . . . a b a . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . a . . . . . . . . 
. . . . . . a 5 a . . . . . . . 
. . . . . . a 5 5 a . . . . . . 
. . . . . . a 5 5 a . . . . . . 
. . . a . a 5 9 5 6 . . . a . . 
. . a 5 a a 5 9 5 5 a . a 5 a . 
. . a b 5 a 6 9 6 5 5 a 5 b a . 
. . . a b 5 5 6 5 5 5 5 b a . . 
. . . . a b b 5 b b b b a . . . 
. . . . . 6 a b 6 a a a . . . . 
. . . . . . a b a . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a 9 . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 9 a b a 9 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    50,
    false
    )
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 8 a b a 8 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 6 a b a 6 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 9 a b a 9 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 1 a b a 1 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 9 a b a 9 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 6 a b a 6 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    50,
    true
    )
    animation.runImageAnimation(
    tail,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . 1 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    50,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . . . . . . . 
. 4 . . . . 4 . 
4 5 4 . . 4 5 4 
4 5 4 . . 4 5 4 
. 4 . . . . 4 . 
. . . . . . . . 
. . . . . . . . 
`, mySprite, 0, -200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    controller.startLightAnimation(light.rainbowAnimation, 500)
    otherSprite.destroy()
    sprite.startEffect(effects.fire, 500)
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    tail,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    50,
    true
    )
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 a . . . . . . 
. . . . . . a 5 5 a . . . . . . 
. . a . . . 6 5 9 5 a . a . . . 
. a 5 a . a 5 5 9 5 a a 5 a . . 
. a b 5 a 5 5 6 9 6 a 5 b a . . 
. . a b 5 5 5 5 6 5 5 b a . . . 
. . . a b b b b 5 b b a . . . . 
. . . . a a a 6 b a 6 . . . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . a a 5 5 a a . . . . . 
. . . . a 5 9 5 5 9 5 a . . . . 
. . . . a 5 a 5 5 9 5 a . . . . 
. . . . a 5 5 5 6 9 5 a . . . . 
. . . . a b 5 5 5 6 b a . . . . 
. . . . . a b 5 b b a . . . . . 
. . . . . . a b 9 a . . . . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    50,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . a a 5 5 a a . . . . . 
. . . . a 5 9 5 5 9 5 a . . . . 
. . . . a 5 a 5 5 9 5 a . . . . 
. . . . a 5 5 5 6 9 5 a . . . . 
. . . . a b 5 5 5 6 b a . . . . 
. . . . . a b 5 b b a . . . . . 
. . . . . . a b 9 a . . . . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 a . . . . . . 
. . . . . . a 5 5 a . . . . . . 
. . a . . . 6 5 9 5 a . a . . . 
. a 5 a . a 5 5 9 5 a a 5 a . . 
. a b 5 a 5 5 6 9 6 a 5 b a . . 
. . a b 5 5 5 5 6 5 5 b a . . . 
. . . a b b b b 5 b b a . . . . 
. . . . a a a 6 b a 6 . . . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . a . . . . . . . . 
. . . . . . a 5 a . . . . . . . 
. . . . . . a 5 a . . . . . . . 
. . . . . a 5 5 5 a . . . . . . 
. a . . 9 a 5 9 5 a . . . a . . 
a 5 a . a 5 5 9 5 5 a . a 5 a . 
a b 5 a 5 5 6 9 6 5 5 a 5 b a . 
. a b 5 5 b 5 6 5 b 5 5 b a . . 
. . a b b a b 5 b a b b a . . . 
. . . a a 9 a b a 9 a a . . . . 
. . . . . . a b a . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    50,
    false
    )
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 8 a b a 8 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 6 a b a 6 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 9 a b a 9 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 1 a b a 1 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 9 a b a 9 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 6 a b a 6 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    50,
    true
    )
    animation.runImageAnimation(
    tail,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . 1 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    50,
    true
    )
})
let enemy1: Sprite = null
let projectile: Sprite = null
let gameState = 0
let tail: Sprite = null
let mySprite: Sprite = null
let logo2: Sprite = null
let logo: Sprite = null
logo = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
1 1 1 1 1 . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . 
1 1 1 1 1 1 . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
1 . 1 1 1 1 1 . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
1 . . 1 1 1 1 1 . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
1 . . . 1 1 1 1 . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. 1 . . . 1 1 1 . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . 
. . 1 . . . 1 1 . 1 1 1 1 1 1 . . . . 1 . . . . . . . . . 1 . . 
. . . 1 1 1 1 1 . 1 1 1 1 1 . . . . 1 1 1 1 1 1 1 1 1 . . 1 . 1 
. . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . 1 1 1 
. . . 1 1 1 1 1 . 1 1 1 1 1 . . . . 1 . . . . . . . . . . 1 . . 
. . 1 . . . . 1 . 1 1 1 1 1 1 . . . 1 . . . . . . . . . . 1 . . 
. 1 . . . . . 1 . 1 . 1 1 1 1 1 . . 1 . . . . . . 1 1 1 . 1 . . 
1 . . . . . . 1 . 1 . . 1 1 1 1 1 . 1 . . . . . . 1 1 1 . 1 . . 
1 . . . . . . 1 . 1 . . . 1 1 1 1 . 1 . . . . . 1 1 1 1 . 1 . . 
1 . . . . . 1 . . . 1 . . . 1 1 1 . 1 . . . . 1 1 1 1 1 . 1 . . 
1 . . . . 1 . . . . . 1 . . . 1 1 . 1 1 1 1 1 1 1 1 1 . . 1 . . 
1 1 1 1 1 . . . . . . . 1 1 1 1 1 . 1 1 1 1 1 1 1 1 . . . 1 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
logo.setPosition(103, 28)
logo2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
1 1 1 1 1 1 . . . . 1 1 1 1 1 1 1 . . . . . 1 1 1 1 1 1 1 . . . 
1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 . . . 1 1 1 1 1 1 1 1 1 . . 
. . 1 1 1 1 . . 1 . . . . 1 1 1 1 1 1 . 1 . . . . 1 1 1 1 1 1 . 
. . . . . . . . 1 . . . . 1 1 1 1 1 1 . 1 . . . . 1 1 1 1 1 1 . 
. . . . . . . . 1 . . . . 1 1 1 1 1 1 . 1 . . . . 1 1 1 1 1 1 . 
. . . . . . . . 1 . . . . 1 1 1 1 1 1 . 1 . . . . 1 1 1 1 1 1 . 
. . . . . . . . 1 . . . . 1 1 1 1 1 1 . 1 . . . . 1 1 1 1 1 1 . 
. . . . . . . . 1 . . . . 1 1 1 1 1 1 . 1 . . . . 1 1 1 1 1 1 . 
. . . . . . . . 1 . . . . 1 1 1 1 1 1 . 1 . . . . 1 1 1 1 1 1 . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 . . 1 . . . . . 1 1 1 1 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
logo2.setPosition(135, 28)
let enemyList = [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . a 8 6 8 a . . . . . . 
. . . . . 8 8 4 8 8 . . . . . . 
. . . 9 8 6 3 3 3 6 8 9 . . . . 
. . . . 9 8 7 1 7 8 9 . . . . . 
. . . . . 9 8 7 8 9 . . . . . . 
. . . . . . 9 8 9 . . . . . . . 
. . . . . . . 9 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 3 . 3 . . 9 9 . . 3 . 3 . . 
. 9 1 9 1 9 9 6 6 9 9 1 9 1 9 . 
8 6 9 6 9 6 6 7 7 6 6 9 6 9 6 8 
8 7 6 7 6 7 6 4 4 6 7 6 7 6 7 8 
8 7 8 8 7 8 7 4 4 7 8 7 8 8 7 8 
. 8 . . 8 . 8 7 7 8 . 8 . . 8 . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . 9 1 c 8 . . . . . . 
. . . . . 8 6 9 8 6 8 . . . . . 
. . . . . 8 7 6 6 7 8 . . . . . 
. . 8 . . . 8 7 7 8 . . . 8 . . 
. 8 6 8 8 8 6 7 7 6 8 8 8 6 8 . 
8 6 3 6 6 6 7 8 8 7 6 6 6 3 6 8 
8 7 3 7 7 8 8 . . 8 8 7 7 3 7 8 
. 8 7 8 8 . . . . . . 8 8 7 8 . 
. . 8 . . . . . . . . . . 8 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`]
mySprite = sprites.create(img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 b 5 6 5 b 5 5 b a . 
. . . a b b a b 5 b a b b a . . 
. . . . a a 8 a b a 8 a a . . . 
. . . . . . . a b a . . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tail = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tail.setPosition(80, 140)
mySprite.setPosition(80, 140)
animation.runImageAnimation(
mySprite,
[img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 d 5 6 5 d 5 5 b a . 
. . . a b d 6 d 5 d 6 d b a . . 
. . . . a b 6 b b b 6 b a . . . 
. . . . . . 6 b b b 6 . . . . . 
. . . . . . . . a . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 d 5 6 5 d 5 5 b a . 
. . . d b d 9 d 5 d 9 d b d . . 
. . . . d 9 9 d b d 9 9 d . . . 
. . . . . . 9 9 d 9 9 . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. b b 5 a 5 5 6 9 6 5 5 a 5 b b 
. . d b 5 5 d 5 6 5 d 5 5 b d . 
. . . d d d 9 d 5 d 9 d d d . . 
. . . . d 9 1 9 d 9 1 9 d . . . 
. . . . . . 9 9 d 9 9 . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. d b a . a 5 5 9 5 5 a . a b d 
. d b 5 a 5 5 6 9 6 5 5 a 5 b d 
. . d b 1 1 d 1 6 1 d 1 1 b d . 
. . . d d d 1 d 1 d 1 d d d . . 
. . . . d 1 1 1 d 1 1 1 d . . . 
. . . . . . 1 1 d 1 1 . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. b b 5 a 5 5 6 9 6 5 5 a 5 b b 
. . d b 5 5 d 5 6 5 d 5 5 b d . 
. . . d d d 9 d 5 d 9 d d d . . 
. . . . d 9 1 9 d 9 1 9 d . . . 
. . . . . . 9 9 d 9 9 . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . a . . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . . a 5 a . . . . . . 
. . . . . . a 5 5 5 a . . . . . 
. . a . . . a 5 9 5 a . . . a . 
. a 5 a . a 5 5 9 5 5 a . a 5 a 
. a b 5 a 5 5 6 9 6 5 5 a 5 b a 
. . a b 5 5 d 5 6 5 d 5 5 b a . 
. . . d b d 9 d 5 d 9 d b d . . 
. . . . d 9 9 d b d 9 9 d . . . 
. . . . . . 9 9 d 9 9 . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
50,
true
)
animation.runImageAnimation(
tail,
[img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . 1 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . 6 . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
50,
true
)
forever(function () {
    while (gameState == 0) {
        scene.setBackgroundImage(img`
c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c b b b b b c b c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c b c b c b c b c b c b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c c b c b c b c b c b c b c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c b c b c b c b b b b b b b c b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b c b c b b b b b b b b d d b c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c b c b c b b b b b b d d d 6 6 b b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c b c b c b c b b b b b d d 6 6 6 9 9 6 c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c b c b c b c b b b b b d d d 6 6 9 9 9 1 1 9 6 b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c b c b c b c b b b d d d 6 6 6 9 9 1 1 1 9 9 6 c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c b c b c b b b b b d 6 6 6 9 9 9 1 1 1 9 9 6 6 c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c b b b b b d 6 9 9 9 1 1 1 9 9 9 6 6 d d c c b b 6 . . . . . . . . . . . . . . . . 
6 6 6 c c c c c c c c c c c c c c c c b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c b d d 6 9 1 1 1 9 9 9 6 6 6 d d b d c c b b 6 . . . . . . . . . . . . . . . . 
. . . 6 6 c c c c c c c c c c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c b 6 9 1 9 9 9 6 6 6 d d d d b d b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . 6 6 c c c c c c c c c c c c c c c b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c 6 9 6 6 6 d d d d b d b d b d c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c 6 d d d d b d b d b d b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . 6 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b b b 6 6 6 . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c d d b d b d b d b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 6 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c b b b b b 6 6 6 . . 6 6 b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c d b d b d b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b b b b b 6 6 b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b d b d b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c b b b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c d b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b c b c b c b c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c b c b c b c b c b c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
6 . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c b c b c b c b c b b b c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b 6 . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c b c b c b c b b b 6 6 b c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c b 6 . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c b c b c b b b 6 6 6 9 9 6 c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c b 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b c b c b 6 6 6 9 9 9 1 1 9 6 b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c b 6 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . 6 . . . . . . . . . . . . . . . . . 6 6 c b c b 6 9 9 9 1 1 1 9 9 6 c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c b b 6 6 6 . . 6 b 6 . . . . . . . . . . . . . . . . . . 6 6 b 6 9 1 1 1 9 9 9 6 6 c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b b 6 6 b b 6 . . . . . . . . . . . . . . . . . . . . 6 9 1 9 9 9 6 6 6 d d c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b c b b b b 6 . . . . . . . . . . . . . . . . . . . . 6 6 9 6 6 6 d d d d d c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c b 6 6 . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c b c b c b c b 6 . . . . . . . . . . . . . . . . . . . . 6 c 6 d d d b d b d b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c b c b c b c b b 6 . . . . . . . . . . . . . . . . . . . . 6 c d b d b d b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c b c b c b b b c b 6 . . . . . . . . . . . . . . . . . . . . 6 c b d b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c b c b c b b 6 6 c b 6 . . . . . . . . . . . . . . . . . . . . 6 c d b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c b b 6 6 6 6 . . . . . . . . . . . . . . . . . . 6 6 c c c b c b c b 6 6 9 9 6 b 6 . . . . . . . . . . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c b b b b 6 6 6 6 . . . . . . . . . . . . . . . . 6 c b c b c b 6 9 9 1 1 9 6 6 . . . . . . . . . . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c b b b b 6 6 6 . . . . . . . . . . . . . . 6 6 b c b 6 9 1 1 9 9 6 b 6 . . . . . . . 1 . . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 6 6 . . . . . . . . . . . . . 6 6 6 9 1 9 9 6 6 c b 6 . . . . . . . c 1 . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 6 9 6 6 d d c b 6 . . . . . . . c 1 . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c 6 d d b d c b 6 . . . . . . . c 1 . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c d d b d b c b 6 . . . . . . . . c 1 . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c d b d b b c b 6 . . . . 1 . . . c 1 . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c b d b b b c b 6 . . . . c 1 . . c 1 . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c d b b b b c b 6 . . . . c 1 . . . c 1 . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . c 1 . . . c 1 . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c b b b c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . c 1 . . c 1 . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c b b b b b b b b c c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . c 1 . . . c 1 . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c b b b b b b b b b b b b c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . c 1 . . . c 1 . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c b b b b b b b b b b b b b b b b c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . . c 1 . . c 1 . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c b b b b b b b b b b b b b b 1 1 1 b b c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . . c 1 . . c 1 1 1 1 1 1 1 1 1 1 1 b 2 2 b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c b b b b b b b b b b b b b b b b 1 9 9 9 1 b b c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . . c 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 1 2 2 b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c b b b b b b b b b b b b b b b b b b b 9 9 5 5 9 1 b c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . 1 1 1 1 1 1 1 1 1 1 1 9 9 c c c c 9 1 b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b 9 9 5 5 5 9 1 c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . 1 1 1 9 9 9 9 9 9 9 1 1 9 9 c c c c c c c 9 1 1 1 1 b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b 9 9 5 5 5 5 9 1 1 b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 c c 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b 9 9 5 5 5 5 5 9 9 1 1 6 . . . . . . . . . . . . . . 6 c b b b b 1 1 1 9 9 9 9 9 9 5 5 5 5 5 5 9 c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b 9 9 5 5 5 5 5 5 9 9 1 1 1 . . . . . . . . . . . . 6 c b b 1 1 9 9 9 5 5 5 5 5 5 5 5 5 5 5 9 c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b 9 9 5 5 5 5 5 5 5 5 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 1 1 1 . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b 9 9 5 5 5 5 5 5 5 5 5 5 5 9 b b 9 9 9 9 9 9 9 9 9 b b 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 1 1 1 1 1 1 . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 9 9 9 1 1 9 9 9 9 1 1 1 1 1 1 1 1 1 1 . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b 9 b b b b 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 6 6 6 6 6 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 9 9 9 1 1 6 6 5 5 5 5 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b 9 b 9 b b b b b b 9 9 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 9 9 9 9 1 1 9 9 9 9 9 9 9 9 1 1 1 1 1 b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b 9 9 9 1 1 1 1 1 1 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 1 1 1 1 1 9 9 9 9 1 1 1 1 1 1 b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b 9 b b b b 9 9 9 1 9 9 9 9 9 9 1 1 b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 1 1 1 1 1 1 b 9 9 9 9 9 1 1 1 1 b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b 9 b 9 9 1 9 9 5 5 5 5 5 9 9 1 1 1 1 1 1 b b b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b 9 9 9 5 5 5 5 5 5 5 5 5 9 1 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 1 1 1 b 1 1 1 1 1 1 9 9 9 9 1 1 1 b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b 9 9 9 9 5 5 5 b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 9 b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b 9 9 9 5 5 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 1 b 6 . . . . . . . . . . . . . . . 
b b b b b b b b b b b 9 b b 9 b 9 9 9 9 9 b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 b 1 1 b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b 9 9 9 9 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 b 6 . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b 9 9 9 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 b b 9 9 9 1 1 1 1 b b b b 5 5 5 5 5 5 9 c c c 5 5 5 5 5 5 5 5 5 5 5 b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 b 9 9 9 9 9 9 c c c c c c c c c 9 9 9 1 b 6 . . . . . . . . . . . . . 
b b b b b b b b b b b b b b 9 c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 b 5 5 5 5 5 9 9 9 9 1 1 1 1 b b 5 5 5 9 c c c 5 5 5 5 9 c c 5 5 5 5 5 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 1 c c c c c c c b b b b b b b b c c 9 1 b b b 6 . . . . . . . . . . . . 
b b b b b b b b b b b b b c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 9 9 9 b 5 5 5 5 5 5 5 9 9 9 9 9 9 1 1 5 5 9 c c c c 5 5 5 9 c c c c c 5 5 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 c c c c c c b b b b b b b b b c c c c c 8 c 9 1 b b b b b 6 . . . . . . . . . . . 
b b b b b b b b b b b c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 1 1 1 1 1 1 1 1 b 9 9 9 9 9 9 9 9 9 9 9 9 9 1 5 5 5 5 9 c c c c 5 5 9 c c c c c c c c 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 c c c c c c b b b b b b b b b b b b b c c c c 8 8 8 c 9 1 c c b b b b b 6 6 6 6 6 6 6 6 6 6 6 
b b b b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c 5 5 9 b b c c 5 5 9 c c c c c c c c 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 c c c c c c b b b b b b b b b b b b b b b b b c c c c 8 8 6 6 c c c c c c c b b b b b b b b b b b b b b b 
b b b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 9 9 9 9 9 9 9 1 1 1 1 b 9 9 9 9 9 9 9 9 9 1 1 1 5 c c c 5 5 9 b b b c 5 5 9 c c c b b c c c 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 9 9 c c c c c c b b b b b b b b b b b b b b b b b b b b c c c c c 8 8 6 6 c c b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 9 9 5 5 5 9 9 9 9 9 9 9 b 9 9 9 9 9 9 9 9 9 9 9 9 1 5 c c c 5 5 9 b b b c 5 5 9 c b b b b b c 9 9 9 9 1 b 9 9 9 9 9 9 9 9 9 9 c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c c c 8 8 6 6 c c b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 9 5 5 b b b 5 9 9 9 9 9 9 b 5 5 5 5 9 9 9 9 9 9 1 1 1 5 c c c c 5 9 b b b b c 5 9 b b b b b b c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c 8 8 6 6 c c b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 5 b b 5 5 5 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 5 5 5 c c c c c 5 5 9 b b b c 5 5 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 8 8 8 6 6 c c b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 b 5 5 5 5 5 5 6 8 8 8 8 8 c c c 5 5 5 5 5 5 5 5 c c c c c c c 8 8 5 5 9 8 8 8 8 5 5 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 8 8 8 8 8 6 6 6 c c b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 b 5 5 5 5 6 6 6 6 6 6 6 6 8 8 8 8 c c c c c c c c c 8 8 8 8 8 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 8 8 8 8 8 6 6 6 6 6 c c c b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 b 5 5 6 6 c c c c c c c c 6 6 6 6 8 8 8 8 8 8 8 8 8 6 6 6 6 6 c c c c c c c c 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 8 8 8 6 6 6 6 6 c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c 
b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 5 5 6 c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c b b c c c c c c c c c 6 6 6 6 6 6 6 8 8 8 8 c c c c c c c c c c c c c c c c c c c 8 8 6 6 6 6 6 6 c c c c c c c c b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c 
d d d 1 1 1 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 6 d d d d d d d d d d d d d d d c c c c c c c c c c c c c c b b b b b b f f f f f f c c c c c c c c c c c c 6 6 6 6 8 8 8 c c c c c c c c c c c c c c c 8 6 6 c c c c c c d d d d d d d d d d d d d d d d d d 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d 
1 1 1 b b b 6 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 5 6 d d d d d d d d d d d d d c c c c c 6 6 6 6 6 6 6 6 6 6 6 b f f f f f c c c c c c c c c c c c c c c c c c c c c c 6 6 6 8 8 c c c c c c c c c c c c 8 6 c c d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d 
b b b d d d d 6 c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 c c c c c c c c c c c c c c c b b 6 b b b b b b b b b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 8 c c c c c c c c c c 8 6 c d d d d d d d d d d d d d d d d d d 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d 6 6 c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 c c c c c c c b b b b b b f f 6 b c c c c c c c b 6 c c c c c c c c c c c c c c c c c d d d d d d c c c c d d d d c c 6 8 c c c c c c c c 8 6 c d d d d d d d d d d d d d d d 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d 6 6 c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 b b b f f f f f f c c 6 b c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d c 6 8 8 c c c c c 8 6 c d d d d d d d d d d d d 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d 6 6 6 c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 2 2 c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d c 6 6 8 8 8 8 8 6 c d d d d d d d d d 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 6 2 2 c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b 6 6 6 6 6 c d d d d d d 1 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 1 1 1 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 c c c c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b c c c c 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d 1 1 1 1 1 1 1 f f f f f f f c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b c c b b b b f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d 1 1 1 1 1 1 1 b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b c b f f f f c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
1 b b b b b b b d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b b b b c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c b b b b b b b b b c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 
b d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b b b b b b b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b c b b b 9 9 b b b b b b c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 
d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b b b b b b b 6 c c c c c c c c c c c c c c c c c c c c c c c b b b b b b c 6 8 8 c 9 9 c c c c c c b b c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 
d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d c 6 b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c b b b b b b b b f f f c 6 6 8 9 9 c c c c c c c c b b b c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 b b 
d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d 6 b d d d d b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b f f f f c c 2 2 c c 6 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c 2 2 c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d 1 1 1 b d d 
d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d 6 b d d d d d d d b b b b b c c c c c c c c c c b b b b b b b b f f f f c c c c c c 2 2 c c c 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 3 3 c c 2 2 c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d 1 1 1 b d d d 
d d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d 6 b b b b d d d d d d d b b c c c c c c c c c c b b b b f f f f c c c c c c c c c c c c c c c 6 e e 9 c c c c c 9 9 9 9 c c c c c c c 3 3 c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d 1 1 1 b d d d d 
6 d d d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d b b b d d d d b b d d d 1 1 1 1 b b b f f f f c c c c c c c c c c c c c c c c c c c 6 e e e 9 c c c 6 4 4 4 4 9 c c c c c c 3 3 c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d 1 1 1 b d d d d d 
9 9 9 9 9 9 9 d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d b b b b b d 1 1 1 1 1 1 1 b b b c c c c c c c c c c c c c c c c c c c c c c c c 6 e e e 9 c 6 4 4 4 4 4 9 c c c c c c 3 3 c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d 1 1 1 b d d d d d d 
6 6 6 6 6 6 6 9 9 9 9 9 d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d 1 1 1 1 1 1 1 1 b b b d d d d d d c c c c c c c c c c c c c c c c c c c c c c 6 e e e 9 c 6 d d d d 9 c c c c c 9 9 3 c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d 1 1 1 b d d d d d d d 
b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d 1 1 1 1 1 1 1 1 b b b b d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c 6 e e e 4 4 4 4 4 4 9 9 9 9 9 9 e e 9 c c c c c c c c c c c c c c c c c c c c c c d d d d d d d 1 1 1 1 b d d d d d d d d 
b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d c c c c c c c c c d d d d d d d d d d d 1 1 1 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c 6 e e 4 4 4 4 4 4 e e e e e e e e 9 c c c c c c c c c c c c c c c c c c c c c d d d d d d d 1 1 1 1 b d d d d d d d d d 
b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 d b b b d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c 6 4 4 4 4 4 4 4 e e e e e e 6 6 c c c c c c c c c c c c c c c c c c c c c d d d d d d d 1 1 1 b b d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d 1 1 1 1 1 1 1 1 d b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c c c c c c c 6 4 4 4 4 4 4 4 4 6 6 6 6 6 c c c c c c c c c c c c c c c c c c d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 d b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c 6 4 4 4 4 4 4 4 4 9 c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d c 9 9 9 9 9 9 9 9 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 4 4 4 4 4 4 4 4 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d c c c c 6 6 6 6 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 4 4 4 4 4 4 4 4 4 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b d d d d c c c b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 4 4 4 4 4 4 4 4 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 c c c c c c c c 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 e e e e e e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 e e e e 9 e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d 
b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d 6 e e e e 9 e e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b b d d d d d d d d d d d d d d d d d d d d 
b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d 6 e e e e 9 e e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d 
d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d 6 e e e 9 6 e e e 9 d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 d d d d d d d d d d d d d 6 e e e 9 6 e e e 9 d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 9 9 9 9 9 d d d d d d d d 6 e e e 9 c 6 e e e 9 d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 c c c c 6 e e 9 6 e e e e 9 d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 6 e e e e 9 c c c c c c c c c c d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c 6 6 6 6 6 6 6 6 9 9 c c c c c c c c d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c 6 6 6 6 6 9 9 9 9 c c c d d d d d d d d d d d 1 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c 6 6 6 6 6 9 d d d d d d d d d d d 1 1 1 1 b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`)
        pause(200)
        scene.setBackgroundImage(img`
c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c b b b b b c b c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c b c b c b c b c b c b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c c b c b c b c b c b c b c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c b c b c b c b b b b b b b c b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b c b c b b b b b b b b d d b c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c b c b c b b b b b b d d d 6 6 b b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c b c b c b c b b b b b d d 6 6 6 9 9 6 c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c b c b c b c b b b b b d d d 6 6 9 9 9 1 1 9 6 b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c b c b c b c b b b d d d 6 6 6 9 9 1 1 1 9 9 6 c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c b c b c b b b b b d 6 6 6 9 9 9 1 1 1 9 9 6 6 c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c b b b b b d 6 9 9 9 1 1 1 9 9 9 6 6 d d c c b b 6 . . . . . . . . . . . . . . . . 
6 6 6 c c c c c c c c c c c c c c c c b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c b d d 6 9 1 1 1 9 9 9 6 6 6 d d b d c c b b 6 . . . . . . . . . . . . . . . . 
. . . 6 6 c c c c c c c c c c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c b 6 9 1 9 9 9 6 6 6 d d d d b d b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . 6 6 c c c c c c c c c c c c c c c b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c 6 9 6 6 6 d d d d b d b d b d c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c 6 d d d d b d b d b d b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . 6 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b b b 6 6 6 . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c d d b d b d b d b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 6 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c b b b b b 6 6 6 . . 6 6 b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c d b d b d b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b b b b b 6 6 b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b d b d b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c b b b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c d b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b c b c b c b c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c b c b c b c b c b c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
6 . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c b c b c b c b c b b b c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b 6 . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c b c b c b c b b b 6 6 b c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c b 6 . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c b c b c b b b 6 6 6 9 9 6 c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c b 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b c b c b 6 6 6 9 9 9 1 1 9 6 b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c b 6 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . 6 . . . . . . . . . . . . . . . . . 6 6 c b c b 6 9 9 9 1 1 1 9 9 6 c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c b b 6 6 6 . . 6 b 6 . . . . . . . . . . . . . . . . . . 6 6 b 6 9 1 1 1 9 9 9 6 6 c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b b 6 6 b b 6 . . . . . . . . . . . . . . . . . . . . 6 9 1 9 9 9 6 6 6 d d c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b c b b b b 6 . . . . . . . . . . . . . . . . . . . . 6 6 9 6 6 6 d d d d d c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c b 6 6 . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c b c b c b c b 6 . . . . . . . . . . . . . . . . . . . . 6 c 6 d d d b d b d b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c b c b c b c b b 6 . . . . . . . . . . . . . . . . . . . . 6 c d b d b d b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c b c b c b b b c b 6 . . . . . . . . . . . . . . . . . . . . 6 c b d b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c b c b c b b 6 6 c b 6 . . . . . . . . . . . . . . . . . . . . 6 c d b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c b b 6 6 6 6 . . . . . . . . . . . . . . . . . . 6 6 c c c b c b c b 6 6 9 9 6 b 6 . . . . . . . . . . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c b b b b 6 6 6 6 . . . . . . . . . . . . . . . . 6 c b c b c b 6 9 9 1 1 9 6 6 . . . . . . . . . . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c b b b b 6 6 6 . . . . . . . . . . . . . . 6 6 b c b 6 9 1 1 9 9 6 b 6 . . . . . . . 1 . . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 6 6 . . . . . . . . . . . . . 6 6 6 9 1 9 9 6 6 c b 6 . . . . . . . c 1 . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 6 9 6 6 d d c b 6 . . . . . . . c 1 . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c 6 d d b d c b 6 . . . . . . . c 1 . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c d d b d b c b 6 . . . . . . . . c 1 . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c d b d b b c b 6 . . . . 1 . . . c 1 . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c b d b b b c b 6 . . . . c 1 . . c 1 . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c d b b b b c b 6 . . . . c 1 . . . c 1 . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . c 1 . . . c 1 . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c b b b c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . c 1 . . c 1 . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c b b b b b b b b c c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . c 1 . . . c 1 . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c b b b b b b b b b b b b c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . c 1 . . . c 1 . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c b b b b b b b b b b b b b b b b c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . . c 1 . . c 1 . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c b b b b b b b b b b b b b b 1 1 1 b b c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . . c 1 . . c 1 1 1 1 1 1 1 1 1 1 1 b 1 1 b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c b b b b b b b b b b b b b b b b 1 6 6 6 1 b b c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . . c 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 1 1 1 b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c b b b b b b b b b b b b b b b b b b b 6 6 5 5 9 1 b c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . 1 1 1 1 1 1 1 1 1 1 1 9 9 c c c c 9 1 b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b 6 6 5 5 5 9 1 c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . 1 1 1 9 9 9 9 9 9 9 1 1 9 9 c c c c c c c 9 1 1 1 1 b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b 6 6 5 5 5 5 9 1 1 b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 c c 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b 6 6 5 5 5 5 5 9 9 1 1 6 . . . . . . . . . . . . . . 6 c b b b b 1 1 1 9 9 9 9 9 9 5 5 5 5 5 5 9 c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b 6 6 5 5 5 5 5 5 9 9 1 1 1 . . . . . . . . . . . . 6 c b b 1 1 9 9 9 5 5 5 5 5 5 5 5 5 5 5 9 c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b 6 6 5 5 5 5 5 5 5 5 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 1 1 1 . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b 6 6 5 5 5 5 5 5 5 5 5 5 5 9 b b 9 9 9 9 9 9 9 9 9 b b 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 1 1 1 1 1 1 . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b 6 b b b b b b 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 9 9 9 1 1 9 9 9 9 1 1 1 1 1 1 1 1 1 1 . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b 6 b b b b 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 6 6 6 6 6 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 9 9 9 1 1 6 6 5 5 5 5 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b 6 b b b b b b 6 6 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 9 9 9 9 1 1 9 9 9 9 9 9 9 9 1 1 1 1 1 b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b 6 6 1 1 1 1 1 1 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 1 1 1 1 1 9 9 9 9 1 1 1 1 1 1 b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b 6 b b b 6 6 1 6 6 6 6 6 6 1 1 b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 1 1 1 1 1 1 b 9 9 9 9 9 1 1 1 1 b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b 6 6 1 6 6 5 5 5 5 5 9 9 1 1 1 1 1 1 b b b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b 9 9 9 5 5 5 5 5 5 5 5 5 9 1 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 1 1 1 b 1 1 1 1 1 1 9 9 9 9 1 1 1 b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b 6 b b b 6 6 6 6 5 5 5 b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 9 b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b 9 9 9 5 5 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 1 b 6 . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b 6 b 6 6 6 6 b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 b 1 1 b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b 9 9 9 9 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 b 6 . . . . . . . . . . . . . . 
b b b b b b b b b b b b b 6 b b b 6 6 6 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 b b 9 9 9 1 1 1 1 b b b b 5 5 5 5 5 5 9 c c c 5 5 5 5 5 5 5 5 5 5 5 b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 b 9 9 9 9 9 9 c c c c c c c c c 9 9 9 1 b 6 . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 b 5 5 5 5 5 9 9 9 9 1 1 1 1 b b 5 5 5 9 c c c 5 5 5 5 9 c c 5 5 5 5 5 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 1 c c c c c c c b b b b b b b b c c 9 1 b b b 6 . . . . . . . . . . . . 
b b b b b b b b b b b b b c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 9 9 9 b 5 5 5 5 5 5 5 9 9 9 9 9 9 1 1 5 5 9 c c c c 5 5 5 9 c c c c c 5 5 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 c c c c c c b b b b b b b b b c c c c c 8 c 9 1 b b b b b 6 . . . . . . . . . . . 
b b b b b b b b b b b c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 1 1 1 1 1 1 1 1 b 9 9 9 9 9 9 9 9 9 9 9 9 9 1 5 5 5 5 9 c c c c 5 5 9 c c c c c c c c 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 c c c c c c b b b b b b b b b b b b b c c c c 8 8 8 c 9 1 c c b b b b b 6 6 6 6 6 6 6 6 6 6 6 
b b b b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c 5 5 9 b b c c 5 5 9 c c c c c c c c 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 c c c c c c b b b b b b b b b b b b b b b b b c c c c 8 8 6 6 c c c c c c c b b b b b b b b b b b b b b b 
b b b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 9 9 9 9 9 9 9 1 1 1 1 b 9 9 9 9 9 9 9 9 9 1 1 1 5 c c c 5 5 9 b b b c 5 5 9 c c c b b c c c 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 9 9 c c c c c c b b b b b b b b b b b b b b b b b b b b c c c c c 8 8 6 6 c c b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 9 9 5 5 5 9 9 9 9 9 9 9 b 9 9 9 9 9 9 9 9 9 9 9 9 1 5 c c c 5 5 9 b b b c 5 5 9 c b b b b b c 9 9 9 9 1 b 9 9 9 9 9 9 9 9 9 9 c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c c c 8 8 6 6 c c b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 9 5 5 b b b 5 9 9 9 9 9 9 b 5 5 5 5 9 9 9 9 9 9 1 1 1 5 c c c c 5 9 b b b b c 5 9 b b b b b b c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c 8 8 6 6 c c b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 5 b b 5 5 5 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 5 5 5 c c c c c 5 5 9 b b b c 5 5 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 8 8 8 6 6 c c b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 b 5 5 5 5 5 5 6 8 8 8 8 8 c c c 5 5 5 5 5 5 5 5 c c c c c c c 8 8 5 5 9 8 8 8 8 5 5 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 8 8 8 8 8 6 6 6 c c b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 b 5 5 5 5 6 6 6 6 6 6 6 6 8 8 8 8 c c c c c c c c c 8 8 8 8 8 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 8 8 8 8 8 6 6 6 6 6 c c c b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 b 5 5 6 6 c c c c c c c c 6 6 6 6 8 8 8 8 8 8 8 8 8 6 6 6 6 6 c c c c c c c c 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 8 8 8 6 6 6 6 6 c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c 
b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 5 5 6 c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c b b c c c c c c c c c 6 6 6 6 6 6 6 8 8 8 8 c c c c c c c c c c c c c c c c c c c 8 8 6 6 6 6 6 6 c c c c c c c c b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c 
d d d 1 1 1 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 6 d d d d d d d d d d d d d d d c c c c c c c c c c c c c c b b b b b b f f f f f f c c c c c c c c c c c c 6 6 6 6 8 8 8 c c c c c c c c c c c c c c c 8 6 6 c c c c c c d d d d d d d d d d d d d d d d d d 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d 
1 1 1 b b b 6 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 5 6 d d d d d d d d d d d d d c c c c c 6 6 6 6 6 6 6 6 6 6 6 b f f f f f c c c c c c c c c c c c c c c c c c c c c c 6 6 6 8 8 c c c c c c c c c c c c 8 6 c c d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d 
b b b d d d d 6 c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 c c c c c c c c c c c c c c c b b 6 b b b b b b b b b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 8 c c c c c c c c c c 8 6 c d d d d d d d d d d d d d d d d d d 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d 6 6 c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 c c c c c c c b b b b b b f f 6 b c c c c c c c b 6 c c c c c c c c c c c c c c c c c d d d d d d c c c c d d d d c c 6 8 c c c c c c c c 8 6 c d d d d d d d d d d d d d d d 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d 6 6 c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 b b b f f f f f f c c 6 b c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d c 6 8 8 c c c c c 8 6 c d d d d d d d d d d d d 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d 6 6 6 c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 1 1 c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d c 6 6 8 8 8 8 8 6 c d d d d d d d d d 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 6 1 1 c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b 6 6 6 6 6 c d d d d d d 1 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 1 1 1 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 c c c c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b c c c c 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d 1 1 1 1 1 1 1 f f f f f f f c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b c c b b b b f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d 1 1 1 1 1 1 1 b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b c b f f f f c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
1 b b b b b b b d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b b b b c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c b b b b b b b b b c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 
b d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b b b b b b b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b c b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 
d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b b b b b b b 6 c c c c c c c c c c c c c c c c c c c c c c c b b b b b b c 6 8 8 c c c c c c c c c b b c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 
d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d c 6 b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c b b b b b b b b f f f c 6 6 8 8 8 c c c c c c c c b b b c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 b b 
d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d 6 b d d d d b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b f f f f c c 1 9 9 c 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c 1 1 c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d 1 1 1 b d d 
d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d 6 b d d d d d d d b b b b b c c c c c c c c c c b b b b b b b b f f f f c c c c c c 1 9 9 c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c 1 1 c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d 1 1 1 b d d d 
d d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d 6 b b b b d d d d d d d b b c c c c c c c c c c b b b b f f f f c c c c c c c c c c c 9 9 c c c c c c c c c c c 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d 1 1 1 b d d d d 
6 d d d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d b b b d d d d b b d d d 1 1 1 1 b b b f f f f c c c c c c c c c c c c c c c c 9 9 c c c c c c c c c 6 4 4 4 4 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d 1 1 1 b d d d d d 
9 9 9 9 9 9 9 d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d b b b b b d 1 1 1 1 1 1 1 b b b c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 c c c c 6 4 4 4 4 4 9 c c c c c c c c 3 3 c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d 1 1 1 b d d d d d d 
6 6 6 6 6 6 6 9 9 9 9 9 d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d 1 1 1 1 1 1 1 1 b b b d d d d d d c c c c c c c c c c c c c c c c c c 6 e e e e 9 9 9 9 9 6 d d d d 9 c c c c c c c c 3 3 c c c c c c c c c c c c c c c c c c c c d d d d d d d d d 1 1 1 b d d d d d d d 
b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d 1 1 1 1 1 1 1 1 b b b b d d d d d d d d d d d d c c c c c c c c c c c c c c c 6 e e e e e e e e e 4 4 4 4 4 9 c c c c c c c c 3 3 c c c c c c c c c c c c c c c c c c c c d d d d d d d 1 1 1 1 b d d d d d d d d 
b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d c c c c c c c c c d d d d d d d d d d d 1 1 1 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d c c c c c c c c c c c c c 6 6 6 e e e e e e 4 4 4 4 4 4 9 9 9 9 c c c 3 3 c c c c c c c c c c c c c c c c c c c c d d d d d d d 1 1 1 1 b d d d d d d d d d 
b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 d b b b d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c c c c c c c c c 6 6 6 e e 4 4 4 4 4 4 e e e e e 9 9 9 3 3 c c c c c c c c c c c c c c c c c c c d d d d d d d 1 1 1 b b d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d 1 1 1 1 1 1 1 1 d b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c c c c c c c 6 4 4 4 4 4 4 4 e e e e e e e e 9 3 c c c c c c c c c c c c c c d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 d b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c 6 4 4 4 4 4 4 4 4 9 6 6 6 e e e e 9 c c c c c c c c c d d d d d d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d c 9 9 9 9 9 9 9 9 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 4 4 4 4 4 4 4 4 9 d d d 6 6 6 6 9 d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d c c c c 6 6 6 6 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 4 4 4 4 4 4 4 4 4 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b d d d d c c c b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 4 4 4 4 4 4 4 4 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 c c c c c c c c 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 e e e e e e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 e e e e 9 e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d 
b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d 6 e e e e 9 e e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b b d d d d d d d d d d d d d d d d d d d d 
b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d 6 e e e e 9 e e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d 
d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d 6 e e e 9 6 e e e 9 d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 d d d d d d d d d d d d d 6 e e e 9 6 e e e 9 d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 9 9 9 9 9 d d d d d d d d 6 e e e 9 c 6 e e e 9 d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 c c c c 6 e e 9 6 e e e e 9 d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 6 e e e e 9 c c c c c c c c c c d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c 6 6 6 6 6 6 6 6 9 9 c c c c c c c c d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c 6 6 6 6 6 9 9 9 9 c c c d d d d d d d d d d d 1 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c 6 6 6 6 6 9 d d d d d d d d d d d 1 1 1 1 b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`)
        pause(200)
        scene.setBackgroundImage(img`
c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c b b b b b c b c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c b c b c b c b c b c b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c c b c b c b c b c b c b c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c b c b c b c b b b b b b b c b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b c b c b b b b b b b b d d b c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c b c b c b b b b b b d d d 6 6 b b b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c b c b c b c b b b b b d d 6 6 6 9 9 6 c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c b c b c b c b b b b b d d d 6 6 9 9 9 1 1 9 6 b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c b c b c b c b b b d d d 6 6 6 9 9 1 1 1 9 9 6 c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c b c b c b b b b b d 6 6 6 9 9 9 1 1 1 9 9 6 6 c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c b b b b b d 6 9 9 9 1 1 1 9 9 9 6 6 d d c c b b 6 . . . . . . . . . . . . . . . . 
6 6 6 c c c c c c c c c c c c c c c c b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c b d d 6 9 1 1 1 9 9 9 6 6 6 d d b d c c b b 6 . . . . . . . . . . . . . . . . 
. . . 6 6 c c c c c c c c c c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c b 6 9 1 9 9 9 6 6 6 d d d d b d b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . 6 6 c c c c c c c c c c c c c c c b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c 6 9 6 6 6 d d d d b d b d b d c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c b b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c 6 d d d d b d b d b d b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . 6 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b b b 6 6 6 . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c d d b d b d b d b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 6 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c b b b b b 6 6 6 . . 6 6 b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c d b d b d b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b b b b b 6 6 b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b d b d b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c c c c c c b b b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c d b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b c b c b c b c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c b c b c b c b c b c b b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
6 . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c b c b c b c b c b b b c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b 6 . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c b c b c b c b b b 6 6 b c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c b 6 . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c b b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c b c b c b b b 6 6 6 9 9 6 c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c b 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b c b c b 6 6 6 9 9 9 1 1 9 6 b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c b 6 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b b 6 6 . . . . . . 6 . . . . . . . . . . . . . . . . . 6 6 c b c b 6 9 9 9 1 1 1 9 9 6 c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c c c c c c c b b 6 6 6 . . 6 b 6 . . . . . . . . . . . . . . . . . . 6 6 b 6 9 1 1 1 9 9 9 6 6 c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c b b 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c c b b b 6 6 b b 6 . . . . . . . . . . . . . . . . . . . . 6 9 1 9 9 9 6 6 6 d d c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c b 6 . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c c c c b c b b b b 6 . . . . . . . . . . . . . . . . . . . . 6 6 9 6 6 6 d d d d d c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c b 6 6 . . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c c c c c c b c b c b c b 6 . . . . . . . . . . . . . . . . . . . . 6 c 6 d d d b d b d b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . . 6 c c c c c c c c c c c c b c b c b c b b 6 . . . . . . . . . . . . . . . . . . . . 6 c d b d b d b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c c c c b c b c b b b c b 6 . . . . . . . . . . . . . . . . . . . . 6 c b d b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c b b 6 6 . . . . . . . . . . . . . . . . . . . . 6 6 c c c c c c b c b c b b 6 6 c b 6 . . . . . . . . . . . . . . . . . . . . 6 c d b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c b b 6 6 6 6 . . . . . . . . . . . . . . . . . . 6 6 c c c b c b c b 6 6 9 9 6 b 6 . . . . . . . . . . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c b b b b 6 6 6 6 . . . . . . . . . . . . . . . . 6 c b c b c b 6 9 9 1 1 9 6 6 . . . . . . . . . . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c b b b b 6 6 6 . . . . . . . . . . . . . . 6 6 b c b 6 9 1 1 9 9 6 b 6 . . . . . . . 1 . . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 6 6 . . . . . . . . . . . . . 6 6 6 9 1 9 9 6 6 c b 6 . . . . . . . c 1 . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 6 9 6 6 d d c b 6 . . . . . . . c 1 . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c 6 d d b d c b 6 . . . . . . . c 1 . . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c d d b d b c b 6 . . . . . . . . c 1 . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c d b d b b c b 6 . . . . 1 . . . c 1 . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c b d b b b c b 6 . . . . c 1 . . c 1 . . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c d b b b b c b 6 . . . . c 1 . . . c 1 . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . c 1 . . . c 1 . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c b b b c c c c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . c 1 . . c 1 . . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c b b b b b b b b c c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . c 1 . . . c 1 . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c b b b b b b b b b b b b c c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . c 1 . . . c 1 . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c c c c b b b b b b b b b b b b b b b b c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . . c 1 . . c 1 . . . . . . . . 6 c b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c c c c b b b b b b b b b b b b b b 1 1 1 b b c c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . . c 1 . . c 1 1 1 1 1 1 1 1 1 1 1 b 3 3 b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c c c c b b b b b b b b b b b b b b b b 1 1 9 9 1 b b c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . . c 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 1 3 3 b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
c c b b b b b b b b b b b b b b b b b b b 1 1 5 5 9 1 b c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . . . . 1 1 1 1 1 1 1 1 1 1 1 9 9 c c c c 9 1 b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b 1 1 5 5 5 9 1 c b b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 6 . . 1 1 1 9 9 9 9 9 9 9 1 1 9 9 c c c c c c c 9 1 1 1 1 b b b c c b b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b 1 1 5 5 5 5 9 1 1 b b 6 . . . . . . . . . . . . . . 6 c b b b b b c b 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 c c 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 b 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b 1 1 5 5 5 5 5 9 9 1 1 6 . . . . . . . . . . . . . . 6 c b b b b 1 1 1 9 9 9 9 9 9 5 5 5 5 5 5 9 c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b 1 1 5 5 5 5 5 5 9 9 1 1 1 . . . . . . . . . . . . 6 c b b 1 1 9 9 9 5 5 5 5 5 5 5 5 5 5 5 9 c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b 1 1 5 5 5 5 5 5 5 5 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 1 1 1 . . . . . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b 1 1 5 5 5 5 5 5 5 5 5 5 5 9 b b 9 9 9 9 9 9 9 9 9 b b 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 1 1 1 1 1 1 . . . . . . . . . . . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 9 9 9 1 1 9 9 9 9 1 1 1 1 1 1 1 1 1 1 . . . . . . 6 c c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b b 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 c 6 6 6 6 6 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 9 9 9 1 1 6 6 5 5 5 5 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 c b b b b b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b 1 b b 1 b b b b b b 1 1 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 9 9 9 9 1 1 9 9 9 9 9 9 9 9 1 1 1 1 1 b b b b b b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b 1 b b 1 1 1 1 1 1 1 1 1 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 1 1 1 1 1 9 9 9 9 1 1 1 1 1 1 b b b b b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b 1 1 1 1 9 9 9 9 9 9 1 1 b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 1 1 1 1 1 1 b 9 9 9 9 9 1 1 1 1 b c c b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b 1 b b 1 1 1 9 9 5 5 5 5 5 9 9 1 1 1 1 1 1 b b b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b 9 9 9 5 5 5 5 5 5 5 5 5 9 1 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 1 1 1 b 1 1 1 1 1 1 9 9 9 9 1 1 1 b b 6 . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b 1 b b 1 b 1 1 1 9 5 5 5 b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 9 b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b 9 9 9 5 5 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 1 b 6 . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b 1 1 1 1 9 b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 b 1 1 b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b 9 9 9 9 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 b 6 . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b 1 b b 1 1 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 b b 9 9 9 1 1 1 1 b b b b 5 5 5 5 5 5 9 c c c 5 5 5 5 5 5 5 5 5 5 5 b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 b 9 9 9 9 9 9 c c c c c c c c c 9 9 9 1 b 6 . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 b 5 5 5 5 5 9 9 9 9 1 1 1 1 b b 5 5 5 9 c c c 5 5 5 5 9 c c 5 5 5 5 5 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 1 c c c c c c c b b b b b b b b c c 9 1 b b b 6 . . . . . . . . . . . . 
b b b b b b b b b b b b b c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 9 9 9 b 5 5 5 5 5 5 5 9 9 9 9 9 9 1 1 5 5 9 c c c c 5 5 5 9 c c c c c 5 5 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 c c c c c c b b b b b b b b b c c c c c 8 c 9 1 b b b b b 6 . . . . . . . . . . . 
b b b b b b b b b b b c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 1 1 1 1 1 1 1 1 b 9 9 9 9 9 9 9 9 9 9 9 9 9 1 5 5 5 5 9 c c c c 5 5 9 c c c c c c c c 5 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 c c c c c c b b b b b b b b b b b b b c c c c 8 8 8 c 9 1 c c b b b b b 6 6 6 6 6 6 6 6 6 6 6 
b b b b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c 5 5 9 b b c c 5 5 9 c c c c c c c c 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 c c c c c c b b b b b b b b b b b b b b b b b c c c c 8 8 6 6 c c c c c c c b b b b b b b b b b b b b b b 
b b b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 1 1 1 9 9 9 9 9 9 9 1 1 1 1 b 9 9 9 9 9 9 9 9 9 1 1 1 5 c c c 5 5 9 b b b c 5 5 9 c c c b b c c c 5 5 9 1 b 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 9 9 c c c c c c b b b b b b b b b b b b b b b b b b b b c c c c c 8 8 6 6 c c b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 9 9 5 5 5 9 9 9 9 9 9 9 b 9 9 9 9 9 9 9 9 9 9 9 9 1 5 c c c 5 5 9 b b b c 5 5 9 c b b b b b c 9 9 9 9 1 b 9 9 9 9 9 9 9 9 9 9 c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c c c 8 8 6 6 c c b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 9 5 5 b b b 5 9 9 9 9 9 9 b 5 5 5 5 9 9 9 9 9 9 1 1 1 5 c c c c 5 9 b b b b c 5 9 b b b b b b c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c 8 8 6 6 c c b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 5 b b 5 5 5 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 5 5 5 c c c c c 5 5 9 b b b c 5 5 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 8 8 8 6 6 c c b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 b 5 5 5 5 5 5 6 8 8 8 8 8 c c c 5 5 5 5 5 5 5 5 c c c c c c c 8 8 5 5 9 8 8 8 8 5 5 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 8 8 8 8 8 6 6 6 c c b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 b 5 5 5 5 6 6 6 6 6 6 6 6 8 8 8 8 c c c c c c c c c 8 8 8 8 8 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 8 8 8 8 8 6 6 6 6 6 c c c b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 b 5 5 6 6 c c c c c c c c 6 6 6 6 8 8 8 8 8 8 8 8 8 6 6 6 6 6 c c c c c c c c 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 8 8 8 6 6 6 6 6 c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c 
b b b b b c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 1 9 5 5 6 c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c b b c c c c c c c c c 6 6 6 6 6 6 6 8 8 8 8 c c c c c c c c c c c c c c c c c c c 8 8 6 6 6 6 6 6 c c c c c c c c b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c 
d d d 1 1 1 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 9 5 6 d d d d d d d d d d d d d d d c c c c c c c c c c c c c c b b b b b b f f f f f f c c c c c c c c c c c c 6 6 6 6 8 8 8 c c c c c c c c c c c c c c c 8 6 6 c c c c c c d d d d d d d d d d d d d d d d d d 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d 
1 1 1 b b b 6 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 1 5 6 d d d d d d d d d d d d d c c c c c 6 6 6 6 6 6 6 6 6 6 6 b f f f f f c c c c c c c c c c c c c c c c c c c c c c 6 6 6 8 8 c c c c c c c c c c c c 8 6 c c d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d 
b b b d d d d 6 c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 c c c c c c c c c c c c c c c b b 6 b b b b b b b b b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 8 c c c c c c c c c c 8 6 c d d d d d d d d d d d d d d d d d d 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d 6 6 c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 c c c c c c c b b b b b b f f 6 b c c c c c c c b 6 c c c c c c c c c c c c c c c c c d d d d d d c c c c d d d d c c 6 8 c c c c c c c c 8 6 c d d d d d d d d d d d d d d d 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d 6 6 c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 b b b f f f f f f c c 6 b c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d c 6 8 8 c c c c c 8 6 c d d d d d d d d d d d d 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d 6 6 6 c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 9 9 3 3 c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d c 6 6 8 8 8 8 8 6 c d d d d d d d d d 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 6 3 3 c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b 6 6 6 6 6 c d d d d d d 1 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 1 1 1 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 c c c c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b c c c c 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d 1 1 1 1 1 1 1 f f f f f f f c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c 6 b c c c c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b c c b b b b f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d 1 1 1 1 1 1 1 b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b c c c c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b c b f f f f c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
1 b b b b b b b d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b b b b c c b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c b b b b b b b b b c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 
b d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b b b b b b b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b c b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 
d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 b b b b b b b b b b b 6 c c c c c c c c c c c c c c c c c c c c c c c b b b b b b c 6 8 8 c c c c c c c c c b b c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 
d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d c 6 b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c b b b b b b b b f f f c 6 6 8 8 8 c c c c c c c c b b b c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 b b 
d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d 6 b d d d d b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b f f f f c c 3 6 6 c 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c 3 3 c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d 1 1 1 b d d 
d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d 6 b d d d d d d d b b b b b c c c c c c c c c c b b b b b b b b f f f f c c c c c c 3 6 6 c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c 3 3 c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d 1 1 1 b d d d 
d d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d 6 b b b b d d d d d d d b b c c c c c c c c c c b b b b f f f f c c c c c c c c c c c 6 6 c c c c c c c c c c c 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d 1 1 1 b d d d d 
6 d d d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d b b b d d d d b b d d d 1 1 1 1 b b b f f f f c c c c c c c c c c c c c c c c 6 6 c c c c c c c c c 6 4 4 4 4 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d 1 1 1 b d d d d d 
9 9 9 9 9 9 9 d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d b b b b b d 1 1 1 1 1 1 1 b b b c c c c c c c c c c c c c c c c c c c c 6 6 9 9 9 9 c c c c 6 4 4 4 4 4 9 c c c c c c c c a a c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d 1 1 1 b d d d d d d 
6 6 6 6 6 6 6 9 9 9 9 9 d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d 1 1 1 1 1 1 1 1 b b b d d d d d d c c c c c c c c c c c c c c c c c c 6 e e e e 9 9 9 9 9 6 d d d d 9 c c c c c c c c a a c c c c c c c c c c c c c c c c c c c c d d d d d d d d d 1 1 1 b d d d d d d d 
b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d 1 1 1 1 1 1 1 1 b b b b d d d d d d d d d d d d c c c c c c c c c c c c c c c 6 e e e e e e e e e 4 4 4 4 4 9 c c c c c c c c a a c c c c c c c c c c c c c c c c c c c c d d d d d d d 1 1 1 1 b d d d d d d d d 
b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d c c c c c c c c c d d d d d d d d d d d 1 1 1 1 1 1 1 1 b b b b d d d d d d d d d d d d d d d d d d d c c c c c c c c c c c c c 6 6 6 e e e e e e 4 4 4 4 4 4 9 9 9 9 c c c a a c c c c c c c c c c c c c c c c c c c c d d d d d d d 1 1 1 1 b d d d d d d d d d 
b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 d b b b d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c c c c c c c c c 6 6 6 e e e 4 4 4 4 4 e e e e e 9 9 9 a a c c c c c c c c c c c c c c c c c c c d d d d d d d 1 1 1 b b d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d 1 1 1 1 1 1 1 1 d b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c c c c c c c 6 4 4 4 4 4 4 4 e e e e e e e e 9 a c c c c c c c c c c c c c c d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 d b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c 6 4 4 4 4 4 4 4 4 9 6 6 6 e e e e 9 c c c c c c c c c d d d d d d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d c 9 9 9 9 9 9 9 9 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 4 4 4 4 4 4 4 4 9 d d d 6 6 6 6 9 d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d c c c c 6 6 6 6 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 4 4 4 4 4 4 4 4 4 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b d d d d c c c b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 4 4 4 4 4 4 4 4 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 c c c c c c c c 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 e e e e e e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 e e e e 9 e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d 
b b b b b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d 6 e e e e 9 e e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b b d d d d d d d d d d d d d d d d d d d d 
b b b b d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d 6 e e e e 9 e e e e 9 d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d 
d d d d c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 d d d d d d d d d d d d d d d d d 6 e e e 9 6 e e e 9 d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 d d d d d d d d d d d d d 6 e e e 9 6 e e e 9 d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 9 9 9 9 9 d d d d d d d d 6 e e e 9 c 6 e e e 9 d d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 9 9 9 c c c c 6 e e 9 6 e e e e 9 d d d d d d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 9 9 6 e e e e 9 c c c c c c c c c c d d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c 6 6 6 6 6 6 6 6 9 9 c c c c c c c c d d d d d d d d d d d d 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c 6 6 6 6 6 9 9 9 9 c c c d d d d d d d d d d d 1 1 1 1 1 b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c 6 6 6 6 6 9 d d d d d d d d d d d 1 1 1 1 b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`)
        pause(200)
    }
    pause(500)
    if (gameState == 2) {
        enemy1 = sprites.create(enemyList[Math.randomRange(0, 2)], SpriteKind.Enemy)
        enemy1.setPosition(Math.randomRange(1, 160), 0)
        enemy1.setVelocity(0, Math.randomRange(30, 70))
        enemy1.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
