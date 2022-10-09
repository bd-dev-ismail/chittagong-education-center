import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
export const BooksContext = createContext([]);
const Main = () => {
    const books = useLoaderData([]);
    return (
      <BooksContext.Provider value={books}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </BooksContext.Provider>
    );
};

export default Main;