'use strict';

const eye = document.querySelector('.big-book__pupil');

window.addEventListener('mousemove', watch);


 function watch(event){
 	const w = document.documentElement.clientWidth;
	const h = document.documentElement.clientHeight;

 	let x = (((event.clientX * 60) / w) - 30);
 	let y = (((event.clientY * 60) / h) - 30);
 	
 	eye.style.setProperty('--pupil-x', x)
 	eye.style.setProperty('--pupil-y', y)
 	const x1 = (event.clientX * 60) / w;
 	const y1 = (event.clientY * 60) / h; 
 	
 	if(((x1 < 60 && x1 >= 50) && (y1 < 60 && y1 >= 50)) 
 		|| ((x1 < 10 && x1 >= 0) && (y1 < 60 && y1 >= 50)) 
 		|| ((x1 < 10 && x1 >= 0) && (y1 < 10 && y1 >= 0))
 		|| ((x1 < 60 && x1 >= 50) && (y1 < 10 && y1 >= 0))
 		|| ((x1 < 60 && x1 >= 50) && (y1 < 60 && y1 >= 50))
 		|| ((x1 < 40 && x1 >= 20) && (y1 < 10 && y1 >= 0))
 		|| ((x1 < 40 && x1 >= 20) && (y1 < 60 && y1 >= 50))
 		|| ((x1 < 10 && x1 >= 0) && (y1 < 40 && y1 >= 20)) 
 		|| ((x1 < 60 && x1 >= 50) && (y1 < 40 && y1 >= 20))) {
 		document.querySelector('.big-book__pupil').style.setProperty('--pupil-size', 1);
 	}

 	if(((x1 < 50 && x1 >= 40) && (y1 < 50 && y1 >= 40)) 
 		|| ((x1 < 20 && x1 >= 10) && (y1 < 50 && y1 >= 40)) 
 		|| ((x1 < 20 && x1 >= 10) && (y1 < 20 && y1 >= 10))
 		|| ((x1 < 50 && x1 >= 40) && (y1 < 20 && y1 >= 10))
 		|| ((x1 < 50 && x1 >= 40) && (y1 < 50 && y1 >= 40))
 		|| ((x1 < 40 && x1 >= 20) && (y1 < 20 && y1 >= 10))
 		|| ((x1 < 40 && x1 >= 20) && (y1 < 50 && y1 >= 40))
		|| ((x1 < 20 && x1 >= 10) && (y1 < 40 && y1 >= 20)) 
 		|| ((x1 < 50 && x1 >= 40) && (y1 < 40 && y1 >= 20))) {
 		document.querySelector('.big-book__pupil').style.setProperty('--pupil-size', 2);
 	}

 	if((x1 < 40 && x1 >= 20) && (y1 < 40 && y1 >= 20)) {
 		document.querySelector('.big-book__pupil').style.setProperty('--pupil-size', 3);
 	}
 	
 	x += 'px';
 	y += 'px';
 	eye.style.setProperty('--pupil-x', x)
 	eye.style.setProperty('--pupil-y', y)
 
 }