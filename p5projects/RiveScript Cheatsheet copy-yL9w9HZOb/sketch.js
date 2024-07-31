let bot = new RiveScript(); //new bot
let submitBttn, inputField;

function preload() {
  bot.loadFile("bot.txt").then(loaded).catch(error);
}

function setup() {
  inputField = createInput("");
  submitBttn = createButton("send message to bot");
  submitBttn.mousePressed(botResponse);
}

function draw() {}
function botResponse() {
  let inp = inputField.value();
  bot.reply("local-user", inp).then(respond);
}
function respond(reply) {
  createP(reply);
}
function loaded() {
  console.log("Chatbot ready!");
  bot.sortReplies(); //You must sort the replies before trying to fetch any!
}
function error(error) {
  console.log("There is an error.");
  console.log(error);
}

function keyPressed() {
  if (keyCode === ENTER) {
    botResponse();
  }
}
