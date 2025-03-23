import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Experience from './components/experience.jsx';
import Contact from './components/contact.jsx';
import './index.css';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/projects',
    element:<Projects/>
  },
  {
    path:'/experience',
    element:<Experience/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
