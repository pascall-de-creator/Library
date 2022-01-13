function addBook() {
  var el = document.getElementById("mask")
  var bookTitleInput = document.getElementById("titleInput")
  var authorInput = document.getElementById("authorInput")
  var pagesInput = document.getElementById("pagesInput")
  var pubInput = document.getElementById("pubInput")
  var books = document.getElementById("books")
  var closeBtn = document.createElement("span");
  var book = document.createElement("div");
  var bookTitle = document.createElement("h2");
  var bookAuthor = document.createElement("p");
  var pages = document.createElement("p");
  var publishedDate = document.createElement("p");
  var icheckbox = document.createElement("input");  

  book.className = "card"
  closeBtn.className = "closeBtn"
  icheckbox.type = "checkbox"
  
  books.appendChild(book)
  book.appendChild(closeBtn)
  book.appendChild(bookTitle)
  book.appendChild(bookAuthor)
  book.appendChild(pages)
  book.appendChild(publishedDate)
  book.appendChild(icheckbox)
  
  var card = document.getElementsByClassName("card");
  var cardCloseBtn = card.firstChild;

  function deleteBook() {
      // var attribute = this.getAttribute("data-myattribute");
      this.parentElement.style.display = "none";
  };
  function changeColor() {
      if(this.checked == false){
        this.parentElement.className = "card"
      } else {
        this.parentElement.classList.add("read");
      }
  };

  for (var i = 0; i < card.length; i++) {
    card[i].lastChild.addEventListener('click', changeColor);
    card[i].firstChild.addEventListener('click', deleteBook);
  }
  
  if (bookTitleInput.value == "" || authorInput.value == "" || pagesInput.value == "" || pubInput.value == ""){
    alert("You must fill all inputs")
    book.style.display = "none";
    el.style.display = "none";
    bookTitleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    pubInput.value = ""
  }
  else {
    bookTitle.innerText = bookTitleInput.value
    bookAuthor.innerText = `By: ${authorInput.value}`
    pages.innerText = `Number of pages: ${pagesInput.value}`
    publishedDate.innerText = `Published: ${pubInput.value}`
    closeBtn.innerText = "✖"
    el.style.display = "none";
    
    bookTitleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    pubInput.value = ""
  }
}
function showPrompt(){
  var el = document.getElementById("mask")
  el.style.display = "flex";
}

function closePrompt(){
  var el = document.getElementById("mask")
  el.style.display = "none"
}

function sortBooks(direction){
  if(direction == 1){
    var card = document.getElementsByClassName("card");
    for(var i = 0; i < card.length; i++)
    {
      card[i].style.order = i
    }
  } else {
    var card = document.getElementsByClassName("card");
    for(var i = 0; i < card.length; i++)
    {
      card[i].style.order = card.length-i
    }
  }
}