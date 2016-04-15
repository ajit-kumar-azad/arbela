var PUBNUB_demo = PUBNUB.init({
    publish_key: 'pub-c-12a0e504-b46c-4c9c-ba5d-089ae589b37e',
    subscribe_key: 'sub-c-7c052466-04ea-11e5-aefa-0619f8945a4f'
});

// PUBNUB_demo.subscribe({
//     channel: 'TEMP',
//     message: function(m){console.log(m)}
// });

function publish1() {
	PUBNUB_demo.publish({
	    channel: 'HUMIDITY',
	    message: {"humidity":"" + Math.floor((Math.random() * 100) + 1) + ""}
	});
}

function publish() {
	PUBNUB_demo.publish({
	    channel: 'TEMP',
	    message: {"temp":"" + Math.floor((Math.random() * 50) + 1) + ""}
	});
}

function publish3() {
	PUBNUB_demo.publish({
	    channel: 'BULB',
	    message: {"state":"OFF", "since": "06:00 am"}
	});
}

setInterval(publish, 5000);
setInterval(publish1, 5000);
setInterval(publish3, 5000);

