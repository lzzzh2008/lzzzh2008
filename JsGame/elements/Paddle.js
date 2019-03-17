var Paddle = function(game) {
    var o = game.imageByName('paddle')

    // var o = {
    //     image: image,
    //     x: 100,
    //     y: 250,
    //     // width: 163,
    //     // height: 23,
    //     speed: 5,
    // }
    o.x = 100
    o.y = 250
    o.speed = 15
    var paddle = o
    o.move = function (x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.w) {
            x = 400 - o.w
        }
        o.x = x
    }
    o.moveLeft = function() {
        o.move(paddle.x - paddle.speed)
    }
    o.moveRight = function() {
        o.move(paddle.x + paddle.speed)
    }
    o.collide = function(ball) {
        if (ball.y + ball.image.height > o.y) {
            if ((ball.x > o.x && ball.x < o.x + o.w)||(ball.x < o.x && ball.x + ball.image.width > o.x)) {
                log('bingo')
                return true
            }
        }
        return false
    }
    return o
}
