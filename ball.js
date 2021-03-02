class Ball  {
    constructor(x, y, radius) {
        
        var options = {
        density: 1.2
        
            
        }
        this.body = Matter.Bodies.circle(x, y, radius, options)
        this.image = loadImage("paper.png");
        World.add(world, this.body)
        this.radius=2*radius

    }

    display() {
    
       
        var angle=this.body.angle
        push()
        rotate(angle)
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
       image(this.image,0,0,30,30)
       pop()
       
    }
}
