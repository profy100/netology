'use strict'

const listBlock = document.querySelectorAll('.list-block ul li');

for(const list of listBlock){
	list.addEventListener('click', testListDeals);
}

function testListDeals(){
	let counter = 0;
	
	for(let list = 0; list < listBlock.length; list++){
		if(listBlock[list].querySelector('input').checked === true){
			counter++
			console.log(counter);
		}
	}

	if(counter === listBlock.length){
		document.getElementsByClassName('list-block')[0].classList.add('complete');
	}else{
		document.getElementsByClassName('list-block')[0].classList.remove('complete');
	}
}