'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.addEventListener('click', changeStarSky);
canvas.style.backgroundColor = '#000';
function changeStarSky(){
	const numberStar = (200 + Math.random() * 200).toFixed();
	const starColour = ['#ffffff', '#ffe9c4', '#d4fbff'];
	const PI = Math.PI;
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
	for(let i = 0; i < numberStar; i++){
		let starSize = (Math.random() * 1.1).toFixed(1);
		let x = (Math.random() * canvas.clientWidth).toFixed();
		let y = (Math.random() * canvas.clientHeight).toFixed();

		ctx.beginPath();
		ctx.fillStyle = starColour[Math.floor(Math.random() * starColour.length)];
		ctx.globalAlpha = Math.random() * 0.8;
		ctx.arc(x, y, starSize, 0 , 2 * PI);
		ctx.fill()
	}

}

changeStarSky();