class paper{
    constructor(x,y,radius){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            }
        this.body=Bodies.circle(x,y,radius,option)
        this.radius = radius
        World.add(world , this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0,this.radius);
        pop();
    }
}