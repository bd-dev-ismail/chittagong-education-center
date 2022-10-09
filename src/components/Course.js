import React, { useContext } from 'react';
import { BooksContext } from '../layout/Main';
import Products from './Products';

const Course = () => {
    const books = useContext(BooksContext);
    console.log(books);
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {books.map((book) => (
            <Products book={book} key={book.isbn}></Products>
          ))}
        </div>
      </div>
    );
};

export default Course;