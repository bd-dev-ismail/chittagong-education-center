import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BooksContext, CartContext } from '../layout/Main';
import { addToDb } from '../utilites/fakeDb';
import Products from './Products';

const Course = () => {
    // const {books , count} = useContext(BooksContext);
    const [books, setBooks] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useContext(CartContext);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);
    const pages = Math.ceil(count / size);
    useEffect(()=>{ 
      fetch(`http://localhost:5000/books?page=${page}&size=${size}`)
        .then((res) => res.json())
        .then((data) => {
          setCount(data.count);
          setBooks(data.books);
        });

    },[page, size])
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
        <div>
          <p className="text-xl my-5 text-semibold">
            Current page is {page} & Size {size}
          </p>
          {[...Array(pages).keys()].map((number) => (
            <button
              className="btn btn-secondary btn-outline mr-5"
              number={number}
              key={number.number}
              onClick={() => setPage(number + 1)}
            >
              {number + 1}
            </button>
          ))}
          <p className='text-xl text-semibold my-4'>Select Sizes: </p>
          <select
            onClick={(e) => setSize(e.target.value)}
            className="btn btn-primary btn-outline"
          >
            <option selected value="05">
              05
            </option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    );
};

export default Course;