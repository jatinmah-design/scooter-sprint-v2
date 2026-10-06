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
// Countdown Ends!
info.onCountdownEnd(function () {
    blnCountdownEnded = true
    controller.moveSprite(sptMalachi, 0, 0)
    scene.centerCameraAt(sptBus.x, sptBus.y)
    scene.cameraFollowSprite(sptBus)
    sptBus.vx = 50
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
function ChangeDirection(mySprite: Sprite) {
    // Identify and set opposite direction
    if (mySprite.vx > 0) {
        // Enemy moving right, so change to left
        // Set velocity
        mySprite.vx = 0 - enemyPatrolSpeedFactor
        // Set animation
        animation.runImageAnimation(
            sptDog,
            assets.animation`aniDogLeft`,
            500,
            true
        )
    } else {
        // Enemy moving left, so change to right
        // Set velocity
        mySprite.vx = enemyPatrolSpeedFactor
        // Set animation
        animation.runImageAnimation(
            sptDog,
            assets.animation`aniDogRight`,
            500,
            true
        )
    }
}
function setRandomDirection(mySprite: Sprite) {
    // 0 represents Left, 1 represents Right
    if (Math.randomRange(0, 1) == 0) {
        dogfacingleft = true
        dogfacingright = false
        mySprite.vx = 0 - enemyPatrolSpeedFactor
    } else {
        dogfacingleft = false
        dogfacingright = true
        mySprite.vx = enemyPatrolSpeedFactor
    }
}
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
let sptEnemy: Sprite = null
let currentYvelocity = 0
let currentXvelocity = 0
let dogfacingright = false
let blnCountdownEnded = false
let facingDown = false
let facingLeft = false
let facingUp = false
let sptDog: Sprite = null
let enemyPatrolSpeedFactor = 0
let sptBus: Sprite = null
let sptMalachi: Sprite = null
let imgScootRight: Image = null
let imgScootLeft: Image = null
let imgScootDown: Image = null
let imgScootUp: Image = null
let facingRight = false
let dogfacingleft = false
dogfacingleft = true
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
sptBus = sprites.create(assets.image`Bus`, SpriteKind.Bus)

// Enemies
let enemyLeftLimit = 100
let enemyRightLimit = 310
let enemyRow = 14
enemyPatrolSpeedFactor = 10
sptDog = sprites.create(assets.image`DogLeft`, SpriteKind.Enemy)
setRandomDirection(sptDog)
ChangeDirection(sptDog)

// Movement and camera controls
controller.moveSprite(sptMalachi)
scene.cameraFollowSprite(sptMalachi)

// Place sprites
tiles.placeOnTile(sptMalachi, tiles.getTileLocation(1, 14))
tiles.placeOnTile(sptDog, tiles.getTileLocation(randint(enemyLeftLimit / 25, enemyRightLimit / 25), enemyRow))
tiles.placeOnTile(sptBus, tiles.getTileLocation(17, 0))

// Start countdown
info.startCountdown(25)

// Change timer UI colors using the default MakeCode Arcade palette indices
info.setBackgroundColor(1)  // Index 1: White
info.setBorderColor(15)     // Index 15: Black (creates a sharp, readable border)
info.setFontColor(3)        // Index 3: Pink (matches timer text)

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
    if (sptDog.x >= enemyRightLimit || sptDog.x <= enemyLeftLimit) {
        ChangeDirection(sptDog)
    }
    // if (sptDog.x >= enemyRightLimit) {
    // sptDog.vx = 0 - enemyPatrolSpeedFactor
    // } else if (sptDog.x <= enemyLeftLimit) {
    // sptDog.vx = enemyPatrolSpeedFactor
    // }
    // Player Loses!
    if (blnCountdownEnded && sptBus.x > 400) {
        game.gameOver(false)
    }
})
game.onUpdateInterval(5000, function () {
    sptEnemy = sprites.create(assets.image`DogLeft`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(sptEnemy, sprites.dungeon.darkGroundSouth)
    setRandomDirection(sptEnemy)
    ChangeDirection(sptEnemy)
})
