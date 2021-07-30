var sprite
function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,30,30);
}

function draw() {
background("yellow");

if (keyIsDown(DOWN_ARROW)){
  background("red");
}

if (keyIsDown(RIGHT_ARROW)){
  background("blue");
}

if (keyIsDown(LEFT_ARROW)){
  background("green");
}

if (keyIsDown(UP_ARROW)){
  background("black");
}

drawSprites();


}




