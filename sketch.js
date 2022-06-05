let appleOn = false;
let grapeOn = false;
let pineappleOn = false;
let strawberryOn = false;
let orangeOn = false;
let startupOn = true;

let appleOn2 = false;
let grapeOn2 = false;
let pineappleOn2 = false;
let strawberryOn2 = false;
let orangeOn2 = false;

let noiseSlider;
let sizeSlider;
let sizeSlider2;

let noiseScale = 0;
let num = 2500;
let particles = [];

let mycanvas, saveimg;



function preload() {
  img = loadImage("assets/orangenew.png");
  img2 = loadImage("assets/grapenew.png");
  img3 = loadImage("assets/pineapplenew.png");
  img4 = loadImage("assets/applenew.png");
  img5 = loadImage("assets/strawberrynew.png");
  img6 = loadImage("assets/startupgrey.png");
}



class Particle {
    constructor(col) {
      this.position = createVector(random(0, width), random(0, height));
      this.radius = 4;
      this.velocity = createVector(random(-1, 1), random(-1, 1))
      this.acceleration = createVector(0.0, 0.0)
      this.colour = col;
    }

    render(r) {
      
      noStroke()
      fill(this.colour);
      
      ellipse(this.position.x,this.position.y, r)
    }

    update(scale) {
      
      
      
      this.position.add(this.velocity)
      this.velocity.add(this.acceleration)
      let n = noise(this.position.x * scale, this.position.y * scale, frameCount * scale);
      
      let a = TAU * n;
      
      let px = cos(a);
      let py = sin(a);
      this.acceleration = createVector(px, py);
      
      this.velocity.limit(2) //speed
      
      if (!onScreen(this.position)) {
      this.position.x = random(width-480, width);
      this.position.y = random(height);
    }
      
    }  
  }  



function startup(){
  startupOn = false
  appleOn = false
  grapeOn = false
  pineappleOn = false 
  strawberryOn = false
  orangeOn = false
}

function setApple(){
  appleOn = true;
  grapeOn = false
  pineappleOn = false 
  strawberryOn = false
  orangeOn = false
  startupOn = false
  
}

function setOrange(){
  orangeOn = true;
  grapeOn = false
  pineappleOn = false 
  strawberryOn = false
  appleOn = false
  startupOn = false

  
}

function setGrape(){
  grapeOn = true;
  orangeOn = false
  pineappleOn = false 
  strawberryOn = false
  appleOn = false
  startupOn = false

}

function setPineapple(){
  pineappleOn = true;
  orangeOn = false
  grapeOn = false 
  strawberryOn = false
  appleOn = false
  startupOn = false

  
}

function setStrawberry(){
  strawberryOn = true;
  orangeOn = false
  grapeOn = false 
  pineappleOn = false
  appleOn = false
  startupOn = false

  
}



function setApple2(){
  appleOn2 = true;
  grapeOn2 = false
  pineappleOn2 = false 
  strawberryOn2 = false
  orangeOn2 = false
}

function setGrape2(){
  grapeOn2 = true;
  orangeOn2 = false
  pineappleOn2 = false 
  strawberryOn2 = false
  appleOn2 = false
  
}

function setOrange2(){
  orangeOn2 = true;
  grapeOn2 = false
  pineappleOn2 = false 
  strawberryOn2 = false
  appleOn2 = false
  
}

function setPineapple2(){
  pineappleOn2 = true;
  orangeOn2 = false
  grapeOn2 = false 
  strawberryOn2 = false
  appleOn2 = false
  
}

function setStrawberry2(){
  strawberryOn2 = true;
  orangeOn2 = false
  grapeOn2 = false 
  pineappleOn2 = false
  appleOn2 = false
  
}

function saveImage(){
  saveimg = mycanvas.get(408, 0, width-840, height)
  saveimg.save("yourdesign", "png")
}


function setup() {
  
  mycanvas = createCanvas(1920, 1080);
  
  noiseSlider = createSlider(1, 40, 5)
  noiseSlider.position(1540, 720)
  noiseSlider.size (320)
  
  sizeSlider = createSlider(10, 30, 20)
  sizeSlider.position(1540,460)
  sizeSlider.size (320)
  
  sizeSlider2 = createSlider(5, 30, 17)
  sizeSlider2.position(1540, 660)
  sizeSlider2.size (320)
  
  
  
  for (let i = 0; i < num; i++)  {
    particles.push(new Particle(color(0, random(0), 0)));
  }
  
  let apple = createButton("Apple");
  apple.mousePressed(setApple);
  apple.position(1540, 350);
  apple.size(100, 40);
  apple.style("font-weight", "bold");

  let grape = createButton("Grape");
  grape.mousePressed(setGrape);
  grape.position(1650, 350);
  grape.size(100, 40);
  grape.style("font-weight", "bold");
  
  let pineapple = createButton("Pineapple");
  pineapple.mousePressed(setPineapple);
  pineapple.position(1760, 350);
  pineapple.size(100, 40);
  pineapple.style("font-weight", "bold");

  let strawberry = createButton("Strawberry");
  strawberry.mousePressed(setStrawberry);
  strawberry.position(1540, 400);
  strawberry.size(100, 40);
  strawberry.style("font-weight", "bold");
  
  let orange = createButton("Orange");
  orange.mousePressed(setOrange);
  orange.position(1650, 400);
  orange.size(100, 40);
  orange.style("font-weight", "bold");
  
    
  let apple2 = createButton("Apple");
  apple2.mousePressed(setApple2);
  apple2.position(1540, 545);
  apple2.size(100, 40);
  apple2.style("font-weight", "bold");

  let grape2 = createButton("Grape");
  grape2.mousePressed(setGrape2);
  grape2.position(1650, 545);
  grape2.size(100, 40);
  grape2.style("font-weight", "bold");
  
  let pineapple2 = createButton("Pineapple");
  pineapple2.mousePressed(setPineapple2);
  pineapple2.position(1760, 545);
  pineapple2.size(100, 40);
  pineapple2.style("font-weight", "bold");

  let strawberry2 = createButton("Strawberry");
  strawberry2.mousePressed(setStrawberry2);
  strawberry2.position(1540, 595);
  strawberry2.size(100, 40);
  strawberry2.style("font-weight", "bold");
  
  let orange2 = createButton("Orange");
  orange2.mousePressed(setOrange2);
  orange2.position(1650, 595);
  orange2.size(100, 40);
  orange2.style("font-weight", "bold");


  
  let saveoutcome = createButton("Save");
  saveoutcome.position(1600, 800);
  saveoutcome.size(200, 40);
  saveoutcome.mousePressed(saveImage)
  saveoutcome.style("font-weight", "bold");
  
    
}

function draw() {
  
  noiseScale = noiseSlider.value()/1000;
  
  background(0, 10);
  //console.log(particles);
  for (let i = 0; i < num; i++)  {
  
    particles[i].update(noiseScale);
  }
 
  if (startupOn){
    for (let i = num/2; i < num; i++)  {
      particles[i].colour = color(255)
      particles[i].render(13);
    }
  
  image(img6, 0, 0)
  }
  
  if (appleOn){
    for (let i = num/2; i < num; i++)  {
      particles[i].colour = color(151, 248, 73)
      particles[i].render(sizeSlider.value());
    }
    if(appleOn2){
      background(0, 5);
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(151, 248, 73)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(orangeOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(255, 102, 0)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(strawberryOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(266, 0, 66)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(pineappleOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(255, 219, 0)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(grapeOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(143, 0, 173)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
    image(img4, 0, 0)
  }
  
  else if (orangeOn){
    for (let i = num/2; i < num; i++)  {
      particles[i].colour = color(255, 102, 0)
      particles[i].render(sizeSlider.value());
    }
    if(appleOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(151, 248, 73)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(orangeOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(255, 102, 0)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(strawberryOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(266, 0, 66)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(pineappleOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(255, 219, 0)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(grapeOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(143, 0, 173)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
    image(img, 0, 0)
  }
  
  else if (strawberryOn){
        for (let i = num/2; i < num; i++)  {
      particles[i].colour = color(266, 0, 66)
      particles[i].render(sizeSlider.value());
    }
    if(appleOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(151, 248, 73)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(orangeOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(255, 102, 0)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(strawberryOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(266, 0, 66)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(pineappleOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(255, 219, 0)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(grapeOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(143, 0, 173)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
    image(img5, 0, 0)
  }
  
  else if (grapeOn){
    for (let i = num/2; i < num; i++)  {
      particles[i].colour = color(143, 0, 173)
      particles[i].render(sizeSlider.value());
    }
    if(appleOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(151, 248, 73)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(orangeOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(255, 102, 0)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(strawberryOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(266, 0, 66)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(pineappleOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(255, 219, 0)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(grapeOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(143, 0, 173)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
    image(img2, 0, 0)
  }
  
  else if (pineappleOn){
    for (let i = num/2; i < num; i++)  {
      particles[i].colour = color(255, 219, 0)
      particles[i].render(sizeSlider.value());
    }
    if(appleOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(151, 248, 73)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(orangeOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(255, 102, 0)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(strawberryOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(266, 0, 66)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(pineappleOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(255, 219, 0)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
      if(grapeOn2){
      for (let i = 0; i < num/2; i++)  {
    if (i < num / 2)  {
      particles[i].colour = color(143, 0, 173)
      particles[i].render(sizeSlider2.value());
    }
      }
    }
    image(img3, 0, 0)
  }
    textSize(17)
    textStyle(BOLD);
    fill(0)
    text("Primary flavor", 1550, 330)
    text("Size", 1500, 475)
    text("Secondary flavor", 1550, 525)
    text("Size", 1500, 675)
    text("Noise", 1490, 735)


}

function onScreen(v) {
  return v.x >= 380 && v.x <= width-480 && v.y >= 0 && v.y <= height;
}


