let str = '❤️ man 攳柣男人';
// 攳 柣
function setup() {
  createCanvas(400, 400);
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    console.log('i', i, str[i]);
  }
}

function draw() {
  background(220);
}