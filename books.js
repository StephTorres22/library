/* 
LIBRARY

-Create form - done, basic html form

-Data from form to be submitted as an instance of Book

    -Access form data, getElementById and innertext?
    eg bookTitle.value
    -Need to save data from form as an instace of Book, 
    -Onclicklistener on submit button to get values 

    -func add book

-Each instance of Book to be added to library array

-Each index of library to be displayed 

-Should be able to add to library, search/filter through library, and delete a book from library.



*/
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const pageNo = document.getElementById('pageNo');
const addBookButton = document.getElementById('addBook');
const library = document.getElementsByClassName('.library');







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
    console.log(myLibrary); //displays library.
}





 


addBookButton.addEventListener('click', addBookToLibrary);





//const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", "295 pages", true)

//console.log(theHobbit.info())

/* not getting the expected outcome */ /* forgot to add () you;re calling a function dummy! */

//console.log(theHobbit.author)
//console.log(theHobbit.read)
 
/* can console.log individual attributes, but this.info function not returning as expected. */

/* function Book(title, author, pages, read){

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function(){
       // return title + ", " + author+ ", " + pages + ", " + read + "."
       return `${title} ${author} ${pages} ${read}`//this also works using placeholders like kotlin but must be in `` 
       //no punctuation though.
    }

}  */