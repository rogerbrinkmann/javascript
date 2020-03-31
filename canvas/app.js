var c = document.getElementById("canvas");


resizeCanvas = () => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}

window.onresize = resizeCanvas;
window.onload = resizeCanvas;


var ctx = c.getContext("2d");
var circle;

class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;

    }

    draw = function () {
        ctx.width = "400px";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke.color = "#000000";
        ctx.stroke();
    }

    update = function () {
        this.x += 3;
        this.y += 3;
    }
}

init();
animate();

function init() {
    circle = new Circle(100, 100, 20);
}

function animate() {

    // clear canvas
    ctx.fillStyle = "rgba( 255, 255, 255, 1 )";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // redraw
    circle.draw();

    // update the object parameters
    circle.update();

    // return if desired
    window.requestAnimationFrame(animate);
}
