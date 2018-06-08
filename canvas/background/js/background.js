'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
const x = canvas.width = window.innerWidth;
const y = canvas.height = window.innerHeight;

const numberObjects = Math.floor(50 + Math.random() * 150);
let arrObj = [];
const move = [nextPoint1 , nextPoint2];

function nextPoint1(x, y, time) {
  return {
    x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
    y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
  };
}

function nextPoint2(x, y, time) {
  return {
    x: x + Math.sin((x + (time / 10)) / 100) * 5,
    y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
  }
}

for(let i = 0 ; i < numberObjects; i++){
	let size = Number((0.1 + Math.random() * 0.5).toFixed(1));

	let obj = {
			x: Math.round(Math.random() * x),
			y: Math.round(Math.random() * y),
			size: size,
			thick: 5 * size,
			move: move[Math.round(Math.random())]
		}
	if(i % 2 === 0){
		obj.radius = Number((12 * size).toFixed(1));	
	}else{
		obj.side = Number((20 * size).toFixed(1));
		obj.angle = Math.round(Math.random() * 360);
		obj.speed = Number((-0.2 + Math.random() * 0.4).toFixed(1));
	}
	arrObj.push(obj);
}

function createPaint(){
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
	for(let obj of arrObj){
		if(obj.radius){
			const coordinate = obj.move(obj.x, obj.y, Date.now());
			ctx.beginPath();
			ctx.lineWidth = obj.thick;
			ctx.imageSmoothingEnabled = false;
			ctx.strokeStyle = '#fff';
			ctx.arc(coordinate.x, coordinate.y, obj.radius, 0, 2 * Math.PI);
			ctx.stroke();
		}else{
			const coordinate = obj.move(obj.x, obj.y, Date.now());
			ctx.beginPath();
			ctx.lineWidth = obj.thick;
			obj.angle += obj.speed
			 
			if(obj.angle > 360){
				obj.angle = obj.angle - 360;
			}

			if(obj.angle < 0){
				obj.angle = 360 + obj.angle;
			}
			const x1 = obj.side * Math.cos(obj.angle);
			const y1 = obj.side * Math.sin(obj.angle);
			const x2 = y1;
			const y2 = x1;

			ctx.strokeStyle = '#fff';

			ctx.moveTo(coordinate.x + x1, coordinate.y + y1);
			ctx.lineTo(coordinate.x - x1, coordinate.y - y1);
			ctx.moveTo(coordinate.x + x2, coordinate.y - y2);
			ctx.lineTo(coordinate.x - x2, coordinate.y + y2);

			ctx.stroke();
		}
	}
}
setInterval(function(){
	createPaint();
},25);
