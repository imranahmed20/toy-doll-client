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
import AuthProvider from './Provider/AuthProvider.jsx';
import Detail from './Component/Page/Detail/Detail.jsx';
import PrivetRouter from './Router/PrivetRouter.jsx';
import OrderDetail from './Component/Page/OrderDetail/OrderDetail.jsx';
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
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/orders')
      },
      {
        path: '/myToy',
        element: <PrivetRouter><MyToys></MyToys></PrivetRouter>

      },
      {
        path: '/addToy',
        element: <PrivetRouter><AddToy></AddToy></PrivetRouter>
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
      },
      {
        path: '/categories/:id',
        element: <PrivetRouter><Detail></Detail></PrivetRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
      },
      {
        path: '/barbie/:id',
        element: <PrivetRouter><Detail></Detail></PrivetRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/barbie/${params.id}`)
      },
      {
        path: '/americans/:id',
        element: <PrivetRouter><Detail></Detail></PrivetRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/americans/${params.id}`)
      },
      {
        path: '/orders/:id',
        element: <PrivetRouter><OrderDetail></OrderDetail></PrivetRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/orders/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
