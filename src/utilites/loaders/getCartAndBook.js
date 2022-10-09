import { getStoredCart } from "../fakeDb";

export const getCartAndBook = async()=>{
    const booksData = await fetch('books.json');
    const books = await booksData.json();

    //get cart 
    const savedCart = getStoredCart();
    let initialCart = [];
    if(savedCart){
        for(const id in savedCart){
            const foundBooks = books.find(book => book.id ===id);
            if(foundBooks){
                const quantity = savedCart[id];
                foundBooks.quantity = quantity;
                initialCart.push(foundBooks);
            }
        }
    }

    return {books, initialCart};
}