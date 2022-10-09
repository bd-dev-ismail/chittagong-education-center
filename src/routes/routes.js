import Main from '../layout/Main';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Course from "../components/Course";
import Cart from "../components/Cart";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
const { createBrowserRouter } = require("react-router-dom");
export const router = createBrowserRouter([
   {path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>, children: [
    {path: '/', element: <Home></Home>},
    {path: '/home', element: <Home></Home>},
    {path: '/courses', element: <Course></Course>},
    {path: '/cart', element: <Cart></Cart>},
    {path: '/blogs', element: <Blog></Blog>},
    {path: '/contact', element: <Contact></Contact>},
   ]}
]);
