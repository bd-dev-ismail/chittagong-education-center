import Main from '../layout/Main';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Course from "../components/Course";
import Cart from "../components/Cart";
import Contact from "../components/Contact";
import { getCartAndBook } from '../utilites/loaders/getCartAndBook';
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
   {path: '/', element: <Main></Main>,
   loader: getCartAndBook,
    errorElement: <ErrorPage></ErrorPage>, children: [
    {path: '/', element: <Home></Home>},
    {path: '/home', element: <Home></Home>},
    {path: '/courses', element: <Course></Course>},
    {path: '/cart', element: <Cart></Cart>},
    {path: '/contact', element: <Contact></Contact>},
   ]}
]);
