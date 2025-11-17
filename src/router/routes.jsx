import {
  createBrowserRouter
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: Home
        }
    ]
  },
]);