import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import ShowDetails from './../Component/ShowDetails/ShowDetails';
import Home from "../Home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: `/details/:id`,
                element: <ShowDetails></ShowDetails>,
            }
        ]
    },

])
export default routes;