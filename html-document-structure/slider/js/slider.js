'use strict';

const sliderButton = document.getElementsByClassName('slider-nav')[0];
console.log(sliderButton);
const buttons = Array.from(sliderButton.children);
console.log(buttons);
const slider = document.getElementsByClassName('slides')[0];
console.log(slider);

slider.children[0].classList.add('slide-current');

let activeElement = document.querySelector('.slide-current');

for(let item of buttons){
	item.addEventListener('click', chooseImage);
}

function chooseImage(event){
	event.preventDefault();
	activeElement.classList.remove('slide-current');
	console.log(event.target.dataset.action);
	console.log(activeElement.lastElementSibling);
	switch(event.target.dataset.action){
		case 'prev':
			activeElement = activeElement.previousElementSibling;
			break;

		case 'next':
			activeElement = activeElement.nextElementSibling;
			break;

		case 'first':
			activeElement = activeElement.firstElementSibling;
			break;

		case 'last':
			activeElement = activeElement.lastElementSibling;
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