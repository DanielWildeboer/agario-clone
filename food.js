class food extends model{
    constructor(radius){
        //TODO: make posY, posX random
        super(10, Math.floor(Math.random() * 4000), Math.floor(Math.random() * 4000));
    }
}