class LAUNCHER{
 constructor(body1,point2){
 var op={
  bodyA:body1,
  pointB:point2   
 }   
 this.constraint = Matter.Constraint.create(op);
 this.pointB = point2;
 World.add(world, this.constraint);
}
 fly(){
   this.constraint.bodyA = null;   
 }

 display(){
   if(this.constraint.bodyA){  
 var posA = this.constraint.bodyA.position; 
 var posB = this.pointB;
 
 line(posA.x,posA.y,posB.x,posB.y);

   }
 }
}