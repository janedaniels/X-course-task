// ========= ІНПУТ ПОШУКУ===================


window.onload = () => {
  initialUIsetup();
}

const initialUIsetup = () => {
  document.getElementById("search").addEventListener("mouseover", () => addClassListWithTimeout("searchLabel", "hovered", 500));
  document.getElementById("search").addEventListener("mouseout", () => removeClassListWithTimeout("searchLabel", "hovered", 500));
}

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
// функція для отримання розмітки каталогу, передаємо масив і елемент що треба наповнити
function createElementList(arr, element) {
const markup = arr.map(({ image, id, title, author, price }) => `<li>
  <img src="${image}" alt="books image" width="250"/>
<h2 id="${id}">${title}</h2>
<h3>${author}</h3>
<h4><p>${price} $</p></h4>
<button>View</button>
</li>`).join('');
// вставляємо в документ
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




