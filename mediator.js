class mediator {
    currentPlayer
    iRenderer;
    #food;
    #inputProcessor;
    players;
    start;

    constructor(){
        this.socket = io.connect('http://localhost:3500');
        this.players = [];
        this.#food = [];
        this.currentPlayer = new player("Daniel");
        this.players.push(this.currentPlayer);

        this.#inputProcessor = new inputProcessor();

        this.mouseCallBack = this.mouseCallBack.bind(this);
        this.gameLoop = this.gameLoop.bind(this, this.iRenderer);

        this.canvas = document.getElementById("myCanvas");

        this.#inputProcessor.setup(this.canvas, this);
        this.iRenderer = new renderer(this.canvas);

        window.requestAnimationFrame(this.gameLoop);
    }

    gameLoop(){
        
        var timestamp = Date.now();
        if(this.start === undefined){ 
            this.start = timestamp;
            this.tick = 0;
        }
        const elapsed = timestamp - this.start;

        if(elapsed/250 >= this.tick){
            if(this.#food.length < 150){
                for(var i = this.#food.length; i < 150; i++){
                    this.#food[i] = new food();
                }
            }
            this.eatOrBeEaten();
            this.tick++;
        }      

        
        this.iRenderer.draw(this.currentPlayer, this.#food);
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
        this.currentPlayer.setDx(x - this.canvas.width/2);
        this.currentPlayer.setDy(y - this.canvas.height/2);
    }

    eatOrBeEaten(){
        var radius = this.currentPlayer.getRadius();
        var currentPlayerX = this.currentPlayer.getX();
        var currentPlayerY = this.currentPlayer.getY();

        for(var i = 0; i < this.#food.length; i++){
            if(this.#food[i].getY() > currentPlayerY - radius && this.#food[i].getY() < currentPlayerY + radius){
                if(this.#food[i].getX() > currentPlayerX - radius && this.#food[i].getX() < currentPlayerX + radius){
                    this.currentPlayer.setRadius(this.currentPlayer.getRadius() + 1);
                    this.#food.splice(i, 1);
                }
            }
        }
        if(this.players.length > 1){
        
            for(var i = 0; i < this.players.length; i++){
                if(this.players[i].getY() == this.currentPlayer.getY() && this.players[i].getX() == this.currentPlayer.getX()){
                    if(this.players[i].getRadius() < this.currentPlayer.getRadius()){
                        this.currentPlayer.setRadius(this.currentPlayer.getRadius() + (this.players[i].getRadius() / 2));
                        this.players[i].pop();
                    } else {
                        for(var o = 0; o < this.players.length; o++)
                        {
                            if(this.players[i] === this.currentPlayer){
                                this.players[i].pop();
                            }
                        }
                    }
                }
            }
        }
    }
}

var index = new mediator();