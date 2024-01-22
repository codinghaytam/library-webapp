// Book object contructor
function Book(id,title,n_pages,author,genre,status)
{
    this.id = id;
    this.title = title;
    this.n_page = n_pages;
    this.author = author;
    this.genre = genre;
    this.status = status;
}
// define function that creates a node and assotiate it to the Book object 
Book.prototype.createdisplay = function(direction) {
    card = document.createElement(direction);
    card.appendChild(document.createElement("p"));
    card.appendChild(document.createElement("div"));
    card.appendChild(document.createElement("div"));
    card.appendChild(document.createElement("div"));
    card.appendChild(document.createElement("div"));
    card.appendChild(document.createElement("button"));
    card.childNodes[0].textContent = this.title;
    card.childNodes[1].textContent = this.author;
    card.childNodes[2].textContent = this.n_page + " pages";
    card.childNodes[3].textContent = this.genre;
    card.childNodes[4].textContent = this.status;
    card.childNodes[5].textContent = "change status";
    return card;
}
// displays the content of the library
function display(library)
{
    for(i = 0;i < library.length;i++)
    {
        library_display.appendChild(library[i].createdisplay("div"));
    }    
}
// add a book to a library
function addBooktoLibrary(library,book)
{ 
        if(library.filter((val)=> val.id == book.id).length == 0)library.push(book);   
}
const library_display = document.querySelector("#library");// selects the main div of the html page
let library =[];
let book0 = new Book(7048,"one piece.chap 1",150,"Eiichirō Oda","manga","not read");
let book1 = new Book(7055,"one piece.chap 3",150,"Eiichirō Oda","manga","not read");
let book2 = new Book(7056,"one piece.chap 2",150,"Eiichirō Oda","manga","read");
let book3 = new Book(7056,"one piece.chap 2",150,"Eiichirō Oda","manga","read");
addBooktoLibrary(library,book0);
addBooktoLibrary(library,book1);
addBooktoLibrary(library,book2);
display(library);