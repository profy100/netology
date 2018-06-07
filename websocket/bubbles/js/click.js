'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse')

document.addEventListener('click', newClick);

function newClick(event){
	console.log(event);
	let coordinate = {
		clientX: event.clientX,
		clientY: event.clientY
	}
	coordinate = JSON.stringify(coordinate);
	connection.send(coordinate)
}

connection.addEventListener('open', () => {
	showBubbles(connection);
} );


