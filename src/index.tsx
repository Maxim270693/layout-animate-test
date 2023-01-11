import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './App';
import LifetimeISA from "./components/LifetimeIsa/LifetimeIsa";
import Blog from "./components/Blog/Blog";
import Pact from "./components/Pact/Pact";
import Purpose from "./components/Purpose/Purpose";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<App/>),
    },
    {
        path: "LifetimeISA",
        element: (<LifetimeISA/>),
    },
    {
        path: "Blog",
        element: (<Blog/>),
    },
    {
        path: "Pact",
        element: (<Pact/>),
    },
    {
        path: "Purpose",
        element: (<Purpose/>),
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
