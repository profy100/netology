'use strict';

function createElement(node){
	console.log(node);
	console.log(typeof node === 'object');
	if (typeof node === 'string') {
   		 return document.createTextNode(node);
	}

	return browserTemplateEngine(node);
  	

	function browserTemplateEngine(block){
    if((block === undefined) || (block === null) || (block === false)){
      return document.createTextNode('');
    }

    if((typeof block === 'string') || (typeof block === 'number') ||  block === true){
      return document.createTextNode(block);
    }

    if(Array.isArray(block)){
      return block.reduce((f, elem) =>{
          f.appendChild(browserTemplateEngine(elem));
          return f
      }, document.createDocumentFragment())
    }

    var element = document.createElement(block.name || 'div');
    [].concat(block.prop || []).forEach(className => element.classList.add(className))


    element.appendChild(browserTemplateEngine(block.childs));
    return element
  }
}  
