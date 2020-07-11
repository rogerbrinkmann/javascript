'use strict';

class Cat extends Sprite {
    constructor(x, y, texture) {
        super(x, y, texture)
    }

    update(delta) {
        this.rotation -= delta * 0.03;
    }
}

class Container extends PIXI.Container {
    constructor(x, y) {
        super();
    }

    update(delta) {
        this.children.forEach((child) => {
            child.update(delta);
        });
        this.rotation += delta * 0.01;
    }
}


let resources = [
    { name: "Cat", url: "images/cat.png" },
    { name: "Tri", url: "images/tri.png" }
];

let cat1;
let cat2;
let cat3;
let cat4;

let container = new Container();

let app = new App();
let loader = new Loader();
loader.add(resources);
loader.load((loader) => {
    let offset = 200;
    cat1 = new Cat(offset, offset, loader.resources.Cat.texture);
    cat2 = new Cat(offset, -offset, loader.resources.Cat.texture);
    cat3 = new Cat(-offset, offset, loader.resources.Cat.texture);
    cat4 = new Cat(-offset, -offset, loader.resources.Cat.texture);

    container.addChild(cat1);
    container.addChild(cat2);
    container.addChild(cat3);
    container.addChild(cat4);
    container.position.set(app.view.width / 2, app.view.height / 2);
    app.stage.addChild(container);
});

