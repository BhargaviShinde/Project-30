class Box {
  constructor(x, y, width, height,color){
    
    //this.x = x;
    //this.y = y;
    this.width = width;
    this.height = height;
    this.visiblity = 255;
    this.body = Bodies.rectangle(x,y,width,height,{isStatic: false, friction:10, density: 2.5});
    this.color = color;
    World.add(world,this.body);

  }

  display(){
    if(this.body.speed < 3){
    var pos = this.body.position;
    var color = this.color;
    rectMode(CENTER);
    fill(color);
    rect(pos.x,pos.y,this.width,this.height);
    }
    else{
      World.remove(world,this.body);
      push();
      this.visiblity = this.visiblity - 5;
      tint(255,this.visiblity);
      pop();
    }
  }

}
