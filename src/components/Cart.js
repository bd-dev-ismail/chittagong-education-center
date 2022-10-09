import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = [];
  return (
      <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
          <h2 className="text-xl font-semibold">
            {cart.length ? "Review Cart Items" : "Cart is EMPTY!"}
          </h2>
          <ul className="flex flex-col divide-y divide-gray-700">
            
            
          </ul>
          <div className="space-y-1 text-right">
            <p>
              Total amount: <span className="font-semibold">{}$</span>
            </p>
            <p className="text-sm text-gray-400">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <Link to="/courses">
              <button
                type="button"
                className="btn btn-primary"
              >
                Back <span className="sr-only sm:not-sr-only">to shop</span>
              </button>
            </Link>
            <button
              
              type="button"
              className="btn btn-outline btn-secondary "
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
};

export default Cart;