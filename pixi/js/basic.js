'use strict';

class Cat extends Sprite {
    constructor(x, y, texture) {
        super(x, y, texture)
    }

    update(delta) {
        this.rotation -= delta * 0.03;
    }
}

let resources = [
    { name: "Cat", url: "images/cat.png" },
    { name: "Tri", url: "images/tri.png" }
];


let app = new App();
let loader = new Loader();
loader.add(resources);
loader.load((loader) => {
    let cat = new Cat(app.view.width / 2, app.view.height / 2, loader.resources.Cat.texture);
    app.stage.addChild(cat);
});

