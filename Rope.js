class Rope {
 
    constructor(BodyA,BodyB){
        var Options = {
            bodyA : BodyA,
            bodyB : BodyB,
            stiffness : 0.5,
            length : 15

        }

          this.link = Constraint.create(Options);

          World.add(world,this.link);

    }

    display(){
      var PointA = this.link.bodyA.position;
      var PointB = this.link.bodyB.position;
      strokeWeight(5);
      
      line(PointA.x,PointA.y,PointB.x,PointB.y);
    }


}