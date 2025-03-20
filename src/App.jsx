import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./componant/ProtectedRoute";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/success"
            element={<ProtectedRoute element={<Success />} />}
          />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
