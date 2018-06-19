'use strict';
const itemsList = document.getElementsByClassName('items-list')[0];
itemsList.addEventListener('click', checkItem);


function checkItem(event){
	event.preventDefault();
	if(event.target.classList.contains('add-to-cart')){
		const item = {
			title: event.target.dataset.title,
			price: event.target.dataset.price,
		}
		addToCart(item);
	}
}

checkItem();