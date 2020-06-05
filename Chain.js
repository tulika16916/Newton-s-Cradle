class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetX=offsetX
       
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.04,
            length: 100
        }
       // this.bodyB=poB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly (){
     this.chain.bodyA=null
    }
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
  }

}