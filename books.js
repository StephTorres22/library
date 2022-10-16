/* 
LIBRARY

-Create form - done, basic html form DONE

-Look at default button behaviour of buttons inside of form

-Validation, inputs must be entered 

-Data from form to be submitted as an instance of Book

    -Access form data, getElementById and innertext?
    eg bookTitle.value
    -Need to save data from form as an instace of Book, 
    -Onclicklistener on submit button to get values 

    -func add book

-Each instance of Book to be added to library array

-Each index of library to be displayed 

    for i in myLibrary create a DOM element

-Should be able to add to library, search/filter through library, and delete a book from library.

-Shouldn't be able to add a book with blank data

-Need to style form so that it looks decent




/* */
const form = document.getElementById('bookDetails')
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const pageNo = document.getElementById('pageNo');
const addBookButton = document.querySelector('.addBookButton');
const submitBookButton = document.querySelector('#addBook');
const library = document.querySelector('.library');
const modal = document.querySelector('#modal'); //targerts the dialog tag in html
//dialog tag has loads of functionality straightaway.
const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
    modal.close();
})

addBookButton.addEventListener('click', () => {
    modal.showModal();
}) 

let myLibrary = []


class Book{

    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    bookDisplay(){
        console.log(`${this.title}, ${this.author}, ${this.pages}`)
        let newBook = document.createElement('div')
        library.appendChild(newBook);
        newBook.classList.add('book');
        let pTitle = document.createElement('p');
        let pAuthor = document.createElement('p');
        let pPages = document.createElement('p');
        let readDiv = document.createElement('div');
        readDiv.classList.add('readBox');
        let pRead = document.createElement('p');
        let readCheck = document.createElement('input');
        readCheck.setAttribute('type', 'checkbox');

        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.innerText = 'Remove Book'
        removeButton.addEventListener('click', () => {
            myLibrary.splice(Book)
            library.removeChild(newBook)
        });


        newBook.appendChild(pTitle);
        newBook.appendChild(pAuthor);
        newBook.appendChild(pPages);//there must be a more concise way to do this
        newBook.appendChild(readDiv);
        
        readDiv.appendChild(pRead);
        readDiv.appendChild(readCheck);
        readCheck.addEventListener('click', () =>{
            readCheck.setAttribute('checked', 'checked')
        })

        
        newBook.appendChild(removeButton);
        pTitle.innerText = "Title: " + `${this.title}`;
        pAuthor.innerText = "Author: " + `${this.author}`;
        pPages.innerText = "Number of pages: " + `${this.pages}`;      
        pRead.innerText = "Read?: ";

        
    }
}

        const addBookToLibrary = () => {

        let newBook = new Book(`${bookTitle.value}`, `${bookAuthor.value}`, parseInt(pageNo.value))
        myLibrary.push(newBook);
        newBook.bookDisplay();

    } 
    
    const checkFields = () => {
        
    }

    submitBookButton.addEventListener('click', () => {
        //coded in validation as can't seem to get html required attribute to work.
       if(`${bookTitle.value}` == '' && `${bookTitle.value == ''}`){
            alert('Please fill in required fields')
        }else if (`${bookTitle.value}` !== '' && `${bookAuthor.value}` !== ''){ 
        addBookToLibrary();   
        modal.close();
        form.reset();
        console.log(myLibrary);
        }
   })


