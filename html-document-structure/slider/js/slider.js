'use strict';

const sliderButton = document.getElementsByClassName('slider-nav')[0];

const buttons = Array.from(sliderButton.children);

const slider = document.getElementsByClassName('slides')[0];


slider.children[0].classList.add('slide-current');

let activeElement = document.querySelector('.slide-current');
console.log(activeElement);

for(let item of buttons){
	item.addEventListener('click', chooseImage);
}

function chooseImage(event){
	event.preventDefault();

	console.log(event.target.classList.contains('disabled'));
	console.log(activeElement.lastElementSibling);
	console.log(activeElement);
	activeElement.classList.remove('slide-current');
	console.log(event.target.dataset.action);
	switch(event.target.dataset.action){
		case 'prev':
			activeElement = activeElement.previousElementSibling;
			break;

		case 'next':
			activeElement = activeElement.nextElementSibling;
			break;

		case 'first':
			activeElement = slider.firstElementChild;
			break;

		case 'last':
			activeElement = slider.lastElementChild;
			break;	
	}
	activeElement.classList.add('slide-current');

	updateButtons();
}

function updateButtons() {
	for(const item of sliderButton.children){
		item.classList.remove('disabled');
	}

	if(activeElement === slider.children[0]){
		sliderButton.children[0].classList.add('disabled');
		sliderButton.children[2].classList.add('disabled');
	}
	let i = slider.children.length - 1;
	if(activeElement === slider.children[i]){
		sliderButton.children[1].classList.add('disabled');
		sliderButton.children[3].classList.add('disabled');
	}

}

updateButtons();