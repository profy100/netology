'use strict';
console.log(window);
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
console.log(canvas);
function changeDimensionCanvas(){
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
	canvas.height = document.documentElement.clientHeight;
	canvas.width = document.documentElement.clientWidth;
	console.log(canvas);
}

window.onresize = changeDimensionCanvas;
changeDimensionCanvas();