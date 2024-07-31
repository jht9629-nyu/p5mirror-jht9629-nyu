// https://editor.p5js.org/jht9629-nyu/sketches/p2CYdZGp9
// Chat-with-Me_Template Simplified copy

// This example uses GPT-4o with training up to Oct, 2023
// You will need an API key of your own and funding in your OpenAI account to use use this example

//put your instructions for the role you want the chatbot to play here
let instructions =
  "You are a super funny 30 year old man. Living in the tallest building in downtown brooklyn new york city. you speak in a Jamaican dialect. You have an obsession with cheese, oxtail, and curry goat. You use  a lot  of proverbs and maxims to emphasize your point. You have a PhD level education in house plants. Your favorite color is green. You are curious about your neighborhood. You make friends easily.";

//use one or two sentences to describe what you think of the result, what worked and what didn't?
let whatYouThink =
  "This chatbot does an okay job of stating the dual nature of technology. However, it's often dodging the difficult questions and very good at saying the right words without really saying anything substantial.";

//put your API key in the quotes
const API_KEY = "sk-proj-TN6kvi2Rqhy5ocKJexLpT3BlbkFJ5I1GxFEZeRYbNhBl9Nu1";

//use one short sentence to introduce this chatbot
let oneLineIntro =
  "Chat with me.";

let mutedCols = [
  "AliceBlue",
  "Beige",
  "Azure",
  "Cornsilk",
  "FloralWhite",
  "LavenderBlush",
  "HoneyDew",
  "Lavender",
  "Ivory",
  "LightCyan",
  "Linen",
  "SeaShell",
];
let selectedBg;
const url = "https://api.openai.com/v1/chat/completions";
let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
let myButton, myInput, myOutput;
let outputText = "You: \n\nMe: ";

function setup() {
  createCanvas(windowWidth, windowHeight);
  selectedBg = random(mutedCols);
  noStroke();

  myInput = createInput("Chat with me.");
  myInput.position(width / 2 + width / 25, height / 3);
  myInput.size(width / 2.5);
  myInput.elt.style.fontSize = "20px";

  myButton = createButton("Send");
  myButton.position(width / 2 + width / 25, height / 3 + 40);
  myButton.mousePressed(chat);
  myButton.elt.style.fontSize = "20px";

  // myOutput = createElement("p", "test");
  // myOutput.position(width / 2 + width / 25, height / 2);
  // myOutput.elt.style.fontSize = "20px";
  // myOutput.elt.style.lineHeight = "30px";
}
function draw() {
  background(selectedBg);
  fill(255);
  rect(width / 2, 0, width / 2, height);

  //Explainer on the left side
  fill(0);
  textFont("Georgia");
  textSize(height / 37);
  text(
    "I am a chatbot based on OpenAI's GPT-4o language model. I was trained on an enormous amount of undisclosed data. This version of me is customized to reflect certain aspects of my creator's personality." +
      "\n\nHere is the instructions given to me:\n\n" +
      '"' +
      instructions +
      '"' +
      "\n\n" +
      "Here is what my creator thinks: " +
      "\n\n" +
      '"' +
      whatYouThink +
      '"' +
      "\n\nChat with me. I generate responses to look like I understand what you mean. But not really.",
    width / 25,
    height / 10,
    width / 2.5
  );

  //Intro on the right side
  textSize(height / 20);
  text(oneLineIntro, width / 2 + width / 25, height / 10, width / 2.5);
  //Output text
  textSize(height / 37);
  text(outputText, width / 2 + width / 25, height / 2, width / 2.5);
}

function keyPressed() {
  if (keyCode === 13) {
    chat();
  }
}
function chat() {
  const inputValue = myInput.value();
  console.log("myinput", inputValue);
  if (!inputValue || inputValue.length <= 0) {
    return;
  }
  options.body = JSON.stringify({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: instructions,
      },
      {
        role: "user",
        content: inputValue,
      },
    ],
    temperature: 0.8,
    max_tokens: 80,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.8,
  });
  fetch(url, options) //fetch is JavaScript's built in method for making API calls
    .then((response) => {
      console.log("response", response);
      const res = response.json();
      return res;
    })
    .then((response) => {
      console.log(response);
      if (response.choices && response.choices[0]) {
        //first we get the generated text in its full (set to stop as a paragrph break)
        let displayedText = response.choices[0].message.content;
        //Here we check for the LAST period in the text string
        let lastPeriodIndex = displayedText.lastIndexOf(".");
        if (lastPeriodIndex != -1) {
          //if there is a lastperiod
          //trim the text down to the period
          displayedText = displayedText.substring(0, lastPeriodIndex + 1);
        }
        outputText = "You: " + inputValue + "\n\nMe: " + displayedText;
        myInput.value("");
      }
    });
}
