import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Redirect} from './App';
import { CreateAccountPage } from './pages/createAccount';
import { AccountPage } from './pages/accountPage';
import { Home } from './pages/home';
import { Logout } from './pages/logoutPage';
import { LoginPage } from './pages/loginPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/logout',
    element: <Logout />
  },
  {
    path: '/signup',
    element: <CreateAccountPage  />
  },
  {
    path: '/account',
    element: <AccountPage />
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
  <div>
    <RouterProvider router={router} />
  </div>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
