'use strict';

const button = document.getElementsByClassName('wrapper-dropdown')[0];
console.log(button);
function list (){	
	if (button.classList.contains('active')){
		button.classList.remove('active');
		return
	}
	button.classList.add('active');
	
}
console.log(button.classList);
button.onclick = list;