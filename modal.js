
const bookList = document.querySelector(".book-list-js");

const requestURL = "./books.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL, false);
request.send();

const dataBooks = JSON.parse(request.responseText);
  if (request.status === 200) { dataBooks }
    else { console.error(request.statusText) };

// const id = dataBooks.books[0].id;
// const author = dataBooks.books[0].author;
// const price = dataBooks.books[0].price;
// const image = dataBooks.books[0].image;
// const title = dataBooks.books[0].title;
// const level = dataBooks.books[0].level;

const bookArray = dataBooks.books;
console.log(bookArray);

// function createMarkap(element) {
//   return element.innerHTML = `<li>
// <img src="${image}" alt="books image" width="200"/>
// <h2 id="${id}">${title}</h2>
// <h3>${author}</h3>
// <h4><p>Price ${price}</p></h4>
// <button>View</button>
// </li>`
// };


function createElementList(arr, element) {
const markup = arr.map(({ image, id, title, author, price }) => `<li>
  <img src="${image}" alt="books image" width="200"/>
<h2 id="${id}">${title}</h2>
<h3>${author}</h3>
<h4><p>Price ${price}</p></h4>
<button>View</button>
</li>`).join('');
  element.insertAdjacentHTML('beforeend', markup);
}
createElementList(bookArray, bookList)