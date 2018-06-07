'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');

connection.addEventListener('open', changeStatus);
let content = document.getElementsByClassName('messages-content')[0];

function changeStatus(event){
	if(event.type === 'open'){
		const status = document.getElementsByClassName('chat-status')[0];
		status.textContent = status.dataset.online;

		document.getElementsByClassName('message-submit')[0].disabled = false;

		let messageStatus = document.getElementsByClassName('message-status')[0].cloneNode(true);
		messageStatus.children[0].textContent = 'Пользователь появился в сети';
		document.getElementsByClassName('messages-content')[0].appendChild(messageStatus);
	}
	if(event.type === 'close'){
		const status = document.getElementsByClassName('chat-status')[0];
		status.textContent = status.dataset.offline;

		document.getElementsByClassName('message-submit')[0].disabled = true;

		let messageStatus = document.getElementsByClassName('message-status')[0].cloneNode(true);
		messageStatus.children[0].textContent = 'Пользователь не в сети';
		document.getElementsByClassName('messages-content')[0].appendChild(messageStatus);
	}				
}

connection.addEventListener('message', getMessage);

function getMessage(event){
	console.log(event.data);
	if(event.data === '...'){
		let messageLoading = document.getElementsByClassName('loading')[0].cloneNode(true);
		messageLoading.children[1].textContent = 'Пользователь пишет сообщение';
		content.appendChild(messageLoading);
	}else{
		let newMessage = document.getElementsByClassName('message-personal')[0].cloneNode(true);
		newMessage.children[0].textContent = event.data;
		const date = new Date();
		const time = date.toTimeString().substring(0,5);
		newMessage.children[1].textContent = `${time}`;
		content.appendChild(newMessage);

		if(content.getElementsByClassName('loading')[0]){
			content.removeChild(content.getElementsByClassName('loading')[0]);
		}		
	}
}

document.getElementsByClassName('message-submit')[0].addEventListener('click', sendMessage);

function sendMessage(event){
	event.preventDefault();
	console.log(document.getElementsByClassName('message-input')[0].value);
	let newMessage = document.getElementsByClassName('message-personal')[0].cloneNode(true);
	newMessage.children[0].textContent = document.getElementsByClassName('message-input')[0].value;
	const date = new Date();
	const time = date.toTimeString().substring(0,5);
	newMessage.children[1].textContent = `${time}`;
	content.appendChild(newMessage);

	connection.send(document.getElementsByClassName('message-input')[0].value);	
	document.getElementsByClassName('message-input')[0].value = '';
}

connection.addEventListener('close', changeStatus)

