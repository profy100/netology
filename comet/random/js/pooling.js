'use strict';

const xhr = new XMLHttpRequest();

xhr.addEventListener('load', onload);

setInterval(function() {
  xhr.open('GET', 'https://neto-api.herokuapp.com/comet/pooling')
  xhr.send();
}, 10000);


function onload(){
	if(xhr.status === 200){
		let request = xhr.responseText;
		const pooling = Array.from(document.getElementsByClassName('pooling')[0].children);

		for(const item of pooling){
			item.classList.remove('flip-it');

			if(item.textContent === request){
				item.classList.add('flip-it');
			}
		}
	}
}