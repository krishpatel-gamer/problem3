  
class Mango{
    constructor(x, y, r) {
      var options = {
    
            isStatic: true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
      }

      this.x = x;
      this.y = y;
      this.r = r;

      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body);
    }
    display() {
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);

      ellipseMode(CENTER);

      stroke("yellow");
      strokeWeight(9);
      fill("red");
      ellipse(0,0,this.r,this.r);
      pop();
    }};