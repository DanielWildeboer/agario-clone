class player extends model {
    dx;
    dy;

    constructor(name){

        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);

        super(40, x, y)
        this.name = name;

        //TODO: set player radius and determine random dx, dy
        
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getDx(){
        return this.dx;
    }
    setDx(dx){
        this.dx = dx;
    }

    getDy(){
        return this.dy;
    }
    setDy(dy){
        this.dy = dy;
    }
}