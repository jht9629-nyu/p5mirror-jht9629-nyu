// https://editor.p5js.org/jht9629-nyu/sketches/2szUX-iU7
// https://github.com/troglodisme/OpenAI-p5.js/
// https://github.com/troglodisme/OpenAI-p5.js/blob/main/1-basic-chat.js

// https://editor.p5js.org/re7l/sketches/P6iMnypND
// gpt-4o-mini
// With session memory
// You will need an API key of your own and funding in your OpenAI account to use this example
const API_KEY = "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";
const url = "https://api.openai.com/v1/chat/completions";
let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
let myButton, myInput, myOutput;
let myOutputText = "";

//we'll start a variable where we save all conversation history to, so everytime we make an API call, the session memory persists
//the first message is an instruction/prompt for the system/bot
let conversationHistory = [
  {
    role: "system",
    //////modify the content (the prompt in quotes) to assign the bot different roles and personalities
    content:
      "You are an artist who works at the intersection of art and technology. You think highly of yourself. You speak in art jargons.",
  },
];

function setup() {
  myInput = createInput("Should I go to work?");
  myInput.position(50, 50);
  myInput.size(600);
  myInput.elt.style.fontSize = "20px";

  myButton = createButton("Submit");
  myButton.position(50, 100);
  myButton.mousePressed(chat);
  myButton.elt.style.fontSize = "20px";

  myOutput = createElement("p", "Talk to me. I'm an artist.");
  myOutput.position(50, 150);
  myOutput.elt.style.fontSize = "20px";
  myOutput.elt.style.lineHeight = "30px";
}

function keyPressed() {
  if (keyCode === ENTER) {
    chat();
  }
}

function chat() {
  const inputValue = myInput.value();
  console.log("myinput", inputValue);
  if (!inputValue || inputValue.length <= 0) {
    return; //if there's no input, return
  }

  // Add the user's message to the conversation history
  conversationHistory.push({ role: "user", content: inputValue });

  //you can modify the settings below
  options.body = JSON.stringify({
    model: "gpt-4o-mini",
    messages: conversationHistory,
    temperature: 0.8,
    max_tokens: 50,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.8,
    stop: ["\n"],
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

        // Add the assistant's message to the conversation history
        conversationHistory.push({ role: "system", content: displayedText });

        myOutputText +=
          "<br/>You: " + inputValue + "<br/>Bot: " + displayedText;
        myOutput.html(myOutputText);
        myInput.value(""); //clear the input field
      }
    });
}
