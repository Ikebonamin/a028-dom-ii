let adicionaItem = function (event) {
  const containerLista = document.getElementById('container');
  const article = document.createElement('article');
  containerLista.appendChild(article);
  article.classList.add('item');
};

const removeItem = event => {
  event.target.remove();
};
// const containerLista = document.getElementById('container')
//     containerLista.innerHTML += <article class='item' onclick="removeItem(event)"></article>
