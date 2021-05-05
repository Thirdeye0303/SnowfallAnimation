class Snow{
    constructor(x,y,radius){
    var options ={
        friction: 0.5,
        restitution: 0.5,
        density: 300,

    }
    this.body = Bodies.circle(x,y,radius,options);
    this.bodyImg = loadImage("snow5.webp");
    World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.bodyImg,0,0,50,50);
    pop();
}


}
