class Box {

    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options)
        this.image = loadImage("bin.png");
        World.add(world, this.body)
        this.width = width
        this.height = height
    }








    display() {
        
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
       image(this.image,0,0,120,110)
    }
}


