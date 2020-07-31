import React from 'react';

import ReactDOMServer from 'react-dom/server';

import App from './App';

const book= {
  'title': 'Книжка',
  'briefDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, architecto?',
  'numberOfPages': 15,
  'language': 'русский',
  'percentageOfProgress': 78,
  'cover': 'https://images.penguinrandomhouse.com/cover/9781400079988',
  'author': {
    'name': 'Л.Н. Толстой',
    'email': 'tolsty@mail.ru',
    'avatarLink': 'https://www.gstatic.com/tv/thumb/persons/218434/218434_v9_ba.jpg',
    'aboutTheAuthor': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis cupiditate adipisci nihil accusantium? Molestiae accusantium possimus veritatis aliquid ipsam!'
  },
  'minimalPrice': 1,
  'preferablePrice': 2,
  'collectedAmount': 3,
  'expectedAmount': 4
}

const author = {
  'name': 'Это компонент карточки автора'
}

const render = () => ReactDOMServer.renderToString(<App book={book} author={author}/>);

export default render;