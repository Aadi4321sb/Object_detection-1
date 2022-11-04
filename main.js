img = "";
function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload(){
    img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img, 0,0,640,420);
    fill("#FF0000");
    text("Dog",45,35)
    noFill();
    stroke("#0000FF");
    rect(30, 40, 450, 375 );
}