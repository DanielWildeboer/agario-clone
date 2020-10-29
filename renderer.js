class renderer {
    #canvas
    #ctx
    #maxspeed;

    constructor(canvas, bigCanvas){
        this.#maxspeed = 2;
        this.valX = 0;
        this.valY = 0;
        this.fieldWidth = 4000;
        this.fieldHeight = 4000;
        this.#canvas = canvas; 
        this.#ctx = canvas.getContext("2d");
        this.#ctx.canvas.width = window.innerWidth;
        this.#ctx.canvas.height = window.innerHeight;
    }
 
    zoom(xp, yp){
        this.#ctx.setTransform();
        this.#ctx.translate(this.#ctx.canvas.width/2-xp, this.#ctx.canvas.height/2-yp);
    }

    draw(player, food){

        var xSpeed = player.getDx()
        var ySpeed = player.getDy()

        var dist = Math.sqrt(xSpeed * xSpeed + ySpeed * ySpeed),
        rad = Math.atan2(ySpeed, xSpeed),
        angle = rad/Math.PI * 180;

        this.velX = (xSpeed /dist) * this.#maxspeed;
        this.velY = (ySpeed /dist) * this.#maxspeed;
        
        if(dist > 20){
            if(this.xp < this.fieldWidth|| Math.sign(this.velX) == -1){
                if(this.xp > 0 || Math.sign(this.velX) == 1){
                    this.xp += this.velX
                }
            }
            if(this.yp < this.fieldWidth || Math.sign(this.velY) == -1){
                if(this.yp > 0 || Math.sign(this.velY) == 1){
                    this.yp += this.velY
                }
            }   
            //console.log("Y= " + this.yp + " " + player.getDy() +  " X= " + this.xp+ " " + player.getDx())
        }
        
        if(!isNaN(this.xp) || !isNaN(this.yp)){
            player.setY(Math.floor(this.yp));
            player.setX(Math.floor(this.xp));
            
            this.#ctx.beginPath();
            this.#ctx.clearRect(-500, -500, this.fieldWidth * 3, this.fieldHeight * 3);
            this.#ctx.strokeStyle = "white";
            this.#ctx.strokeRect(0, 0, this.fieldWidth, this.fieldHeight);
            this.#ctx.arc(this.xp , this.yp, player.getRadius(), 0, 4 * Math.PI)
            this.#ctx.fillStyle = "yellow";
            this.#ctx.fill();
            this.#ctx.stroke();
            this.zoom(this.xp, this.yp);
            
        } else {
            this.xp = 0;
            this.yp = 0;
        }

        for(var i = 0; i < food.length; i++){
            this.#ctx.beginPath();
            this.#ctx.arc(food[i].getX(), food[i].getY(), 10, 0, 4 * Math.PI);
            this.#ctx.fillStyle = "green";
            this.#ctx.fill();
            this.#ctx.stroke();
        }
        //console.log(player.getX() + " AND " + player.getY() + " Mouse pos")
        //console.log(player.getDx() + " AND " + player.getDy() + " Current player pos")

        
        //this.#ctx.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16);
       
    }
}