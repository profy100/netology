'use strict'

const tabs = document.querySelectorAll('.tabs nav a');


for(const tab of tabs){
	tab.addEventListener('click', pushOnTab);
}

function pushOnTab(event){
	event.preventDefault();
	
	const request = new XMLHttpRequest();
	request.addEventListener('load', onLoad);
	request.addEventListener('loadstart', seeLoader);
	request.addEventListener('loadend', seeLoader);
	request.open('Get', this.getAttribute('href'));
	request.send()
	
	for(const tab of tabs){
		tab.classList.remove('active');
	}
	this.classList.add('active');

	function onLoad(){
		console.log(request.status);
		if(request.status === 200){
			let response = request.responseText;
			document.getElementById('content').innerHTML = response;
			
		}
	}

	function seeLoader(){
		console.log('загрузка');
		document.getElementById('preloader').classList.toggle('hidden');
	}
}