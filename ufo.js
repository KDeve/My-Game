class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     this.image = loadImage("Images/UFO.png");
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(1);
      stroke ("black");
      fill(255);
     image(this.image,0, 0, this.width, this.height);
      pop();
      }else{
       World.remove(world,this.body)
       push();
       this.visibility=this.visibility-5
       pop();
      }
    }
  };
  