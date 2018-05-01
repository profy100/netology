'use strict';

const gallery = document.getElementsByClassName('gallery-nav')[0].children;

function choose(event){
	event.preventDefault();
	if(this.classList.contains('gallery-current')){
		return;
	}

	for(let img of gallery){
		img.classList.remove('gallery-current');
	}
	this.classList.add('gallery-current');
	document.getElementsByClassName('gallery-view')[0].src = this.href;
}

for(let a of gallery){
	a.addEventListener('click', choose);
}
