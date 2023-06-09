import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Place from './components/Place';
import MyPosts from './components/MyPosts';
import Login from './components/Login';
import Register from './components/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/place/:key",
    element: <Place />,
    errorElement: <div>Wrong Path</div>
  },
  {
    path: "/myPosts",
    element: <MyPosts />,
    errorElement: <div>Wrong Path</div>
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>Wrong Path</div>
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <div>Wrong Path</div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
