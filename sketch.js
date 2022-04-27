var back, basketImg, basket;

function preload(){
  back= loadImage("Images/Background.png");
  basketImg= loadImage("Images/Basket 2.png");

}


  

function setup() {
  createCanvas(1200, 600);

  basket= createSprite(500,500,100,100);
  basket.addImage(basketImg);
  basket.scale= 0.7;



}

function draw() {
  background(back);
 

  

  
  drawSprites();


}