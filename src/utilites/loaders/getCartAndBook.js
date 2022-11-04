import { getStoredCart } from "../fakeDb";

export const getCartAndBook = async()=>{
    const booksData = await fetch("http://localhost:5000/books");
    
    const {books, count} = await booksData.json();
    console.log(books, count);
    //get cart 
    const savedCart = getStoredCart();
    let initialCart = [];
    if(savedCart){
        for(const isbn in savedCart){
            const foundBooks = books.find(book => book.isbn === isbn);
            if(foundBooks){
                const quantity = savedCart[isbn];
                foundBooks.quantity = quantity;
                initialCart.push(foundBooks);
            }
        }
    }

    return {books, initialCart};
}