// Create a client instance
// client = new Paho.MQTT.Client(location.hostname, Number(location.port), "clientId");
// client = new Paho.MQTT.Client("test.mosquitto.org", Number("8080"), "clientId");
// client = new Paho.MQTT.Client("localhost", Number("8000"), "/mqtt", "AJITKUMAR");  //HiveMQ config
// client = new Paho.MQTT.Client("localhost", Number("8000"), "AJITKUMAR");  //HiveMQ config
// client = new Paho.MQTT.Client("localhost", Number("8080"), "/mqtt", "AJITKUMAR");
client = new Paho.MQTT.Client("broker.mqttdashboard.com", Number("8000"), "clientId-peo8S49i3D"); //http://www.hivemq.com/demos/websocket-client/

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.onMessageDelivered = onMessageDelivered;

// connect the client
client.connect({onSuccess:onConnect, mqttVersion: 3});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  // client.startTrace();

  message = new Paho.MQTT.Message("{temp: 27.45}");
  message.destinationName = "TEMP";
  // message.retained = true;

  client.send(message); 
  // console.log('Trace log:', client.getTraceLog());
  // client.stopTrace();

  client.disconnect();
}

function onMessageDelivered() {
  console.log('onMessageDelivered');
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}