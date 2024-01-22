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
// add a book to a library
function addBooktoLibrary(library,book)
{ 
       console.log(library.filter((val)=> val.id == book.id).length == 0) ;
        if(library.filter((val)=> val.id == book.id).length == 0)library.push(book);   
}

let library =[];
let book0 = new Book(7048,"one piece.chap 1",150,"Eiichirō Oda","mange","not read");
let book1 = new Book(7055,"one piece.chap 3",150,"Eiichirō Oda","mange","not read");
let book2 = new Book(7056,"one piece.chap 2",150,"Eiichirō Oda","mange","read");
let book3 = new Book(7056,"one piece.chap 2",150,"Eiichirō Oda","mange","read");
addBooktoLibrary(library,book0);
addBooktoLibrary(library,book0);

console.log(library);