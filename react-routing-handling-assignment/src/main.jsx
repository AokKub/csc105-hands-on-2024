import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SignUpPage from './pages/signUpPage.jsx'
import LoginPage from './pages/loginPage.jsx'
import FavPage from './pages/favPage.jsx'
import FavDetailPage from './pages/favDetailPage.jsx'
import NotFoundPage from './pages/notFoundPage.jsx'
const router = createBrowserRouter([
  {
    path: "/", element: <App />
  },
  {
    path: "/sign-up", element: <SignUpPage />
  },
  {
    path: "/login", element: <LoginPage />
  },
  {
    path: "/fav", element: <FavPage />
  }, {
    path: "/fav/:number", element: <FavDetailPage />
  },
  {
    path: "/*", element: <NotFoundPage />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
