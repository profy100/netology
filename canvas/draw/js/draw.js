'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
let drawling = false;
let curve = [];
let hue = 0;
let previous = 100;
let current = 100;

function changeDimensionCanvas(){
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
	canvas.height = document.documentElement.clientHeight;
	canvas.width = document.documentElement.clientWidth;
}

canvas.addEventListener('mousedown', startPaint);

function startPaint(event){
	curve = [];
	drawling = true;
	curve.push(event.clientX, event.clientY);
}

canvas.addEventListener('mouseup', stopPaint);

function stopPaint(event){
	drawling = false;
	ctx.beginPath();

	if(event.shiftKey){
		hue--;
			if(hue < 0){
				hue = 359
			}
	}else{
		hue++;
			if(hue > 359){
				hue = 0;
			}
	}

	ctx.lineWidth = current;
	if(ctx.lineWidth === 100){
		previous = current;
		current--
	}else if(ctx.lineWidth === 5){
		previous = 5;
		current++
	}else if(previous > current){
		previous--;
		current--;
	}else{
		previous++;
		current++;
	}

	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.strokeStyle = `hsl(${hue},100%,50%)`;
	ctx.moveTo(curve[0], curve[1]);
	for(let i = 2; i < curve.length; i += 2){
		ctx.lineTo(curve[i] , curve[i+1]);
	}

	ctx.stroke();
}

canvas.addEventListener('mousemove', paint);

function paint(event){
	if(drawling){
		curve.push(event.offsetX, event.offsetY);
	}
}
canvas.addEventListener('mouseout', notPaint)

function notPaint(event){
	curve = [];
	drawling = false;
}

canvas.addEventListener('dblclick', clearCanvas);

function clearCanvas(){
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}
window.onresize = changeDimensionCanvas;
changeDimensionCanvas();