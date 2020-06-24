class Shooter {
    constructor(x, y,width,height) {
      var options = {
        'density':1.0,
        'friction': 0.1,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
  
  display(){
       push();
       fill("red")
       rect(this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
    };