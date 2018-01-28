function createColor() {
    var d, i, canvas, ctx, ballSize, positionX, positionY, balls, numberOfBalls;

    d = document;
    canvas = d.getElementById('blocks');
    ctx = canvas.getContext('2d');

    ballSize = 10;

    positionX = 40;
    positionY = 50;

    var Ball = function (x, y) {
        this.x = x;
        this.y = y;
        this.color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
            (Math.floor(Math.random() * 256)) + ',' +
            (Math.floor(Math.random() * 256)) + ')';


    };
    Ball.prototype.draw = function () {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, ballSize, 0, Math.PI * 2);
        ctx.fill();
    };

    numberOfBalls = 10;
    balls = new Array();

    for (i = 0; i < numberOfBalls; i++) {
        balls.push(new Ball(positionX + i * 25, positionY));
    }
    for (i = 0; i < numberOfBalls; i++) {
        balls[i].draw();
    }

}