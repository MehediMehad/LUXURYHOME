import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Home from './Page/Home.jsx';
import EstateDetails from './Page/EstateDetails.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Login from './Page/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/details',
        element: <EstateDetails></EstateDetails>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
