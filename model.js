class model {
    #radius;
    #posX;
    #posY;

    constructor(radius, posX, posY){
        this.radius = radius;
        this.posX = posX;
        this.posY = posY;
    }

    getRadius(){
        return radius;
    }
    setRadius(radius){
        this.radius = radius;
    }
    getPosY(){
        return posY;
    }
    setPosY(posY){
        this.posY = posY;
    }
    getPosX(){
        return posX;
    }
    setPosX(posX){
        this.posX = posX;
    }
}
