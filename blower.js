class Blower
{
  constructor(x, y, w,h) 
  {
    var options = {
     isStatic:true
    };
    
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    
    push();
    rectMode(CENTER);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }
}
