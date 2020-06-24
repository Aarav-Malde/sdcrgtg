class Box {
  constructor(x, y,width,height) {
    var options = {
      'density':0.1,
      'friction': 0.1,
      'restitution':0.5
    };
    this.body = Bodies.rectangle(x, y, width,height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  };

display(){
     push();
     
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     fill("yellow")
     rect(this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  };