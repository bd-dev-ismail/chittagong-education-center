import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AcademicCapIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { CartContext } from '../layout/Main';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cart, setCart] = useContext(CartContext);
     return (
       <div className="bg-primary sticky top-0 z-20">
         <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
           <div className="relative flex items-center justify-between">
             <NavLink
               to="/"
               aria-label="Company"
               title="Company"
               className="inline-flex items-center"
             >
               <AcademicCapIcon className="h-8 w-8 text-white" />
               <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                 EDU Center CTG
               </span>
             </NavLink>
             <ul className="flex items-center hidden space-x-8 lg:flex">
               <li>
                 <NavLink
                   to="/home"
                   aria-label="Our product"
                   title="Our product"
                   className={({ isActive }) =>
                     isActive
                       ? "font-medium tracking-wide text-secondary"
                       : "text-gray-100 font-medium tracking-wide"
                   }
                 >
                   Home
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   to="/courses"
                   aria-label="Our product"
                   title="Our product"
                   className={({ isActive }) =>
                     isActive
                       ? "font-medium tracking-wide text-secondary"
                       : "text-gray-100 font-medium tracking-wide"
                   }
                 >
                   Courses
                 </NavLink>
               </li>

               <li>
                 <NavLink
                   to="/contact"
                   aria-label="About us"
                   title="About us"
                   className={({ isActive }) =>
                     isActive
                       ? "font-medium tracking-wide text-secondary"
                       : "text-gray-100 font-medium tracking-wide"
                   }
                 >
                   Contact Us
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   to="/cart"
                   aria-label="Product pricing"
                   title="Product pricing"
                   className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                 >
                   <div className="flex relative">
                     <p>
                       {" "}
                       <ShoppingBagIcon className="h-8 w-8 text-white" />
                     </p>
                     <p className="absolute left-8 bottom-3 text-secondary">
                       {cart.length}
                     </p>
                   </div>
                 </NavLink>
               </li>
             </ul>
             <div className="lg:hidden">
               <button
                 aria-label="Open Menu"
                 title="Open Menu"
                 className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                 onClick={() => setIsMenuOpen(true)}
               >
                 <svg className="w-5 text-white" viewBox="0 0 24 24">
                   <path
                     fill="currentColor"
                     d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                   />
                   <path
                     fill="currentColor"
                     d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                   />
                   <path
                     fill="currentColor"
                     d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                   />
                 </svg>
               </button>
               {isMenuOpen && (
                 <div className="absolute top-0 left-0 w-full z-10">
                   <div className="p-5 bg-white border rounded shadow-sm">
                     <div className="flex items-center justify-between mb-4">
                       <div>
                         <NavLink
                           to="/"
                           aria-label="Company"
                           title="Company"
                           className="inline-flex items-center"
                         >
                           <AcademicCapIcon className="h-8 w-8 text-gray-800" />
                           <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                             EDU Center CTG
                           </span>
                         </NavLink>
                       </div>
                       <div>
                         <button
                           aria-label="Close Menu"
                           title="Close Menu"
                           className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                           onClick={() => setIsMenuOpen(false)}
                         >
                           <svg
                             className="w-5 text-gray-600"
                             viewBox="0 0 24 24"
                           >
                             <path
                               fill="currentColor"
                               d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                             />
                           </svg>
                         </button>
                       </div>
                     </div>
                     <nav>
                       <ul className="space-y-4">
                         <li>
                           <NavLink
                             to="/"
                             aria-label="Our product"
                             title="Our product"
                             className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                           >
                             Home
                           </NavLink>
                         </li>
                         <li>
                           <NavLink
                             to="/courses"
                             aria-label="Our product"
                             title="Our product"
                             className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                           >
                             Courses
                           </NavLink>
                         </li>

                         <li>
                           <NavLink
                             to="/contact"
                             aria-label="About us"
                             title="About us"
                             className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                           >
                             Contact Us
                           </NavLink>
                         </li>
                         <li>
                           <NavLink
                             to="/cart"
                             aria-label="Product pricing"
                             title="Product pricing"
                             className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                           >
                             <div className="flex relative  justify-center">
                               <p>
                                 {" "}
                                 <ShoppingBagIcon className="h-8 w-8  text-gray-700" />
                               </p>
                               <p className="absolute left-[12rem] bottom-3">
                                 {cart.length}
                               </p>
                             </div>
                           </NavLink>
                         </li>
                       </ul>
                     </nav>
                   </div>
                 </div>
               )}
             </div>
           </div>
         </div>
       </div>
     );
};

export default Header;