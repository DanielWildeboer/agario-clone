class player extends model {
    #name

    constructor(name){
        super(40, 0, 0)
        this.name = name;

        //TODO: set player radius and determine random posX, posY
        
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
}