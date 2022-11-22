import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginView } from './components/login';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Redirect} from './App';
import { CreateAccountView } from './components/createAccount';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: '/login',
    element: <LoginView />
  },
  {
    path: '/signup',
    element: <CreateAccountView />
  },
  {
    path: "/:url",
    element: <Redirect />
  }
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
