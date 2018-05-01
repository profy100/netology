'use strict';

let word = ''

function pushKey(event){
	if(event.code === 'KeyT' && event.ctrlKey && event.altKey){	
	document.getElementsByTagName('nav')[0].classList.toggle('visible');
 	}

 	word += event.code
 	const isWord = /(KeyYKeyTKeyNKeyJKeyKKeyJKeyUKeyBKeyZ)/

 	if(isWord.test(word)){
 		document.getElementsByClassName('secret')[0].classList.add('visible');
 	}
}

document.addEventListener('keydown', pushKey);