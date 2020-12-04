class stone{
    constructor(x,y,r)
{
    var options={
        isStatic:false,
        restution:0,
        friction:1,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("Plucking mangoes/stone.png")
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    
    World.add(world,this.body); 
}
display(){
    rectMode(CENTER)
    ellipse(this.x,this.y,this.r,this.r)
    imageMode(CENTER)
    image(this.image,this.x,this.y,50,50) 
    
}
}