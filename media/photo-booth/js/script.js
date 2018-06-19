'use strict';

const constraints = {video: true, audio: false};
const main = document.getElementsByClassName('container')[0];
const list = document.getElementsByClassName('list')[0];
const app = document.getElementsByClassName('app')[0];
const controls = document.getElementsByClassName('controls')[0];
const errorMessage = document.getElementById('error-message');
const videoCreate = document.createElement('video');
const audioCreate = document.createElement('audio');
const button = document.querySelector('.controls button');
console.log(button);

videoCreate.width = app.clientWidth;
videoCreate.autoplay = true;
app.appendChild(videoCreate);
const video = document.getElementsByTagName('video')[0];
controls.classList.add('visible');

audioCreate.src = './audio/click.mp3';
app.appendChild(audioCreate);
console.log(app);
console.log(video);

function requestAccess(){
	return navigator.mediaDevices.getUserMedia(constraints);
} 

function view(){
	requestAccess()
		.then((str) =>{
			 const stream = str;
			video.src = URL.createObjectURL(stream);
		}).catch((err) => {
			errorMessage.textContent = 'Не удалось получить доступ к камере';
			errorMessage.classList.add('visible');
		})
}

button.addEventListener('click', makePhoto);

function makePhoto(event){
	document.getElementsByTagName('audio')[0].play();
	const image = document.createElement('img');
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	ctx.drawImage(video, 0, 0);
	image.src = canvas.toDataURL();
	list.appendChild(browserTemplateEngine(photoTemplate(image)))
	const materialIcons = document.querySelectorAll('.list figure');
	console.log(materialIcons);
	for(const item of materialIcons){
		item.addEventListener('click', pushIcon);
	} 


}

function photoTemplate(image){
	return {
		tag: 'figure',
		content: [
			{
				tag: 'img',
				attrs: {
					src: image.src
				}
			},
			{
				tag: 'figcaption',
				content:[
					{
						tag: 'a',
						attrs: {
							href: image.src,
							download: 'snapshot.png'
						},
						content:{
							tag: 'i',
							cls: 'material-icons',
							content: 'file_download'
						}
					
					},
					{
						tag: 'a',
						content:{
							tag: 'i',
							cls: 'material-icons',
							content: 'file_upload'
						}
					},
					{
						tag: 'a',
						content:{
							tag: 'i',
							cls: 'material-icons',
							content: 'delete'
						}
					}
				]
			}

		]
	}
}

function browserTemplateEngine(block){
	if(block === undefined || block === null || block === false){
		return document.createTextNode('');
	}

	if((typeof block === 'string') || (typeof block === 'number') ||  block === true){
		return document.createTextNode(block);
	}

	if(Array.isArray(block)){
		return block.reduce((f, elem) => {
			f.appendChild(browserTemplateEngine(elem));
			return f
		},document.createDocumentFragment())
	}

	var element = document.createElement(block.tag || 'div');
	[].concat(block.cls || []).forEach(className => element.classList.add(className))
	if(block.attrs){
		Object.keys(block.attrs).forEach(key => element.setAttribute(key, block.attrs[key]))
	}

	element.appendChild(browserTemplateEngine(block.content))
	return element
}

function pushIcon(event){
	console.log(event);	
	console.log(event.currentTarget);
	if(event.target.textContent === 'file_download'){
		event.target.parentElement.removeChild(event.target);
	}

	if(event.target.textContent === 'file_upload'){
		event.preventDefault()
		const image = event.currentTarget.children[0].src;
		const formData = new FormData();
		formData.append('image', image);
		const xhr = new XMLHttpRequest();
		xhr.addEventListener('load', onLoad);
		xhr.open('POST', 'https://neto-api.herokuapp.com/photo-booth');
		xhr.setRequestHeader('Content-Type', 'multipart/form-data');
		xhr.send(formData);
		event.target.parentElement.removeChild(event.target);

		function onLoad(event){
			
			if(xhr.status === 200){
				console.log(xhr.responseText);
			}
		}		
	}
	if(event.target.textContent === 'delete'){
		event.preventDefault()
		list.removeChild(event.currentTarget);
	}
}

function onLoad(event){
	if(xhr.status === 200){
		console.log(xhr.responseText);
	}
}
/*<figure>
  <img src="path/to/pic.png">
  <figcaption>
    <a href="path/to/pic.png" download="snapshot.png">
      <i class="material-icons">file_download</i>
    </a>
    <a><i class="material-icons">file_upload</i></a>
    <a><i class="material-icons">delete</i></a>
  </figcaption>
</figure>*/
view();