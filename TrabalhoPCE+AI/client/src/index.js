import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './Login/login';
import Form from './formulario';
import AfterLog from './Login/afterlog';
import Home from './Login/home';
import SigninForm from './Login/signin';
import ListaFhirs from './Login/listFhirs';

import Mensagem from './Login/mensagem';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/formulario",
    element: <Form />,
  },
  {
    path: "/afterlog",
    element: <AfterLog />,
  },
  {
    path: "/listaFhirs",
    element: <ListaFhirs/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SigninForm />,
  },
  {
    path: "/mensagem/:id",
    element: <Mensagem />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
