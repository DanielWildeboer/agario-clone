class mediator {
    players;
    iRenderer;
    #food;
    #inputProcessor;

    constructor(){
        this.players = new player("Daniel");
        this.#food = new food();

        var canvas = document.getElementById("myCanvas");

        this.#inputProcessor = new inputProcessor(canvas, this);
        this.iRenderer = new renderer(canvas);

        this.setup();
        console.log("mediator constructor done!");
    }

    setup(){
        
    }
    getPlayers(){
        return this.players
    }
    setPlayers(players){
        this.players = players;
    }
    static mouseCallBack(x, y){
        this.iRenderer.draw(this.players);
    }
    getFood(){
        return food;
    }
    setFood(food){
        this.food;
    }

    eat(model1, model2){
        //TODO: logic to eat others.
    }
}

var index = new mediator();