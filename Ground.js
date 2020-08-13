class Ground {
    constructor(x,y,width,height){
        var ground_options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height, ground_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        var pos1 = this.body.position;
        rectMode(CENTER);
        fill(200,190,120);
        rect(pos1.x, pos1.y, this.width, this.height);
    }
}