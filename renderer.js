class renderer {
    #canvas
    #ctx

    constructor(canvas){
        this.#canvas = canvas; 
        this.#ctx = canvas.getContext("2d");
        this.#ctx.canvas.width = window.innerWidth;
        this.#ctx.canvas.height = window.innerHeight;
    }

    draw = function (player){
        

        this.#ctx.beginPath();
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#ctx.arc(player.getPosX(), player.getPosY(), 40, 0, 4 * Math.PI);
        this.#ctx.fillStyle = "white";
        //ctx.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16);
        this.#ctx.fill();
        this.#ctx.stroke();
    }
    zoom(){

    }
    update(){
        
    }
}