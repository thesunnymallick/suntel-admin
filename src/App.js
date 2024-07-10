import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GiftCardSteam from "./pages/GiftCardSteam";
import Login from "./pages/Login";
import ProtectedRoute from "./config/ProtectedRoute";
import AllProducts from "./pages/AllProducts";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/giftCard/steam/:id"
          element={
            <ProtectedRoute>
              <GiftCardSteam />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <AllProducts/>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
