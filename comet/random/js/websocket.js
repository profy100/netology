'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');

connection.addEventListener('message', updateNumber);

function updateNumber(event){
	console.log(event)
	let request = event.data;
	const pooling = Array.from(document.getElementsByClassName('websocket')[0].children);

	for(const item of pooling){
		item.classList.remove('flip-it');

		if(item.textContent === request){
			item.classList.add('flip-it');
		}
	}
}
