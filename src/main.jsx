import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/signUp.jsx'
import Login from './components/login.jsx'
import Auth from './components/auth.jsx'
import HomePage from './components/homePage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sign-up",
        element: <SignUp />
      }, 
      {
        path: "/log-in",
        element: <Login />
      },
      {
        path: "/auth",
        element: <Auth />
      },
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
)
