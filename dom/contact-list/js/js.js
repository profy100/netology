'use strict';
 let list = loadContacts();

 try{
 	list = JSON.parse(list);
 }catch(e){
 	console.log('Не валидный JSON код');
 	console.log(e.name);
 	console.log(e.message);
 }

 let contactsList = document.getElementsByClassName('contacts-list')[0];
 contactsList.innerHTML = '';

 for(let i = 0; i < list.length; i++){
 	let newLi = document.createElement('li');
 	newLi.dataset.email = list[i].email
 	newLi.dataset.phone = list[i].phone
 	newLi.innerHTML = `<strong> ${list[i].name} </strong>`
 	contactsList.appendChild(newLi);
 }
 