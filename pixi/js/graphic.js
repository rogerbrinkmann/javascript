class Circle extends PIXI.Graphics {
    constructor(x, y, r, color) {
        super();
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.draw();
    }

    update(delta) {

    }

    draw() {
        this.moveTo(0,0);
        this.beginFill(this.color);
        this.drawCircle(this.x, this.y, this.r);
        this.endFill();
    }

}


let app = new App();
let x = app.view.width / 2;
let y = app.view.height / 2;

app.loader.load(() => {
    let circle = new Circle(x, y, 100, 0xff0000)
    app.stage.addChild(circle);
}
)

