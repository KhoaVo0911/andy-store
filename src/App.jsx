
import React from 'react'
import Homepage from './components/pages/Homepage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> }
    ]
  }

])

function App() {
  return (

    <RouterProvider router={router}></RouterProvider>

  );
}

export default App