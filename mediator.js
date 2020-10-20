class mediator {
    currentPlayer
    iRenderer;
    #food;
    #inputProcessor;

    constructor(){
        this.currentPlayer = new player("Daniel");
        console.log(this.currentPlayer);
        this.#food = new food();
        this.#inputProcessor = new inputProcessor();

        this.mouseCallBack = this.mouseCallBack.bind(this);
        this.gameLoop = this.gameLoop.bind(this, this.iRenderer);

        var canvas = document.getElementById("myCanvas");
        this.#inputProcessor.setup(canvas, this);
        this.iRenderer = new renderer(canvas, this);

        window.requestAnimationFrame(this.gameLoop);
    }

    gameLoop(){
        
        this.iRenderer.draw(this.currentPlayer);
        
        window.requestAnimationFrame(this.gameLoop);
    }


    getPlayers(){
        return this.players
    }
    setPlayers(players){
        this.players = players;
    }

    getFood(){
        return food;
    }
    setFood(food){
        this.food;
    }

    mouseCallBack(x, y){
        this.currentPlayer.setDx(x);
        this.currentPlayer.setDy(y);
    }
    
    eat(model1, model2){
        //TODO: logic to eat others.
    }
}

var index = new mediator();