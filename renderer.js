class renderer {
    #canvas
    #ctx

    constructor(canvas){
        this.#canvas = canvas; 
        this.#ctx = canvas.getContext("2d");
        this.#ctx.canvas.width = window.innerWidth;
        this.#ctx.canvas.height = window.innerHeight;
    }

    zoom(){

    }

    draw(player){
        console.log(player.getDx() + " - " + player.getX());

        this.xp += (player.getDx()  - player.getX()) / 20;
        this.yp += (player.getDy() - player.getY()) / 20;

        
        if(!isNaN(this.xp) || !isNaN(this.yp)){
            player.setY(this.yp);
            player.setX(this.xp);
            this.#ctx.beginPath();
            this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

            this.#ctx.arc(this.xp , this.yp, 40, 0, 4 * Math.PI)
            this.#ctx.fillStyle = "white";
            this.#ctx.fill();
            this.#ctx.stroke();
        } else {
            this.xp = 0;
            this.yp = 0;
        }
        

        //console.log(player.getX() + " AND " + player.getY() + " Mouse pos")
        //console.log(player.getDx() + " AND " + player.getDy() + " Current player pos")

        
        //this.#ctx.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16);
       
    }
}