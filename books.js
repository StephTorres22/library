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




*/
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const pageNo = document.getElementById('pageNo');
const addBookButton = document.getElementById('addBook');
const library = document.querySelector('.library');


function openForm(){
    document.getElementById('bookDetails').style.display = 'block';
    //this changes the forms style from display none to block
    //being invisible to visible.
}

function closeForm(){
    document.getElementById('bookDetails').style.display = 'none';
}




let myLibrary = []

function addBookToLibrary(){

    let Book = {
        title: bookTitle.value,
        author: bookAuthor.value,
        pages: pageNo.value,

        /* watched a Steve Griffith video, in his code he defines the Book object constructor inside his adding function.
        you don't even need to declare the const bookTitle etc at the top can do it straight in the constructor 
        eg. title = document.getElementById('bookTitle').value */


        /* if using oop would functions be defined within the object itself, how would this work
        for calling these functions on a button? */


    }

    myLibrary.push(Book); //adds each new object instance to myLibrary
    document.querySelector('form').reset();//resets the form after each entry.
    console.log(myLibrary); //displays library in console.
   
   
   // library.textContent = JSON.stringify(myLibrary); 
   //this lets you see what objects/data are within myLibrary.

    //split into seperate functions, make it cleaner, eg displayBookData
    
    
    
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
        removeButton.addEventListener('click', function(){
            myLibrary.splice(Book)
            library.removeChild(newBook)
        }); // can this be arrow?

        
        newBook.appendChild(pTitle);
        newBook.appendChild(pAuthor);
        newBook.appendChild(pPages);//there must be a more concise way to do this
        newBook.appendChild(readDiv);
        readDiv.appendChild(pRead);
        readDiv.appendChild(readCheck);
        newBook.appendChild(removeButton);
        pTitle.innerText = "Title: " + `${Book.title}`;//change this to Book.title and remover for loop.
        pAuthor.innerText = "Author: " + `${Book.author}`;
        pPages.innerText = "Number of pages: " + `${Book.pages}`;      
        pRead.innerText = "Read?: ";

        
        
    }

    //length of myLibrary seems to be 0?!

   





addBookButton.addEventListener('click', function(){
    addBookToLibrary()
    closeForm()
});





