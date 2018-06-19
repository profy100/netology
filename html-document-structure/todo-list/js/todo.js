'use strict';

const list = document.querySelectorAll('.todo-list input');
const done = document.querySelector('.done');
const undone = document.querySelector('.undone');

for(const item of list){
	item.addEventListener('click', checkList);
}

function checkList(event){
	if(event.target.checked){
		console.log(event.target.parentElement)
		done.appendChild(event.target.parentElement);
	}else{
		undone.appendChild(event.target.parentElement);
	}
}