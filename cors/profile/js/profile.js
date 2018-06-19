'use strict';

function loadData(callBack, url) {
	return new Promise((done, fail) => {
	
	const script = document.createElement('script');
	script.src = `${url}?jsonp=${callBack}`;
	document.body.appendChild(script);

	window.callBack = done;
	});
}

function profile(data){
	for(const key in data){
		console.log(key);
		if(key === 'id'){
			loadData('technologies', `https://neto-api.herokuapp.com/profile/${data[key]}/technologies`);
		}else if (key === 'pic'){
			document.querySelector(`[data-${key}]`).src = data[key];	
		}else{
			document.querySelector(`[data-${key}]`).textContent = data[key];
		}
	}
}

function technologies(data){
	const dataTechologies = document.querySelector('[data-technologies]');

	for(const item of data){
		let span = document.createElement('span');
		span.classList.add('devicons', `devicons-${item}`);
		dataTechologies.appendChild(span);
	}

	document.getElementsByClassName('content')[0].style = 'display: initial';
}

loadData('profile' ,'https://neto-api.herokuapp.com/profile/me')
