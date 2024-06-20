namespace SpriteKind {
    export const nuvem = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 4 4 4 4 4 4 4 4 . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 7 7 7 7 7 7 7 7 . . . . . 
        . . . 6 6 6 6 6 6 6 6 . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . a a a a a a a a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cat, 100, 0)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(sprite, effects.confetti, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.hearts, 200)
    info.changeScoreBy(5)
})
let vilao: Sprite = null
let nuvem: Sprite = null
let projectile: Sprite = null
let cat: Sprite = null
scene.setBackgroundColor(3)
cat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . e e . . . e e . . . . . . 
    . . e e e e . e e e e . . . . . 
    . . e e e e e e e e e . . . . . 
    . e e e 9 e e e 9 e e e . . . . 
    . e e e 6 e e e 6 e e e . . . . 
    . e e 3 e e f e e 3 e e . . . . 
    . . e e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
cat.setStayInScreen(true)
info.changeScoreBy(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    nuvem = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 . . . . . . . . . 
        . . . 1 1 1 1 1 1 9 . . . . . . 
        . . 1 1 1 1 9 9 1 1 . . . . . . 
        . 1 1 1 1 9 1 1 1 1 1 1 9 . . . 
        . 9 9 1 1 1 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nuvem)
    nuvem.setPosition(180, randint(10, 110))
    nuvem.setVelocity(-20, 0)
})
forever(function () {
    controller.moveSprite(cat)
})
game.onUpdateInterval(500, function () {
    vilao = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . 5 5 5 . . . . 
        . . . . . . . . . 5 5 5 . . . . 
        . . 5 . . . e . 5 5 5 5 . . . . 
        . . 5 5 . . . e 5 5 5 5 e . . . 
        . . . 5 5 5 5 5 5 5 e e . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . e 5 5 e . . . . . . . 
        . . . . . e . . e . . . . . . . 
        . . . . e e . e e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    vilao.setPosition(180, randint(10, 110))
    vilao.setVelocity(-50, 0)
})
