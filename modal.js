// ========= ІНПУТ ПОШУКУ===================


// window.onload = () => {

// }



const addClassListWithTimeout = (id, className, timeout) => {
  setTimeout(() => {
    document.getElementById(id).classList.add(className)
  }, timeout)
}
const removeClassListWithTimeout = (id, className, timeout) => {
  setTimeout(() => {
    document.getElementById(id).classList.remove(className)
  }, timeout)
}
const addClassListWithOutTimeout = (id, className) => {
    document.getElementById(id).classList.add(className)
}
const removeClassListWithOutTimeout = (id, className) => {
    document.getElementById(id).classList.remove(className)
  }








// визначаємо контейнер для каталогу книг
const bookList = document.querySelector(".book-list-js");
bookList.classList.add('catalog-books-list');
bookList.classList.add('list');
// формуємо запит на отримання даних з локального json файлу 
const requestURL = "./books.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL, false);
request.send();

const dataBooks = JSON.parse(request.responseText);
  if (request.status === 200) { dataBooks }
    else { console.error(request.statusText) };
// виймаємо масив об'єктів з отриманого об'екту 
const bookArray = dataBooks.books;
const imgAlt = "./images/picture_not_found.png";
// функція для отримання розмітки каталогу, передаємо масив і елемент що треба наповнити
function changeImg(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].image === "") {
      arr[i].image = imgAlt;
    }
  }
 return arr;
}
changeImg(bookArray)

function createElementList(arr) {
  return arr.map(({ image, id, title, author, price }) => `<li class="catalog-book-item">
  <img src="${image}" alt="books image" width="250" class="catalog-book-img"/>
<h2 id="${id}" class="catalog-book-title">${title}</h2>
<h3 class="catalog-book-author">${author}</h3>
<h4 class="catalog-book-price"><p>${price} $</p></h4>
<button class="catalog-button-view">View</button>
</li>`).join('');
}
// вставляємо в документ
bookList.insertAdjacentHTML('beforeend', createElementList(bookArray));

createElementList(bookArray, bookList)




// ===========================================класи================================================

// ==== знаходимо колекцію всіх дітей списку
// let bookItemsCollection = bookList.children;

// // перевизначаємо отриману колекцію у масив
// bookItemsCollection = Array.prototype.slice.call(bookItemsCollection);

// перебираємо масив дітей і кожному присвоюємо клас + клас дітям дітей
// bookItemsCollection.forEach(bookItem => {
//   bookItem.classList.add('catalog-book-item', 'list');
//   bookItem.children[0].classList.add('catalog-book-img');
//   bookItem.children[1].classList.add('catalog-book-title');
//   bookItem.children[2].classList.add('catalog-book-author');
//   bookItem.children[3].classList.add('catalog-book-price');
//   bookItem.children[4].classList.add('catalog-button-view');
// });


// ===========================ПОШУК ТА ФІЛЬТР==================================
// ==== ІНПУТ====
let inputSearch = document.getElementById('search');
inputSearch.addEventListener("input", onSearch);

function onSearch(evt) {
  evt.preventDefault();
  const inputSearch = evt.currentTarget.value;
  let searchArray = [];
  for (let i = 0; i < bookArray.length; i++) {
    if (bookArray[i].title.trim().toLowerCase().includes(inputSearch.trim().toLowerCase())) {
      searchArray.push(bookArray[i])};
  }
  bookList.innerHTML = createElementList(searchArray);
  bookList.classList.add('catalog-books-list');
};

  
// ====СЕЛЕКТ=====
const priceTo15 = bookArray.filter(item => item.price < 15.00);
const price15To30 = bookArray.filter(item => item.price >= 15.00 && item.price <= 30.00);
const priceMore30 = bookArray.filter(item => item.price > 30.00);


const priceSelect = document.getElementById('select');
priceSelect.addEventListener("change", onSelect);
let selectArray = [];
// // ========== фільтр по ціні======================
function onSelect(evt) {
  evt.preventDefault();
let priceSelect = evt.currentTarget.value;
  if (priceSelect === "priceMore30") { selectArray = priceMore30; }
  else if (priceSelect === "price15To30") { selectArray = price15To30; }
  else if (priceSelect === "priceTo15") { selectArray = priceTo15; }
  else { selectArray = bookArray };
 bookList.innerHTML = createElementList(selectArray);
  bookList.classList.add('catalog-books-list');
}









// =============================================ВАЛІДАЦІЯ ФОРМИ==================================
// document.addEventListener('DOMContentLoaded', function () {
//   const formSubscribe = document.querySelector('.modal-form');
//   console.log(formSubscribe);
//   formSubscribe.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(formSubscribe);
//     let formData = new formData(formSubscribe);
    
//     if (error === 0) {
//       let response = await fetch('sendmail.php', {
//         method: 'POST',
//         value: formData
//       });
//       if (response.ok) {
//         let result = await response.json;
//         alert(result.message);
//         formSubscribe.reset();
//        }
//       else {alert(error)};
//     }
//     else { alert('Заповніть потрібне поле') }

//     function formValidate(formSubscribe) {
//       let error = 0;
//       let formReq = document.querySelectorAll('._req');
//       for (let i = 0; i < formReq.length, i += 1;) {
//         const input = formReq[i];
//         formRemoveError(input);

    //     if (input.classList.contains('_email')) {
    //       if (emailTest(input)) {
    //         formAddError(input);
    //         error++;
    //       }
    //       else {
    //         if (input.value === '') {
    //           formAddError(input);
    //           error++;
    //         }
    //       }
    //     }

    //   }
    // }
//     return error
//   }

//   function formAddError(input) {
//     input.parentElement.classList.add('_error');
//     input.classList.add('_error');
//   }
//   function formRemoveError(input) {
//     formSubscribe.classList.remove('_error');
//     input.classList.remove('_error');
//   }
//   // перевірка імейлу
//   function emailTest(input) {
//     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//   }
// })




