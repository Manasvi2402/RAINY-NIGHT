class Man{
   constructor(x,y,radius){
    var opt = {
        isStatic:true
    }
    this.radius = radius;
    this.image1 = loadImage("Walking Frame/walking_1.png");
    //this.image2 = loadImage("Walking Frame/walking_2.png");
    //this.image3 = loadImage("Walking Frame/walking_3.png");
    //this.image4 = loadImage("Walking Frame/walking_4.png");
   // this.image5 = loadImage("Walking Frame/walking_5.png");
    //this.image6 = loadImage("Walking Frame/walking_6.png");
    //this.image7 = loadImage("Walking Frame/walking_7.png");
   // this.image8 = loadImage("Walking Frame/walking_8.png");

    this.body = Bodies.circle(x,y,radius,opt);

    World.add(world,this.body);
    

    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image1,pos.x,pos.y+200);
    }
}