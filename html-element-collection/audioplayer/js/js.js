'use strict';

const mediaPlayer = document.getElementsByClassName('mediaplayer')[0];
const audioPlayer = mediaPlayer.getElementsByTagName('audio')[0];


const buttonPlay = document.getElementsByClassName('playstate')[0];

const play = document.getElementsByClassName('fa-play')[0]
const pause = document.getElementsByClassName('fa-pause')[0];


function playMusic(){	
	if(audioPlayer.paused === false){
		pause.style.display = 'none';
		play.style.display = 'block';
		audioPlayer.pause();
	}else if(audioPlayer.paused === true){
		play.style.display = 'none';
		pause.style.display = 'block';
		audioPlayer.play();
	}
}

buttonPlay.onclick = playMusic;

const buttonStop = document.getElementsByClassName('stop')[0];

function stopMusic(){
	audioPlayer.currentTime = 0;
	pause.style.display = 'none';
	play.style.display = 'block';
	audioPlayer.pause();
}
buttonStop.onclick = stopMusic;

const buttonNext = document.getElementsByClassName('next')[0];
const buttonBack = document.getElementsByClassName('back')[0];

let index = 0
const arrayMusic = [
	'mp3/LA Chill Tour.mp3',
	'mp3/LA Fusion Jam.mp3',
	'mp3/This is it band.mp3'
]

function getNextSong(){
	index++;
	if(arrayMusic[index] === undefined){
		index = 0
	}
	audioPlayer.src = arrayMusic[index];
	let nameMusic = arrayMusic[index].replace(/^mp3\//ig, "");
	nameMusic = nameMusic.replace(/\.mp3$/ig, '');
	document.getElementsByClassName('title')[0].title = nameMusic;
	playMusic();
}

function getBackSong(){
	index--;
	if(index === -1){
		index = arrayMusic.length - 1;
	}

	audioPlayer.src = arrayMusic[index];
	let nameMusic = arrayMusic[index].replace(/^mp3\//ig, "");
	nameMusic = nameMusic.replace(/\.mp3$/ig, '');
	document.getElementsByClassName('title')[0].title = nameMusic;
	playMusic();
}
buttonNext.onclick = getNextSong;
buttonBack.onclick = getBackSong;