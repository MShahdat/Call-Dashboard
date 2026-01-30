import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Settings from './pages/Settings.jsx';
import Call from './pages/Call.jsx';
import Dash from './pages/Dash.jsx';
import Appointment from './pages/Appointments.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
    children: [
      {
        path: '/setting',
        element: <Settings/>
      },
      {
        path: '/call-logs',
        element: <Call/>
      },
      {
        path: '/',
        element: <Dash/>
      },
      {
        path: '/appointment',
        element: <Appointment/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
