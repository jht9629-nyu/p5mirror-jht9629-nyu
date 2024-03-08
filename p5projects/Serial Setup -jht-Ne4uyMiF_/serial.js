let serial;

let dmxData = [0, 255, 128, 0]; // Example DMX data for 4 channels

// let dmxData = [255]; // Example DMX data for 1 channels ON
// let dmxData = [0]; // Example DMX data for 1 channels OFF

function setup() {
  createCanvas(400, 400);
  
  serial = new p5.SerialPort();
  serial.on('list', printList);
  serial.on('data', serialEvent);
  
  serial.list();
}

function printList(portList) {
  for (let i = 0; i < portList.length; i++) {
    print(i + " " + portList[i]);
  }
  
  // Choose the appropriate serial port for your DMX interface
  let portName = '/dev/ttyUSB0'; // Example port name, change it accordingly
  
  serial.open(portName);
}

function serialEvent() {
  // Handle incoming serial data if needed
}

function draw() {
  // Send DMX data periodically (for demonstration purposes)
  sendDMXData();
}

// let dmxData = [0, 255, 128, 0]; // Example DMX data for 4 channels

function sendDMXData() {
  // Construct DMX data packet
  let packet = new Uint8Array(1 + dmxData.length);
  packet[0] = 0; // Start code
  for (let i = 0; i < dmxData.length; i++) {
    packet[i + 1] = dmxData[i]; // DMX channel data
  }
  
  // Send packet over serial port
  serial.write(packet);
}
