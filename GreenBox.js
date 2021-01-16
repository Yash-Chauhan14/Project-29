class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(4,244,29);
        super.display();
    }
}