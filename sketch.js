var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,180,20);
    surface2 = createSprite(290,580,180,20);
    surface3 = createSprite(480,580,180,20);
    surface4 = createSprite(670,580,180,20);

    //create box sprite and give velocity
    box = createSprite(400,300,40,40)
    box.velocityY = 4;
    box.velocityX = 4;

}

function draw() {
    background(rgb(8, 0, 1));
    
    surface1.shapeColor = rgb(242, 56, 81);
    surface2.shapeColor = rgb(120, 196, 61);
    surface3.shapeColor = rgb(235, 136, 235);
    surface4.shapeColor = rgb(7, 122, 133);

    box.shapeColor = "white"
    //create edgeSprite
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);
    createEdgeSprites();    
    //box.bounceOff(topEdge);
    //box.bounceOff(leftEdge);


    //add condition to check if box touching surface and make it box
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
       box.shapeColor = rgb(7, 122, 133);
      // music.play();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = rgb(235, 136, 235);
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = rgb(120, 196, 61);
        box.velocity = 0;
        music.stop();
    }
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = rgb(242, 56, 81);
        music.play();
    }
    drawSprites();
}
