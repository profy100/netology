'use strict';

const list = document.querySelectorAll('.todo-list input');
console.log(list);
const done = document.querySelector('.done');
console.log(done);
const undone = document.querySelector('.undone');
console.log(undone);

for(const item of list){
	item.addEventListener('click', checkList);
}

function checkList(event){
	console.log(event.target);
	console.log(event.target.checked);
	if(event.target.checked){
		console.log(event.target.parentElement)
		done.appendChild(event.target.parentElement);
	}else{
		undone.appendChild(event.target.parentElement);
	}
}