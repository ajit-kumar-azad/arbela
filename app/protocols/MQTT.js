Ext.define('Arbela.protocols.MQTT', {
	extend: 'Ext.Base',

	mixins: ['Ext.mixin.Mashup'],

	requiredScripts: ['lib/paho.javascript-1.0.1/mqttws31.js'],

	singleton: true,

	connect: function(host, port, clientId, topic, onMessageArrived) {
		if (!this.client) {
			console.log('initializing MQTT client....');

			// this.client = new Paho.MQTT.Client(host, Number(port), "/mqtt", clientId);  //HiveMQ config
			this.client = new Paho.MQTT.Client(host, Number(port), clientId);  //hosted HiveMQ config

			this.topic = topic;
			this.onMsgArrivedcallback = onMessageArrived;

			this.client.onConnectionLost = this.onConnectionLost;
			this.client.onMessageArrived = this.onMessageArrived;
			this.client.onMessageDelivered = this.onMessageDelivered;

			this.client.connect({
				onSuccess:this.onConnect,
				invocationContext: this, 
				mqttVersion: 3});
		}
	},

	onConnect: function() {
	  console.log("onConnect");

	  var me = this.invocationContext;

	  me.client.subscribe(me.topic, {
	    // timeout: 10,
	    onSuccess: me.onSubSuccess,
	    onFailure: me.onSubFailure,
	    invocationContext: me
	  });
	},

	onSubSuccess: function() {
	  console.log('subscribe: onSuccess');
	},

	onSubFailure: function() {
	  console.log('subscribe: onFailure');
	},

	onMessageDelivered: function() {
	  console.log('onMessageDelivered');
	},

	// called when the client loses its connection
	onConnectionLost: function(responseObject) {
	  if (responseObject.errorCode !== 0) {
	    console.log("onConnectionLost:"+responseObject.errorMessage);
	  }
		var me = this.connectOptions.invocationContext;
		me.client = null;
	},

	// called when a message arrives
	onMessageArrived: function(message) {
		var me = this.connectOptions.invocationContext;
	  console.log("onMessageArrived:"+message.payloadString);

	  me.onMsgArrivedcallback(Ext.JSON.decode(message.payloadString));
	}
});