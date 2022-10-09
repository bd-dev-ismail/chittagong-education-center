import React from 'react';

const Products = ({ book, handalAddToCart }) => {
  const { title, thumbnailUrl, pageCount, shortDescription } = book;
  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg ">
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={thumbnailUrl}
        alt=""
      />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
        {title ? title.slice(0, 25) : "No Name"}
      </p>
      <p className="text-gray-700 ">
        {shortDescription ? shortDescription.slice(0, 20) : "No Dsc"}
      </p>
      <p className="text-gray-700 font-bold">Price: {pageCount}$</p>
      <button
        onClick={() => handalAddToCart(book)}
        type="button"
        className="px-8 block w-full mt-4 py-3 font-semibold rounded-full btn btn-primary"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Products;