'use strict';

const form = Array.from(document.querySelectorAll('.contentform input'));
const textarea = document.getElementsByTagName('textarea')[0];
const buttonSubmit = document.querySelector('.contentform .button-contact');
const buttonChangeMessage = document.querySelector('main .button-contact');

for(const item of form){
	if(item.name === 'zip'){
		item.type = 'number';
	}
	item.addEventListener('input', checkFill)
}

textarea.addEventListener('input', checkFill);
buttonSubmit.addEventListener('click', showMessage);
buttonChangeMessage.addEventListener('click', hideMessage);

function checkFill(){
	let counter = 0;
	for(let input = 0; input < form.length; input++){
		if(!(form[input].value === '')){
			counter++
		}
	}

	if(!(textarea.value === '')){
		counter++
	}
	
	if(counter === form.length + 1){
		buttonSubmit.removeAttribute('disabled');
	}else{
		buttonSubmit.setAttribute('disabled', '')
	}
}


function showMessage(event){
	event.preventDefault();
	console.log(document.getElementById('name'));
	console.log(form);


	document.getElementById('name').innerText = form.find(function(el){
		if(el.name === 'name'){
			return el;
		}	
	}).value;
	
	document.getElementById('lastname').innerText = form.find(function(el){
		if(el.name === 'lastname'){
			return el;
		}
	}).value;	

	document.getElementById('company').innerText = form.find(function(el){
		if(el.name === 'company'){
			return el;
		}
	}).value;

	document.getElementById('role').innerText = form.find(function(el){
		if(el.name === 'role'){
			return el;
		}
	}).value;	

	document.getElementById('zip').innerText = form.find(function(el){
		if(el.name === 'zip'){
			return el;
		}
	}).value;	

	document.getElementById('city').innerText = form.find(function(el){
		if(el.name === 'city'){
			return el;
		}
	}).value;

	document.getElementById('address').innerText = form.find(function(el){
		if(el.name === 'address'){
			return el;
		}
	}).value;

	document.getElementById('subject').innerText = form.find(function(el){
		if(el.name === 'subject'){
			return el;
		}
	}).value;

	document.getElementById('message').innerText = textarea.value;

	document.getElementsByClassName('contentform')[0].classList.add('hidden');
	document.getElementsByTagName('main')[0].classList.remove('hidden');
}

function hideMessage(){
	document.getElementsByClassName('contentform')[0].classList.remove('hidden');
	document.getElementsByTagName('main')[0].classList.add('hidden');
}