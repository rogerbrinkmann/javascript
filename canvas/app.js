class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.targetX = 200;
        this.targetY = 200;
        this.deltaT = 0;
        this.prev = 0;
        this.setCanvasSize();
        window.onresize = this.setCanvasSize;
        window.onmousemove = (event) => {
            this.targetX = event.x;
            this.targetY = event.y;
        }
        this.gameObjects = [];
        this.animate();
    }

    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
    }

    update() {
        this.gameObjects.forEach((gameObject) => {
            //gameObject.setTarget(this.targetX, this.targetY);
            gameObject.setRandomDirection();
            gameObject.update(this.canvas);
        })
    }

    draw() {
        this.gameObjects.forEach((gameObject) => {
            gameObject.draw(this.context);
        })
    }

    animate(progress) {
        this.deltaT = progress - this.prev;
        this.prev = progress
        this.context.fillStyle = "#FFFFFF";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.update();
        this.draw();
        window.requestAnimationFrame(this.animate.bind(this));
    }
}


class Circle {
    constructor(x, y, r, v) {
        this.x = x;
        this.y = y;
        this.vx = 1;
        this.vy = 1;
        this.r = r;
        this.v = v;
    }

    update(canvas) {
        this.move();

        if (this.x + this.r > canvas.width) {
            this.x = 2 * canvas.width - this.x - this.r;
            this.vx *= -1;
        }
        if (this.y + this.r > canvas.height) {
            this.y = 2 * canvas.height - this.y - this.r;
            this.vy *= -1;
        }
        if (this.x < this.r) {
            this.x = 2 * this.r - this.x;
            this.vx *= -1;
        }
        if (this.y < this.r) {
            this.y = 2 * this.r - this.y;
            this.vy *= -1;
        }
    }

    setRandomDirection() {
        let choice = Math.random() * 2;
        let angle = 0;
        if (choice > 1) {
            angle = 0.3;
        }
        else {
            angle = -0.3;
        }
        this.vx = this.vx * Math.cos(angle) - this.vy * Math.sin(angle);
        this.vy = this.vx * Math.sin(angle) + this.vy * Math.cos(angle);

        this.normalizeVelocity();
    }

    setTarget(x, y) {
        this.vx = x - this.x;
        this.vy = y - this.y;
        this.normalizeVelocity();
    }

    normalizeVelocity() {
        let g = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
        this.vx /= g / this.v;
        this.vy /= g / this.v;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw(context) {
        context.strokeStyle = "#000000";
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.stroke();
    }
}

const game = new Game();

for (var i = 0; i < 100; i++) {
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    r = Math.random() * 10;
    v = Math.random() * 10;
    game.addGameObject(new Circle(x, y, r, v));
}
