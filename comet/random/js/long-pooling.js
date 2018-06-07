'use strict';

/*const requestLongPooling = new XMLHttpRequest();

requestLongPooling.addEventListener('load', onload);

requestLongPooling.open('GET', 'https://neto-api.herokuapp.com/comet/long-pooling')
requestLongPooling.send();


function onload(){
	if(requestLongPooling.status === 200){
		let request = requestLongPooling.responseText;
		console.log(request);
		const pooling = Array.from(document.getElementsByClassName('long-pooling')[0].children);
		console.log(pooling);
		for(const item of pooling){
			item.classList.remove('flip-it');
			console.log(item.textContent);
			console.log(request);
			if(item.textContent === request){
				item.classList.add('flip-it');
			}
		}
	}
}
*/
function subscribe(url) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState != 4) return;
    
    if (this.status == 202) {
      let request = this.responseText;
	  const pooling = Array.from(document.getElementsByClassName('long-pooling')[0].children);
		
		for(const item of pooling){
			item.classList.remove('flip-it');
			
			if(item.textContent === request.replace(/\s/g, '')){
				item.classList.add('flip-it');
			}
		}	
    } 
    subscribe('https://neto-api.herokuapp.com/comet/long-pooling');
  }
  xhr.open("GET", url, true);
  xhr.send();
}

subscribe('https://neto-api.herokuapp.com/comet/long-pooling');