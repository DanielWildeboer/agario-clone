class inputProcessor {
 
    constructor(canvas){
        this.setup(canvas);
    }
    setup(canvas){
        canvas.addEventListener('mousemove', this.mouseMove);
    }
    
    mouseMove = function(e){
        this.posX = e.x;
        this.posY = e.y;
        mediator.mouseCallBack(e.x, e.y);
    }
}