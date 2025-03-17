import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
import "./index.css";
import App from "./App.jsx";
import SignUpPage from "./pages/signUpPage.jsx";
import ContactPage from "./pages/contactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <App />, // Render the App component
    children: [{ path: "/contact", element: <ContactPage /> },]
  },
  {
    path: "sign-up",
    element: <SignUpPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>
);

