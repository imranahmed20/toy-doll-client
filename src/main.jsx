import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main.jsx';
import Home from './Component/Home/Home.jsx';
import Error from './Component/Page/Error/Error.jsx';
import AllToys from './Component/Page/AllToy/AllToys.jsx';
import MyToys from './Component/Page/MyToys/MyToys.jsx';
import AddToy from './Component/Page/AddToys/AddToy.jsx';
import Blog from './Component/Page/Blog/Blog.jsx';
import Login from './Component/Page/Login/Login.jsx';
import Register from './Component/Page/Register/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allToy',
        element: <AllToys></AllToys>
      },
      {
        path: '/myToy',
        element: <MyToys></MyToys>
      },
      {
        path: '/addToy',
        element: <AddToy></AddToy>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
