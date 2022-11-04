import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { BooksContext, CartContext } from '../layout/Main';
import { addToDb } from '../utilites/fakeDb';
import Products from './Products';

const Course = () => {
    const books = useContext(BooksContext);
    const [cart, setCart] = useContext(CartContext);
    const handalAddToCart = (book)=>{
        let newCart = [];
        const exists = cart.find((bk) => bk.isbn === book.isbn);
        if(!exists){
            book.quantity = 1;
            newCart = [...cart, book];
        }
        else{
            const rest = cart.filter((bk) => bk.isbn !== book.isbn);
            exists.quantity = exists.quantity + 1;
            
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(book.isbn);
        toast.success('Sucessfully added To Cart',{autoClose: 500});
    }
    console.log(cart);
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {books.map((book) => (
            <Products
              book={book}
              key={book._id}
              handalAddToCart={handalAddToCart}
            ></Products>
          ))}
        </div>
      </div>
    );
};

export default Course;