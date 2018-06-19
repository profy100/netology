'use strict';

function loadData(url) {
	return new Promise((done, fail) => {
	
	const script = document.createElement('script');
	script.src = `${url}?jsonp=fillWidget`;
	document.body.appendChild(script);

	window[fillWidget] = done;
	});
}

function fillWidget(data){
	for(const key in data){
		if(key === 'wallpaper' || key === 'pic'){
			document.querySelector(`[data-${key}]`).src = data[key];
		}else{
			document.querySelector(`[data-${key}]`).textContent = data[key];
		}
	}
}

loadData('https://neto-api.herokuapp.com/twitter/jsonp')