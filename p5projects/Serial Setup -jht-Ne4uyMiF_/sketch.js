// https://editor.p5js.org/jht9629-nyu/sketches/Ne4uyMiF_
// Serial Setup -jht

// https://editor.p5js.org/Jaesar/sketches/uJ0fywibn

let serial = 0;
let currentData = 0;
let currentAvailable = 0;
let options = {
  baudRate: 9600
}
//MAKE SURE MATCHES PORT NAME ON SERIAL CONTROL / ARDUINO
let portName = "COM3";

function setup() {
  // Instantiate our SerialPort object
  serial = new p5.SerialPort();

  // Let's list the ports available
  let portlist = serial.list();

  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open(portName);

  // Register some callbacks

  // When we connect to the underlying server
  serial.on('connected', serverConnected);

  // When we get a list of serial ports that are available
  serial.on('list', gotList);

  // When we some data from the serial port
  serial.on('data', gotData);

  // When or if we get an error
  serial.on('error', gotError);

  // When our serial port is opened and ready for read/write
  serial.on('open', gotOpen);
}

// We are connected and ready to go
function serverConnected() {
    console.log("We are connected!");
}

// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (let i = 0; i < thelist.length; i++) {
    // Display in the console
    console.log(i + " " + thelist[i]);
  }
}

// Connected to our serial device
function gotOpen() {
  console.log("Serial Port is open!");
}

// Uh oh, here is an error, let's log it
function gotError(theerror) {
  console.log(theerror);
}

// There is data available to work with from the serial port
function gotData() {
  currentAvailable = serial.available();
  currentData = serial.read(); // read bytes
  
  // let currentString = serial.readStringUntil("\r\n"); // read strings
  // console.log(currentString);
  // console.log(currentData);
  
  createCanvas (600,400);
}

// Methods available
// serial.read() returns a single byte of data (first in the buffer)
// serial.readChar() returns a single char 'A', 'a'
// serial.readBytes() returns all of the data available as an array of bytes
// serial.readBytesUntil('\n') returns all of the data available until a '\n' (line break) is encountered
// serial.readString() retunrs all of the data available as a string
// serial.readStringUntil('\n') returns all of the data available as a tring until a (line break) is encountered
// serial.last() returns the last byte of data from the buffer
// serial.lastChar() returns the last byte of data from the buffer as a char
// serial.clear() clears the underlying serial buffer
// serial.available() returns the number of bytes available in the buffer

function draw() {
  // Polling method
  background(0);
  fill(255);
  // console.log(serial.available());
  let dataMapped = map(currentData,0,255,0,width);
    if(currentAvailable>0){
       circle(dataMapped,height * 0.5,currentData);
    }
    //let data = serial.read();
    
  

}

/*

https://www.sweetwater.com/sweetcare/articles/understanding-dmx/

https://onlinedocs.microchip.com/pr/GUID-19E32404-10A3-4F82-A4B0-9332290B918C-en-US-1/index.html?GUID-E3A73BEC-FD66-4B46-A7F8-8D84A734DF4A

*/
