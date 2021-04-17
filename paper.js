class Paper {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction':0,
            'density': 1.2,
            
 
        }
        
        this.r = r
        this.body = Bodies.circle(x,y, r, options)
         
        this.image = loadImage("paper.png")
 
        World.add(world, this.body);
    }
    display() {
        var paperpos = this.body.position;
        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        fill(255);
        imageMode(CENTER);
        
        ellipse(0, 0, this.r, this.r);
        image(this.image,0,0,3*this.r,3*this.r)
        pop()
    }
} 