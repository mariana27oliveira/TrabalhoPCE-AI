import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginForm from './Paginas/login';
import Form from './Paginas/formulario';
import AfterLog from './Paginas/afterlog';
import Home from './Paginas/home';
import SigninForm from './Paginas/signin';
import ListaFhirs from './Paginas/listFhirs';
import Mensagem from './Paginas/mensagemfhir';
import Formulario from './Paginas/mensagemformulario';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signin",
    element: <SigninForm />,
  },
  {
    path: "/mensagem/:id",
    element: <Mensagem />,
  },
  {
    path: "/formulario/:id",
    element: <Formulario />,
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
