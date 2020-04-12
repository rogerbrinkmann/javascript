class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.setCanvasSize();
        this.registerEvents();
        this.gameObjects = [];
        this.animate();
    }

    registerEvents() {
        window.onresize = this.setCanvasSize;
    }

    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
    }


    update() {
        // update all game obejcts
        this.gameObjects.forEach((gameObject) => {
            gameObject.translate(
                gameObject.vel * Math.cos(gameObject.dir),
                gameObject.vel * Math.sin(gameObject.dir)
            );
            if (this.right) { gameObject.rotate(.04); }
            if (this.left) { gameObject.rotate(-.04); }
            if (this.up) { gameObject.vel += .2; }
            if (this.down) { gameObject.vel -= .2; }
        })
    }

    draw() {
        // draw all game objects
        this.gameObjects.forEach((gameObject) => {
            gameObject.draw(this.context);
        })
    }

    animate(progress) {
        // clear the canvas by filling it white
        this.context.fillStyle = "#FFFFFF";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.update();
        this.draw();
        window.requestAnimationFrame(this.animate.bind(this));
    }
}

class GameObject {
    constructor(x, y, dir, vel, strokeColor) {
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.vel = vel;
        this.strokeColor = strokeColor;
    }

    rotate(rad) {
        this.dir += rad;
    }

    translate(x, y) {
        this.x += x;
        this.y += y;
    }
}

class Rectangle extends GameObject {
    constructor(x, y, width, height, dir, vel, strokeColor) {
        super(x, y, dir, vel, strokeColor);
        this.width = width;
        this.height = height;
    }

    draw(context) {
        context.translate(this.x, this.y);
        context.rotate(this.dir);
        context.strokeStyle = this.costrokeColor;
        context.beginPath();
        context.rect(0, 0, this.width, this.height);
        context.stroke();
        context.resetTransform();
        context.translate(0, 0);
    }
}


const game = new Game();
game.addGameObject(new Rectangle(100, 100, 20, 5, Math.PI / 2, 1, "#000000"));
