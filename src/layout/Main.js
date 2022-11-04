import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
export const BooksContext = createContext([]);
export const CartContext = createContext([]);
const Main = () => {
    const {books, initialCart, count} = useLoaderData([]);
    const [page, setPage] = useState(0);
    const [cart, setCart] = useState(initialCart);
    const bookInfo = {books, count}
    
    return (
      <BooksContext.Provider value={bookInfo}>
        <CartContext.Provider value={[cart, setCart]}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </CartContext.Provider>
      </BooksContext.Provider>
    );
};

export default Main;