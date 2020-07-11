
class Sprite extends PIXI.Sprite {
    constructor(x, y, texture) {
        super(texture);
        this.position.set(x, y);
        this.anchor.set(0.5, 0.5);
    }

    update(delta) {
    }
}

class App extends PIXI.Application {
    constructor() {
        super({
            width: window.innerWidth,
            height: window.innerHeight,
            antialias: true,
            transparent: false,
            resolution: 1,
            autoResize: true,
            backgroundColor: 0x061639
        })
        window.onresize = () => {
            this.renderer.resize(window.innerWidth, window.innerHeight);
        }
        document.body.appendChild(this.view);
        this.ticker.add(delta => this.gameLoop(delta));
    }

    gameLoop(delta) {
        this.stage.children.forEach((child) => {
            child.update(delta);
        })
    }
}

class Loader extends PIXI.Loader {
    constructor() {
        super();
        this.onStart.add(this.startHandler);
        this.onProgress.add(this.progressHandler);
        this.onComplete.add(this.completeHandler);
        this.onLoad.add(this.loadHandler);
        this.onError.add(this.errorHandler);
    }

    addSprite(sprite){
        this.add(sprite.url);
    }

    startHandler(loader) {
        console.log("Start loading, progress: " + loader.progress + "%");
    }

    progressHandler(loader, resource) {
        console.log("Loading " + resource.name + ", progress: " + loader.progress + "%");
    }

    completeHandler(loader) {
        console.log("Loading complete, progress: " + loader.progress + "%");
    }

    loadHandler(loader, resource) {
        console.log(resource.name + " loaded, progress: " + loader.progress + "%");
    }

    errorHandler(error, loader, resource) {
        console.log("Error occured while loading resource " + resource.name + ": " + error.message);
    }
}
