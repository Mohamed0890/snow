var bgImg,snowImg





function preload(){
bgImg=loadImage("snow1.jpg");
snowImg=loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);

}


function draw() {
  background(bgImg);  
  snowfall();
  drawSprites();
}
function snowfall(){
  if(frameCount%40===0){
    var snow=createSprite(Math.round(random(20,780)),-20);
    snow.addImage(snowImg);
    snow.scale=0.1
    snow.velocityY=2;
    snow.lifetime=200;
  }
}