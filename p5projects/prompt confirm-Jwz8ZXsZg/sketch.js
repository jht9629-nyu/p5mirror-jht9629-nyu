function setup() {
  createCanvas(400, 400);
  {
    let ans = window.prompt("What is your answer?");
    console.log("prompt", ans, 'type', typeof ans);
  }
  {
    let ans = window.confirm("confirm response?");
    console.log("confirm", ans, 'type', typeof ans);
  }
}

function draw() {
  background(220);
}
