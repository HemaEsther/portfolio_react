import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Projects from './Component/Projects/Projects.jsx'
import Contact from './Component/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: "",
        element:<Home/>
      },
      {
        path: "about",
        element:<About/>
      },
      {
        path: "projects",
        element:<Projects/>
      },
      {
        path: "contact",
        element:<Contact/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
