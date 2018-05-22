'use strict';
const show = document.getElementsByClassName('show-more')[0];
show.addEventListener('click', checkItem);


function checkItem(){
	const cart = document.getElementsByClassName('add-to-cart');
	
	for(let item of cart){
		item.addEventListener('click', addBasket)
	}
}

function addBasket(event){
	const item = {
		title: event.target.dataset.title,
		price: event.target.dataset.price,
	}

	addToCart(item);
}

checkItem();