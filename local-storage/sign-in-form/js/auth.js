'use strict';

const buttonEntrance = document.querySelectorAll('.sign-in-htm .button')[0];
const buttonRegistry = document.querySelectorAll('.sign-up-htm .button')[0];
const singIn = document.getElementsByClassName('sign-in')[0];
const singUp = document.getElementsByClassName('sign-up')[0];


buttonEntrance.addEventListener('click', sendFormEntrance);
buttonRegistry.addEventListener('click', sendFormRegistration);

function sendFormEntrance(event){
	event.preventDefault()
	let obj = {};
	const input = document.querySelectorAll('.sign-in-htm .input');
	for(const item of input){
		obj[item.name] = item.value;
	}

	obj = JSON.stringify(obj);
	const request = new XMLHttpRequest();
	request.open('POST', 'https://neto-api.herokuapp.com/signin')
	request.addEventListener('load', testRequest);
	request.setRequestHeader('Content-Type', 'application/json')
	request.send(obj);

	function testRequest(){
		console.log(request.status);
		if(request.status === 200){
			try{
				const answer = JSON.parse(request.responseText);
				const output = document.querySelectorAll('.sign-in-htm .error-message')[0];
				console.log(answer);
				if(answer.error){
					output.textContent = answer.message;
				}else{
					output.textContent = 'Пользователь Иван успешно авторизирован';
				}

			} catch(e){
				console.log('Не валидный JSON');
				console.log(e.name);
				console.log(e.type);
			}
		}
	}
}

function sendFormRegistration(event){
	event.preventDefault()
	let obj = {};
	const input = document.querySelectorAll('.sign-up-htm .input');
	for(const item of input){
		obj[item.name] = item.value;
	}

	obj = JSON.stringify(obj);
	const request = new XMLHttpRequest();
	request.open('POST', 'https://neto-api.herokuapp.com/signup')
	request.addEventListener('load', testRequest);
	request.setRequestHeader('Content-Type', 'application/json')
	request.send(obj);

	function testRequest(){
		console.log(request.status);
		if(request.status === 200){
			try{
				const answer = JSON.parse(request.responseText);
				const output = document.querySelectorAll('.sign-up-htm .error-message')[0];
				console.log(answer);
				if(answer.error){
					output.textContent = answer.message;
				}else{
					output.textContent = 'Пользователь Иван успешно зарегистрирован';
				}

			} catch(e){
				console.log('Не валидный JSON');
				console.log(e.name);
				console.log(e.type);
			}
		}
	}
}