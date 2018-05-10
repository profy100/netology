'use strict';

const request = new XMLHttpRequest();
request.open("Get", "https://neto-api.herokuapp.com/currency");
request.addEventListener('loadstart', downloader);
request.addEventListener('loadend', downloader);
request.addEventListener('load', showCurrency);
request.send();

function downloader(){
	document.getElementById('loader').classList.toggle('hidden');
	console.log(10);
}

function showCurrency(){
	console.log(request.status);
	if(request.status === 200){
		let currency = '';
		try{
			currency = JSON.parse(request.responseText);
		}catch(e){
			console.log('Не валидный JSON код');
			console.log(`${e.name}`);
			console.log(`${e.type}`);
		}
		document.getElementsByTagName('main')[0].classList.toggle('hidden');
	
		for(const currencyAdd of currency){
			let newOption = document.createElement('option');
			newOption.innerText = currencyAdd.code;
			newOption.value = currencyAdd.value;
			document.getElementById('from').appendChild(newOption);
		}

		for(const currencyAdd of currency){
			let newOption = document.createElement('option');
			newOption.innerText = currencyAdd.code;
			newOption.value = currencyAdd.value;
			document.getElementById('to').appendChild(newOption);
		}

		const select = document.getElementsByTagName('select');
		
		for(let item of select){
			item.addEventListener('input', convert);
		}

		document.getElementById('source').addEventListener('input', convert);

		function convert(){
			const from = document.getElementsByTagName('select')[0].value;
			const to = document.getElementsByTagName('select')[1].value;
			const sum = document.getElementById('source').value;
			
			const result = ((sum * from) / to).toFixed(2);
			console.log(result);
			document.getElementsByTagName('output')[0].innerText = result;
		}

	}
	
}


