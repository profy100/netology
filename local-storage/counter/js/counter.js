'use strict';

const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const counter = document.getElementById('counter');

increment.addEventListener('click', makeCounter);
decrement.addEventListener('click', makeCounter);
reset.addEventListener('click', makeCounter);

if(!localStorage.counter){
	localStorage.counter = 0;
}
counter.textContent = localStorage.counter;


function makeCounter(event){
	if(event.target.textContent === '+'){
		localStorage.counter++;
	}

	if((event.target.textContent === '-') 
		&& (localStorage.counter > 0 )){
		localStorage.counter--;
	}
	if(event.target.textContent === 'Сбросить'){
		localStorage.counter = 0;
	}
	counter.textContent = localStorage.counter;
}