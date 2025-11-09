let img;
function preload(){
  img = loadImage('cat.jpg');
}
function setup() {
  pixelDensity(1)
  createCanvas(img.width, img.height);
  image(img,0,0);
  loadPixels();
  
  for(let y=0;y<height;y++){
    for(let x=0;x<width;x++){
      let idx = (y*width +x)*4;
      if((x+y)%2===0){
        pixels[idx +0]=0;
        pixels[idx +1]=255;
        pixels[idx +2]=0;
      }
      
      if (y>=height/2 -5 && y<height/2 +5){
        pixels[idx +0]=255;
        pixels[idx +1]=255;
        pixels[idx +2]=255;
      }
      if (x >= width/2 - 5 && x < width/2 + 5) {
        pixels[idx + 0] = 0;
        pixels[idx + 1] = 0;
        pixels[idx + 2] = 255;
      }
    }
  }
  updatePixels();
  noLoop();
  
}