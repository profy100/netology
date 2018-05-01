'use strict';

const button = document.getElementsByClassName('wrapper-dropdown')[0];

function list (){	
	button.classList.toggle('active');	
}

button.onclick = list;