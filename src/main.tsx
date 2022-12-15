import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import App from './App'
// import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Login from './modules/auth/view/Login'
import History from './modules/history/view/History';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  }, 
  {
    path: "/history",
    element: <History />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
