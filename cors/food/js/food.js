'use strict';

function loadData(callBack, url) {
	return new Promise((done, fail) => {
	
	const script = document.createElement('script');
	script.src = `${url}?jsonp=${callBack}`;
	document.body.appendChild(script);

	window.callBack = done;
	});
}

function getRecipe(data){
	loadData('getRecipeRating', 'https://neto-api.herokuapp.com/food/42/rating')
	loadData('getRecipeConsumers', 'https://neto-api.herokuapp.com/food/42/consumers')
	
	document.querySelector('[data-pic]').setAttribute('style', `background-image: url('${data.pic}');`);
	document.querySelector('[data-title').textContent = data.title;
	document.querySelector('[data-ingredients]').textContent = data.ingredients.join(', ');
}

function getRecipeRating(data){
	document.querySelector('[data-rating]').textContent = data.rating.toFixed(2);
	document.querySelector('[data-star]').setAttribute('style', `width: ${(data.rating * 100) / 10}px;`);
	document.querySelector('[data-votes]').textContent = `(${data.votes} оценок)`;
}

function getRecipeConsumers(data){
	const consumers = document.querySelector('[data-consumers]')
	data.consumers.forEach(item => {
		let consumer = document.createElement('img');
		consumer.src = item.pic;
		consumer.title = item.name;
		consumers.appendChild(consumer);
	})
	let span = document.createElement('span');
	span.textContent = data.total - data.consumers.length;
	consumers.appendChild(span);

}
loadData('getRecipe' ,'https://neto-api.herokuapp.com/food/42')

