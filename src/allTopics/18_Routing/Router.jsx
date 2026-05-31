import { createBrowserRouter } from "react-router-dom";
import home from "./Home"
import Signup from "./Signup";

export const myRouter=createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/Signup",
        element:<Signup/>
    }
])