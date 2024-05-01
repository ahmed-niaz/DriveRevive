import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <NotFound/>,
      children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: 'about',
            element: <About/>
        },
        {
            path: 'services',
            element: <Services/>
        },
        {
            path: 'blog',
            element: <Blog/>
        },
        {
            path: 'contact',
            element: <Contact/>
        }



      ]
    },
  ]);