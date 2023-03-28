import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App.js'
import './index.css'
import { LoginPage, AnalysisPage, AnalysisResult, MockInterviewCover, MockInterviewPage, MockResultPage, ProfessionalPage, ProfessionalProfile, SignUp, Profile, SalaryCalculator } from './pages';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/SalaryCalculator",
        element: <SalaryCalculator />,
    },
    {
        path: "/analysis",
        element: <AnalysisPage />,
    },
    {
        path: "/analysisResult",
        element: <AnalysisResult />,
    },
    {
        path: "/mockPage",
        element: <MockInterviewPage />,
    },
    {
        path: "/mockCover",
        element: <MockInterviewCover />,
    },
    {
        path: "/mockResult",
        element: <MockResultPage />,
    },

    {
        path: "/professional",
        element: <ProfessionalPage />,
    },
    {
        path: "/professionalProfile/:id",
        element: <ProfessionalProfile />,
    }
  ]);

ReactDOM.render(
    <RouterProvider router={router} />, document.getElementById('root'));