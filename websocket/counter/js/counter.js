'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');

connection.addEventListener('message', showInformation);

function showInformation(event){
	console.log(event.data);
	try{
		const info = JSON.parse(event.data);
		document.getElementsByClassName('counter')[0].textContent = info.connections;
		document.getElementsByClassName('errors')[0].textContent = info.errors;
	} catch(e){
		console.log('Не валидный JSON');
		console.log(e.name);
		console.log(e.type);
	}
}

window.addEventListener('beforeunload', closeConnection)

function closeConnection(){
	connection.close(1000);
}
