import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BookFinderApp from "./components/Pages";
import _router from "./_router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={_router} test="test" />
    </>
  );
}

export default App;
