class Launcher{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.007,
            length: 10
        }
        this.pointB = bodyB
        this.bodyA= bodyA
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA=body;
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
           
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
    }
    
}