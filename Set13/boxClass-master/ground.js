class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(200,390,400,30,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(200,390,400,30);
    }
}