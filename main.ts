namespace SpriteKind {
    export const Bus = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = true
    facingRight = false
    facingLeft = false
    facingDown = false
    sptMalachi.setImage(imgScootUp)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facingLeft = true
    facingRight = false
    facingUp = false
    facingDown = false
    sptMalachi.setImage(imgScootLeft)
})
info.onCountdownEnd(function () {
	
})
// Player Wins!
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bus, function (sprite, otherSprite) {
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facingRight = true
    facingLeft = false
    facingUp = false
    facingDown = false
    sptMalachi.setImage(imgScootRight)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    facingDown = true
    facingRight = false
    facingLeft = false
    facingUp = false
    sptMalachi.setImage(imgScootDown)
})
// Player-Enemy Bounce-Back Penalty
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    currentXvelocity = sprite.vx
    currentYvelocity = sprite.vy
    controller.moveSprite(sprite, 0, 0)
    // Apply velocity to push the player back
    sprite.setVelocity((0 - currentXvelocity) / 2, 0 - currentYvelocity)
    // Optional: brief pause or separation logic to prevent getting stuck
    pause(500)
    sprite.setVelocity(0, 0)
    controller.moveSprite(sprite, 100, 100)
})
let currentYvelocity = 0
let currentXvelocity = 0
let facingDown = false
let facingLeft = false
let facingUp = false
let sptMalachi: Sprite = null
let imgScootRight: Image = null
let imgScootLeft: Image = null
let imgScootDown: Image = null
let imgScootUp: Image = null
let facingRight = false
// Player
facingRight = true
imgScootUp = assets.image`MalachiUp`
imgScootDown = assets.image`MalachiDown`
imgScootLeft = assets.image`MalachiLeft`
imgScootRight = assets.image`MalachiRight`
let imgIdleRight = assets.image`MalachiIdleRight`
let imgIdleLeft = assets.image`MalachiIdleLeft`
let imgIdleUp = assets.image`MalachiIdleUp`
let imgIdleDown = assets.image`MalachiIdleDown`
tiles.setCurrentTilemap(tilemap`level1`)
sptMalachi = sprites.create(assets.image`MalachiRight`, SpriteKind.Player)
// Bus
let sptBus = sprites.create(assets.image`Bus`, SpriteKind.Bus)
// Enemies
let sptDog = sprites.create(assets.image`DogLeft`, SpriteKind.Enemy)
animation.runImageAnimation(
sptDog,
assets.animation`aniDogLeft`,
100,
true
)
controller.moveSprite(sptMalachi)
scene.cameraFollowSprite(sptMalachi)
// Place sprites
tiles.placeOnTile(sptMalachi, tiles.getTileLocation(1, 14))
tiles.placeOnTile(sptDog, tiles.getTileLocation(12, 14))
tiles.placeOnTile(sptBus, tiles.getTileLocation(17, 0))
info.startCountdown(20)
// Continuous check for idle state
game.onUpdate(function () {
    // Check if the sprite has completely stopped moving
    if (sptMalachi.vx == 0 && sptMalachi.vy == 0) {
        // Check if it was last facing right
        if (facingRight) {
            sptMalachi.setImage(imgIdleRight)
        } else if (facingUp) {
            sptMalachi.setImage(imgIdleUp)
        } else if (facingDown) {
            sptMalachi.setImage(imgIdleDown)
        } else {
            sptMalachi.setImage(imgIdleLeft)
        }
    }
})
