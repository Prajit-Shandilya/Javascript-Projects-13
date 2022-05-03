var bullet, wall;
var thickness;

function setup() {
    createCanvas(1600, 400);


    wall = createSprite(800, 200, thickness, 400);

    bullet = createSprite(15, 200, 30, 20);




    speed = random(223, 421);
    thickness = random(22, 83);
    weight = random(60, 410);
}

function draw() {
    background(0);

    bullet.velocityX = speed;



    if (wall.x - bullet.x < (bullet.width - wall.width) / 2) {
        bullet.velocityX = 0;
        var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;
        if (damage < 10) {
            wall.shapeColor = color(225, 0, 0);
        } else if (damage > 10) {
            wall.shapeColor = color(0, 225, 0);
        }

    }



    drawSprites();
}