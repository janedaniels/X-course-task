
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
  <img src="${image}" alt="books image" width="250"/>
<h2 id="${id}">${title}</h2>
<h3>${author}</h3>
<h4><p>${price} $</p></h4>
<button>View</button>
</li>`).join('');
  element.insertAdjacentHTML('beforeend', markup);
}
createElementList(bookArray, bookList)
// ===========================================класи================================================
bookList.classList.add('catalog-books-list');
// ==== знаходимо колекцію всіх дітей списку
let bookItemsCollection = bookList.children;
console.log(bookItemsCollection);
// перевизначаємо отриману колекцію у масив
bookItemsCollection = Array.prototype.slice.call(bookItemsCollection);
console.log(bookItemsCollection);
// перебираємо масив дітей і кожному присвоюємо клас + клас дітям дітей
bookItemsCollection.forEach(bookItem => {
  bookItem.classList.add('catalog-book-item', 'list');
  bookItem.children[0].classList.add('catalog-book-img');
  bookItem.children[1].classList.add('catalog-book-title');
  bookItem.children[2].classList.add('catalog-book-author');
  bookItem.children[3].classList.add('catalog-book-price');
  bookItem.children[4].classList.add('catalog-button-view');
});

  console.log(bookItemsCollection);




