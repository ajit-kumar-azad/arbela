Ext.define('Arbela.protocols.Websocket', {
	extend: 'Ext.Base',

	mixins: ['Ext.mixin.Mashup'],

	requiredScripts: [
		'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'
	],

	singleton: true,

	connect: function(url, params) {
		if (!this.websocket) {
			console.log('connecting to Websocket.....');
			this.websocket = io.connect(url);

			var socket = this.websocket;

		    socket.on('connected', function (data) {
		        socket.emit('ready for data', params);
		    });
		}
	},

	subscribe: function(onMessageArrived) {
		this.websocket.on('update', function (data) {
	        console.log(data.message);

	        onMessageArrived(data.message);
	    });
	}
});