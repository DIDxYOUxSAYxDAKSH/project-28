class PAPER{
constructor(x,y,radius){
 var op={
    'restitution':0.3,
    'friction':0.5,
    'density':1.2,
}
 this.body = Matter.Bodies.circle(x,y,radius,op);
 this.radius = radius;
 this.img1 = loadImage("paper.png");
 World.add(world,this.body); 
 

}
display(){
 var posX = this.body.position.x;
 var posY = this.body.position.y;
 push();
 imageMode(RADIUS);
 image(this.img1,posX,posY,this.radius,this.radius);
 pop();
}




}