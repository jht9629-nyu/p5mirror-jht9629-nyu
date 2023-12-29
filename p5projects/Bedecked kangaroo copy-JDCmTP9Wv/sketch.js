// Change the behavior so that when you mouse over a column, you turn it red and it stays red until the next time you mouse over it again, at which point the column goes back to white. (Just get this working for one column.)

let flag = true;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  let colWidth = width / 3;

  for (let i = 0; i < 3; i++) {
    if (mouseX > i * colWidth && mouseX < (i + 1) * colWidth) {
      if (i == 0) {
        if (flag) {
          fill("red");
          flag = false;
        } else {
          fill("red");
          flag = true;
        }
      } else {
        fill("red");
      }
    } else {
      if (i == 0) {
        if (flag == false) {
          fill("red");
        }
      } else {
        fill(255);
      }
    }
    rect(i * colWidth, 0, colWidth, height);
  }
}
