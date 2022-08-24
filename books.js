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



*/
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const pageNo = document.getElementById('pageNo');
const addBookButton = document.getElementById('addBook');
const library = document.querySelector('.library');






let myLibrary = []

function addBookToLibrary(){

    let Book = {
        title: bookTitle.value,
        author: bookAuthor.value,
        pages: pageNo.value,

        /* watched a Steve Griffith video, in his code he defines the Book object constructor inside his adding function.
        you don't even need to declare the const bookTitle etc at the top can do it straight in the constructor 
        eg. title = document.getElementById('bookTitle').value */


    }

    myLibrary.push(Book); //adds each new object instance to myLibrary
    document.querySelector('form').reset();//resets the form after each entry.
    console.log(myLibrary); //displays library in console.
   
   
    library.textContent = JSON.stringify(myLibrary);
    
    
    for(i in myLibrary){
        let newBook = document.createElement('div')
        library.appendChild(newBook);
        newBook.classList.add('book');
        let pTitle = document.createElement('p');
        let pAuthor = document.createElement('p');
        let pPages = document.createElement('p');
        newBook.appendChild(pTitle);
        newBook.appendChild(pAuthor);
        newBook.appendChild(pPages);//there must be a more concise way to do this
        pTitle.innerText = "Title: " + `${myLibrary[i].title}`;
        pAuthor.innerText = "Author: " + `${myLibrary[i].author}`;
        pPages.innerText = "Number of pages: " + `${myLibrary[i].pages}`;

        // could create seperate p elements for each piece of info.

        /* So for each instance of a book, a new div is created within library div.
            how to acces key value info on individual instances */

    }//this bit doesn't work as i though it might

    /* For each object in library, I want to display a seperate box/tag,
    with the value to the keys title author and number of pages */
}


//unction displayBook(value, index, array){

   // 
 //       




    
    
//}


 


addBookButton.addEventListener('click', addBookToLibrary);





