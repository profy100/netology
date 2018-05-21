'use strict';

const tabs = document.querySelector('.tabs-nav')
console.log(tabs);
const article = document.getElementsByClassName('tabs-content')[0].children;
console.log(article);

console.log(tabs.children[0]);

for(let i = 0; i < article.length; i++){
	let example = tabs.children[0].cloneNode(true);
	example.children[0].textContent = article[i].dataset.tabTitle;
	example.children[0].classList.add(article[i].dataset.tabIcon)
	tabs.appendChild(example);
}

tabs.removeChild(tabs.children[0]);

const tab = Array.from(tabs.children);

tabs.children[0].classList.add('ui-tabs-active');

for(let item of article){
	item.classList.add('hidden');

	if(document.querySelector('.ui-tabs-active').textContent === item.dataset.tabTitle){
		item.classList.remove('hidden');
	}	
}



for(let item of tab){
	item.addEventListener('click', chooseTab)
}

function chooseTab(event){
	let activeTab = document.querySelector('.ui-tabs-active');
	activeTab.classList.remove('ui-tabs-active')
	event.target.classList.add('ui-tabs-active');
	for(let item of article){
		item.classList.add('hidden');

		if(event.target.textContent === item.dataset.tabTitle){
			item.classList.remove('hidden');
		}
	}
}