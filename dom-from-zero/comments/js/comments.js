'use strict';

function showComments(list) {
  //console.log(list);
  const commentsContainer = document.querySelector('.comments');
  commentsContainer.appendChild(
    browserTemplateEngine(list.map(comment => createComment(comment))));
  
}

function createComment(comment) {
  return {
    tag: 'div',
    cls: 'comment-wrap',
    content: [
        {
          tag: 'div',
          cls: 'photo',
          attrs:{
            title: comment.author.name,  
          },
          content: {
            tag: 'div',
            cls: 'avatar',
            attrs:{ style: 'background-image: url(`${comment.author.pic}`)'}    
          }
        },
        {
          tag: 'div',
          cls: 'comment-block', 
          content:[
            {
              tag: 'p',
              cls: 'comment-text',
              content: comment.text.split('\n').map(item =>{
                return {tag: 'p',
                        content: item}
              })
            },
            {
              tag: 'div',
              cls: 'bottom-comment',
              content:[
                {
                  tag: 'div',
                  content: new Date(comment.date).toLocaleString('ru-Ru')
                },
                {
                  tag: 'ul',
                  cls: 'comment-actions',
                  content:[
                    {
                      tag: 'li',
                      cls: 'complain',
                      content: 'Пожаловаться'
                    },
                    {
                      tag: 'li',
                      cls: 'reply',
                      content: 'Ответить'
                    }
                  ]
                }
              ]
            }
          ]       
        }
    ]     
  }



 /* `<div class="comment-wrap">
    <div class="photo" title="${comment.author.name}">
      <div class="avatar" style="background-image: url('${comment.author.pic}')"></div>
    </div>
    <div class="comment-block">
      <p class="comment-text">
        ${comment.text.split('\n').join('<br>')}
      </p>
      <div class="bottom-comment">
        <div class="comment-date">${new Date(comment.date).toLocaleString('ru-Ru')}</div>
        <ul class="comment-actions">
          <li class="complain">Пожаловаться</li>
          <li class="reply">Ответить</li>
        </ul>
      </div>
    </div>
  </div>`*/
}

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

    var element = document.createElement(block.tag || 'div');
    [].concat(block.cls || []).forEach(className => element.classList.add(className))
    if(block.attrs){
      Object.keys(block.attrs).forEach(key => element.setAttribute(key, block.attrs[key]))
    }

    element.appendChild(browserTemplateEngine(block.content));
    return element
  }

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);
