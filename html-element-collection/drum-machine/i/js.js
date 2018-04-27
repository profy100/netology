'use strict';

const clap = document.getElementsByClassName('drum-kit__drum');

for(let i of clap){
	i.onclick = playSound;
}

function playSound(){
	this.getElementsByTagName('audio')[0].play();
}

