'use strict';

const clap = document.getElementsByClassName('drum-kit__drum');

for(let i of clap){
	i.onclick = playSound;
}
console.log(clap);
function playSound(){
	this.getElementsByTagName('audio')[0].currentTime = 0;
	this.getElementsByTagName('audio')[0].play();
}

