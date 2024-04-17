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
import Register from './Page/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Contact from './Page/Contact.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute.jsx';
import Profile from './Page/Profile.jsx';
import ProfileUpdated from './Page/ProfileUpdated.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import About from './Page/About.jsx';
import FeedBack from './Page/FeedBack.jsx';
AOS.init();


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
        path: '/details/:id',
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch('/residential.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/about',
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:'/feedback',
        element:<PrivateRoute><FeedBack></FeedBack></PrivateRoute>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/contact',
        element:<PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/profileupdated',
        element:<PrivateRoute><ProfileUpdated></ProfileUpdated></PrivateRoute>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
