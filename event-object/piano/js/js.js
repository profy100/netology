'use strict'

const piano = document.getElementsByClassName('set middle')[0];
const buttonPiano = piano.getElementsByTagName('li');
const arrayButtonPiano  = Array.from(buttonPiano);
const sound = {lower: ['sounds/lower/first.mp3' ,
					   'sounds/lower/second.mp3' ,
					   'sounds/lower/third.mp3' ,
					   'sounds/lower/fourth.mp3' ,
					   'sounds/lower/fifth.mp3'],
			   higher: ['sounds/higher/first.mp3' ,
					   'sounds/higher/second.mp3' ,
					   'sounds/higher/third.mp3' ,
					   'sounds/higher/fourth.mp3' ,
					   'sounds/higher/fifth.mp3'],
			   middle: ['sounds/middle/first.mp3' ,
					   'sounds/middle/second.mp3' ,
					   'sounds/middle/third.mp3' ,
					   'sounds/middle/fourth.mp3' ,
					   'sounds/middle/fifth.mp3']
}
let key = '';

function playPiano(event){
	let index = arrayButtonPiano.indexOf(this);
	let button = this.getElementsByTagName('audio')[0];
	if(key === 'lower'){
		button.src = sound.lower[index];
		button.currentTime = 0;
		button.play();
	}else if(key === 'higher'){
		button.src = sound.higher[index];
		button.currentTime = 0;
		button.play();
	}else{
		button.src = sound.middle[index];
		button.currentTime = 0;
		button.play();
	}	
}

function push(event){
	if(event.shiftKey && event.repeat){
		key = 'lower';
	}else if(event.altKey && event.repeat){
		key = 'higher';
	}	
}

function pull(){
	key = 'middle';
}

document.addEventListener('keydown', push);
document.addEventListener('keyup', pull);
for(const button of arrayButtonPiano){
	button.addEventListener('click', playPiano);
	console.log(button);
}

