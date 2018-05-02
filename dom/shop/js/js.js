'use strict';

let counter = 0;
let price = 0;

function addBasket(){
	counter++;
	this.getAttribute('data-price');
	price += Number(this.getAttribute('data-price'));
	let total = getPriceFormatted(price);
	let span = document.querySelectorAll('.head h3 span');
	span[0].innerText = `${counter}`;
	span[1].innerText = `${total}`;
}

const buttonAdd = document.getElementsByClassName('add');

for(const button of buttonAdd){
	button.addEventListener('click', addBasket);
}