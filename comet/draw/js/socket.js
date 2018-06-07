'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/draw');

window.editor.addEventListener('update', updateCanvas);

function updateCanvas(event){
	var ctx = event.canvas.getContext("2d")
	const image = ctx.getImageData(0, 0, 650, 800);
	
	const binary = Uint8Array.from(image.data);
	connection.send(binary.buffer);
}
