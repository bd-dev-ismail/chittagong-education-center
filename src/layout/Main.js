import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
export const BooksContext = createContext([]);
export const CartContext = createContext([]);
const Main = () => {
    const {books, initialCart} = useLoaderData([]);
    const [cart, setCart] = useState(initialCart);
    return (
      <BooksContext.Provider value={books}>
        <CartContext.Provider value={[cart, setCart]}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </CartContext.Provider>
      </BooksContext.Provider>
    );
};

export default Main;