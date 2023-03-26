import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App.js'
import './index.css'
import { LoginPage, AnalysisPage, MockInterviewPage } from './pages';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/analysis",
        element: <AnalysisPage />,
    },
    {
        path: "/mockinterview",
        element: <MockInterview />,
    },
  ]);

ReactDOM.render(
    <RouterProvider router={router} />, document.getElementById('root'));