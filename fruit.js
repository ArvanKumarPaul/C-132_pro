status = "";

function preload() {

  img = loadImage("Fruit_Basket.jpg");

}

function setup() {

  canvas = createCanvas(420,350);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "Detecting objects";

}

function modelLoaded() {

  status = true;
  console.log("Model loaded");
  objectDetector.detect(img,gotResults);

}

function gotResults(error,results) {

  

}