// https://editor.p5js.org/jht9629-nyu/sketches/2zou6hxJG
// https://editor.p5js.org/_o.line/sketches/AJbihc14h
// wintershow2024-sunday - caroline

let glitchX = 2;
let glitchY = 2;
let bgblink = 30;
let state = 0;

//scroll text
//3-Minute Creative Coding
//Scrolling Text
//Carrie Wang
let replace =
  "Don’t ask if AI can make art — ask how AI can be art | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Adobe has a new tool to protect artists’ work from AI | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | HarperCollins is asking authors to license their books for AI training | Meta announces Movie Gen, an AI-powered video generator                       ";
let create =
  "Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Google outlines plans to help you sort real images from fake | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | Not even Spotify is safe from AI slop | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Meta announces Movie Gen, an AI-powered video generator";
let replacehd1 =
  "| ESPN’s AI-generated sports recaps are already missing the point | Taylor Swift endorses Kamala Harris in response to fake AI Trump endorsement | Google is using AI to make fake podcasts from your notes | Amazon is allowing Audible narrators to clone themselves with AI | OpenAI’s new model is better at reasoning and, occasionally, deceiving | The chatbot becomes the teacher | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Meta’s AI can now talk to you in the voices of Awkwafina, John Cena, and Judi Dench | Meta is working on recreating influencers with AI | Get ready to meet your AI best friend | Zoom will let AI avatars talk to your team for you | The Wall Street Journal is testing AI article summaries | ESPN is testing a generative AI avatar called ‘FACTS’ |";
let replacehd2 =
  "| Copilot Pages is Microsoft’s new collaborative AI playground for businesses | YouTube will use AI to generate ideas, titles, and even full videos | Amazon is stuffing generative AI into its shopping experience | Max is getting Google AI-generated closed captions | Microsoft claims its AI safety tool not only finds errors but also fixes them | Meta’s Ray-Bans will now ‘remember’ things for you | A deepfake caller pretending to be a Ukrainian official almost tricked a US senator | Character.AI and Google sued after chatbot-obsessed teen’s death | Google’s AI ‘learning companion’ takes chatbot answers a step further | Microsoft’s new Copilot Actions use AI to automate repetitive tasks | AI landlord screening tool will stop scoring low-income tenants after discrimination suit |";
let socialhd =
  "| Your public Facebook and Instagram posts were used to train Meta’s AI models | Meta fed its AI on almost everything you’ve posted publicly since 2007 | Facebook and Instagram are making AI labels less prominent on edited content | Snapchat’s AI selfie feature puts your face in personalized ads — here’s how to turn it off | SocialAI: we tried the Twitter clone where no other humans are allowed | LinkedIn is training AI models on your data | Friend’s AI chatbots have issues — and they want your help | Facebook officially embraces fake profiles | Meta’s AI chatbot plan includes a ‘sassy robot’ for younger users | Facebook can be sued over biased ad algorithm, says court | Facebook’s new AI-generated stickers are lewd, rude, and occasionally nude | Meta to require political advertisers disclose AI-generated content | Meta will hide suicide and eating disorder content from teens as government pressure mounts | 48,000 companies sent Facebook data on a single person | Instagram and Facebook knowingly platform parents who sexually exploit children for profit, say reports | Facebook will remove its News tab and stop paying publishers for news | GLAAD report says Meta allows anti-trans hate to ‘flourish’ on its platforms | Instagram and Facebook under EU investigation for causing child addiction and harm | Facebook and Instagram are making AI labels less prominent on edited content | Meta, Snap, and TikTok partner to stop the spread of suicide and self-harm content | Mark Zuckerberg says there’s ‘no causal connection’ between social media and teen mental health | Facebook is going to show you even more content from accounts you don’t follow | ";
let doom =
  "| Why is Mark Zuckerberg building a private apocalypse bunker in Hawaii? |";
let xStart = 520; //starting position of the text wall

function setup() {
  createCanvas(1350, 600);
}

function draw() {
  background(0);
  scale(1.1);

  if (state == 0) {
    aicreativity();
  }
  if (state == 1) {
    replacement();
  }
  if (state == 2) {
    socialmedia();
  }
  if (state == 3) {
    doomsday();
  }
}

function doomsday() {
  push();
  fill(250, 98);
  //quad(0, 143, 640, 143, 640, 185, 0, 185);
  quad(0, 280, 640, 280, 640, 320, 0, 320);
  pop();

  //scroll text
  push();
  textFont("Raleway");
  textAlign(LEFT, TOP);
  textSize(16);
  for (let x = xStart; x < width; x += 850) {
    fill(0);
    //text(doom, x, 155);
    text(doom, x, 295);
  }
  xStart--;
  if (xStart <= -2800) {
    state = 0;
    xStart = 520;
  }
  pop();

  push();
  fill(0);
  noStroke();
  quad(630, 30, 1200, 30, 1200, 480, 630, 480);
  pop();

  push();
  textAlign(LEFT);
  fill(220);
  textSize(48);
  textFont("Raleway");

  text('"AI is going to ', 650, 100);
  text("make our lives better", 650, 170);
  text("in the future, and", 650, 240);
  text('doomsday scenarios', 650 + glitchX, 310 + glitchY);
  text('are pretty irresponsible"', 650 , 383);

  textSize(22);
  text("- Mark Zuckerberg", 990, 460);

  if (glitchX > 1) {
    glitchX -= 3;
    glitchY += 3;
  } else {
    glitchX += 3;
    glitchY -= 3;
  }
  pop();

  push();
  textSize(12);
  textFont("Raleway");
  textAlign(RIGHT);
  if (bgblink > 0) {
    bgblink -= 0.3;
  }
  if (bgblink <= 10) {
    bgblink = 30;
  }
  fill(250, bgblink);
  textWrap(WORD);
  textAlign(LEFT);
  text(
    "Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest",
    0,
    0,
    1240
  );
  pop();
}

function socialmedia() {
  push();
  fill(250, 98);
  quad(0, 143, 640, 143, 640, 185, 0, 185);
  //quad(0, 350, 640, 350, 640, 397, 0, 397);
  pop();

  //scroll text
  push();
  textFont("Raleway");
  textAlign(LEFT, TOP);
  textSize(16);
  for (let x = xStart; x < width; x += 11050) {
    fill(0);
    text(socialhd, x, 155);
    //text(replacehd2, x, 365);
  }
  xStart--;
  if (xStart <= -2800) {
    state = 3;
    xStart = 520;
  }
  pop();

  push();
  fill(0);
  noStroke();
  quad(630, 30, 1200, 30, 1200, 480, 630, 480);
  pop();

  push();
  textAlign(LEFT);
  fill(220);
  textSize(48);
  textFont("Raleway");

  text('"It was built to accomplish', 650, 100);
  text("a social mission", 650 + glitchX, 170 + glitchY);
  text("- to make the world", 650, 240);
  text('more open and connected."', 650, 310);
  text(" ", 650 - (glitchX - 1), 383 - (glitchY - 1));

  textSize(22);
  text("- Mark Zuckerberg", 990, 460);

  if (glitchX > 1) {
    glitchX -= 3;
    glitchY += 3;
  } else {
    glitchX += 3;
    glitchY -= 3;
  }
  pop();

  push();
  textSize(12);
  textFont("Raleway");
  textAlign(RIGHT);
  if (bgblink > 0) {
    bgblink -= 0.3;
  }
  if (bgblink <= 10) {
    bgblink = 30;
  }
  fill(250, bgblink);
  textWrap(WORD);
  textAlign(LEFT);
  text(
    "Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest",
    0,
    0,
    1240
  );
  pop();
}

function replacement() {
  push();
  fill(250, 98);
  quad(0, 143, 640, 143, 640, 185, 0, 185);
  quad(0, 350, 640, 350, 640, 397, 0, 397);
  pop();

  //scroll text
  push();
  textFont("Raleway");
  textAlign(LEFT, TOP);
  textSize(16);
  for (let x = xStart; x < width; x += 6750) {
    fill(0);
    text(replacehd1, x, 155);
    text(replacehd2, x, 365);
  }
  xStart--;
  if (xStart <= -2800) {
    state = 2;
    xStart = 520;
  }
  pop();

  push();
  fill(0);
  noStroke();
  quad(630, 30, 1200, 30, 1200, 480, 630, 480);
  pop();

  push();
  textAlign(LEFT);
  fill(220);
  textSize(48);
  textFont("Raleway");

  text("“AI is not about", 650, 100);
  text("replacing us,", 650 + glitchX, 170 + glitchY);
  text("but making", 650, 240);
  text("us better versions", 650, 310);
  text("of ourselves.”", 650 - (glitchX - 1), 383 - (glitchY - 1));

  textSize(22);
  text("— Rana el Kaliouby", 990, 460);

  if (glitchX > 1) {
    glitchX -= 3;
    glitchY += 3;
  } else {
    glitchX += 3;
    glitchY -= 3;
  }
  pop();

  push();
  textSize(12);
  textFont("Raleway");
  textAlign(RIGHT);
  if (bgblink > 0) {
    bgblink -= 0.3;
  }
  if (bgblink <= 10) {
    bgblink = 30;
  }
  fill(250, bgblink);
  textWrap(WORD);
  textAlign(LEFT);
  text(
    "Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest",
    0,
    0,
    1240
  );
  pop();
}

function aicreativity() {
  push();
  fill(250, 98);
  quad(0, 143, 640, 143, 640, 185, 0, 185);
  quad(0, 350, 640, 350, 640, 397, 0, 397);
  pop();

  //scroll text
  push();
  textFont("Raleway");
  //textStyle(BOLD);
  textAlign(LEFT, TOP);
  textSize(16);
  for (let x = xStart; x < width; x += 6750) {
    fill(0);
    text(replace, x, 155);
    text(create, x, 365);
  }
  xStart--;
  if (xStart <= -2800) {
    state = 1;
    xStart = 520;
  }
  pop();

  push();
  fill(0);
  noStroke();
  quad(630, 30, 1200, 30, 1200, 480, 630, 480);
  pop();

  push();
  textAlign(LEFT);
  fill(220);
  textSize(48);
  textFont("Raleway");

  text('"Generative AI is', 650, 100);
  text("not a replacement", 650 + glitchX, 170 + glitchY);
  text(" for human creativity,", 650, 240);
  text("but rather a tool that can", 650, 310);
  text('augment and enhance it"', 650 - (glitchX - 1), 383 - (glitchY - 1));

  textSize(22);
  text("- Sam Altman", 990, 460);

  if (glitchX > 1) {
    glitchX -= 3;
    glitchY += 3;
  } else {
    glitchX += 3;
    glitchY -= 3;
  }
  pop();

  push();
  textSize(12);
  textFont("Raleway");
  textAlign(RIGHT);
  if (bgblink > 0) {
    bgblink -= 0.3;
  }
  if (bgblink <= 10) {
    bgblink = 30;
  }
  fill(250, bgblink);
  textWrap(WORD);
  textAlign(LEFT);
  text(
    "Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest | Why comparing AI image editing to Photoshop downplays the risks | OpenAI releases o1, its first model with ‘reasoning’ abilities | Don’t ask if AI can make art — ask how AI can be art | Google outlines plans to help you sort real images from fake | California governor signs rules limiting AI actor clones | YouTube will use AI to generate ideas, titles, and even full videos | Lionsgate signs deal to train AI model on its movies and shows | Meta’s going to put AI-generated images in your Facebook and Instagram feeds | Mark Zuckerberg: creators and publishers ‘overestimate the value’ of their work for training AI | Microsoft Paint is getting Photoshop-like generative AI fill and erase features | Meta announces Movie Gen, an AI-powered video generator | Adobe has a new tool to protect artists’ work from AI | Meta is bringing AI-edited video ads to Facebook and Instagram | AI is fixing — and ruining — our photos | Meta suggests AI Northern Lights pics are as good as the real thing | Photoshop is getting a bunch of new AI tools | Adobe teases AI tools that build 3D scenes, animate text, and make distractions disappear | YouTube takes a baby step toward labeling authentic video | Penguin Random House books now explicitly say ‘no’ to AI training | Kevin Bacon, Kate McKinnon, and other creatives warn of ‘unjust’ AI threat | Adobe execs say artists need to embrace AI or get left behind | Universal Music partners with AI company building an ‘ethical’ music generator | The Beatles’ final song, restored using AI, is up for a Grammy | YouTube is testing music remixes made by AI | Not even Spotify is safe from AI slop | HarperCollins is asking authors to license their books for AI training | OpenAI accidentally erases potential evidence in training data lawsuit | Nvidia claims a new AI audio generator can make sounds never heard before | Artists say they leaked OpenAI’s Sora video model in protest",
    0,
    0,
    1240
  );
  pop();
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
