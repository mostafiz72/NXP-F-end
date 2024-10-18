import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './Login.jsx';
import Register from './Register.jsx';
import ErrorPage from './ErrorPage.jsx';
import HomePage from './HomePage.jsx';
import Post from './Post.jsx';
import Dhome from './Dhome.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dhome /> },
      { path: "/home", element: <HomePage /> },
      { path: "/post", element: <Post /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },    

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
