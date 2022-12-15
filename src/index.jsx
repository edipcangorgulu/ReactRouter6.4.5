import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './routes/ErrorPage';
import Root from './routes/root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Users from './routes/Users';
import User from './routes/User';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users",
        element: <Users />,

      },
      {
        path: "users/:id",
        element: <User />,

      },
    ]
  },
 

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
