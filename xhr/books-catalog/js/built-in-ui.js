/* Данный JS код */

// Регулируем видимость карточки
function toggleCardVisible () {
 document.getElementById('content').classList.toggle('hidden');
 document.getElementById('card').classList.toggle('hidden');
}


document.getElementById('close').addEventListener('click', toggleCardVisible);

document.getElementById('content').addEventListener('click', (event) => {
    let target = null;
    if (event.target.tagName === 'LI') {
        target = event.target;
    }
    if (event.target.parentNode.tagName === 'LI') {
        target = event.target.parentNode;
    }

    if (target) {
      toggleCardVisible();
      document.getElementById('card-title').innerHTML = target.dataset.title;
      document.getElementById('card-author').innerHTML = target.dataset.author;
      document.getElementById('card-info').innerHTML = target.dataset.info;
      document.getElementById('card-price').innerHTML = target.dataset.price;
    }
});

// Получение данный от сервера 
const request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.open('GET', 'https://neto-api.herokuapp.com/book/')
request.send();

function onLoad(){
  if(request.status === 200){
    let bookCatalog = '';
    
    try{
      bookCatalog = JSON.parse(request.responseText);
    }catch(e){
      console.log('Не валидный JSON')
      console.log(`${e.name}`);
      console.log(`${e.type}`);
    }
  for(const book of bookCatalog){
      let newBook = document.createElement('li');

      let img = document.createElement('img');
      img.src = book.cover.small;
      newBook.appendChild(img);

      newBook.dataset.title = book.title;
      newBook.dataset.author = book.author.name;
      newBook.dataset.info = book.info;
      newBook.dataset.price = book.price;

      document.getElementsByTagName('ul')[0].appendChild(newBook);
    }
}
}

