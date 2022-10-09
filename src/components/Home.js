import React from 'react';
import Lottie from "lottie-react";
import hero from '../asset/hero.json';
import { Link } from 'react-router-dom';
const Home = () => {
   return (
     <>
       <div>
         <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
           <div className="max-w-xl mx-auto lg:max-w-screen-xl">
             <div className="mb-16 lg:max-w-lg lg:mb-0">
               <div className="max-w-xl mb-6">
                 <div>
                   <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full badge badge-info">
                     Trending
                   </p>
                 </div>
                 <h2 className="max-w-lg mb-6 font-sans text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                   Learn Your <br /> Favorite Course <br /> From Online
                 </h2>
                 <p className="text-base text-gray-700 md:text-lg">
                   Our set he for firmament morning sixth subdue darkness
                   creeping gathered divide our let god moving. Moving in fourth
                   air night bring upon you’re it beast let you dominion
                   likeness open place day great wherein heaven sixth lesser
                   subdue fowl
                 </p>
               </div>
               <div className="flex items-center">
                 <Link
                   to="/courses"
                   className="inline-flex items-center justify-center h-12 px-6 mr-12 font-medium tracking-wide btn btn-outline btn-primary"
                 >
                   Enroll Courses
                 </Link>
                 <Link
                   to="/cart"
                   aria-label=""
                   className="inline-flex items-center  font-semibold btn btn-secondary"
                 >
                   Visit Cart
                 </Link>
               </div>
             </div>
           </div>
           <div className=" flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0  lg:items-end">
             <Lottie
               className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
               alt=""
               animationData={hero}
               loop={true}
             ></Lottie>
           </div>
         </div>
         {/* Second Section  */}
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
           <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
             <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
               <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                 <span className="inline-block mb-2">
                   {" "}
                   <span className="text-primary">Learn</span> New Skill when{" "}
                   <br /> and where you go
                 </span>
                 <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
               </h2>
             </div>
           </div>
           <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
             <div>
               <img
                 className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                 src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80"
                 alt=""
               />
               <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                 Advance PHP Knowledge With JS To Make Smart Web
               </p>
               <p className="text-gray-700">
                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium.
               </p>
             </div>
             <div>
               <img
                 className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                 src="https://plus.unsplash.com/premium_photo-1661270413285-fc9fe2b44e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                 alt=""
               />
               <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                 Education Software And PHP And JS System Script
               </p>
               <p className="text-gray-700">
                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium.
               </p>
             </div>
             <div>
               <img
                 className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                 src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                 alt=""
               />
               <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                 Marketing 2023: Complete Guide To Instagram Growth
               </p>
               <p className="text-gray-700">
                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium.
               </p>
             </div>
             <div>
               <img
                 className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                 src="https://images.unsplash.com/photo-1514355315815-2b64b0216b14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                 alt=""
               />
               <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                 Learn 3D Modelling And Design For Beginners
               </p>
               <p className="text-gray-700">
                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium.
               </p>
             </div>
             <div>
               <img
                 className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                 src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                 alt=""
               />
               <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                 Angular – The Complete Guide (2023 Edition)
               </p>
               <p className="text-gray-700">
                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium.
               </p>
             </div>
             <div>
               <img
                 className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                 src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"
                 alt=""
               />
               <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                 The Complete Financial Analyst Training & Investing
               </p>
               <p className="text-gray-700">
                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium.
               </p>
             </div>
           </div>
           <div className="text-center">
             <Link
               to="/"
               aria-label=""
               className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
             >
               See more
               <svg
                 className="inline-block w-3 ml-2"
                 fill="currentColor"
                 viewBox="0 0 12 12"
               >
                 <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
               </svg>
             </Link>
           </div>
         </div>
       </div>
     </>
   );
};

export default Home;