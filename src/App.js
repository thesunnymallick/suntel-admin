import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GiftCardSteam from "./pages/GiftCardSteam";
import Login from "./pages/Login";
import ProtectedRoute from "./config/ProtectedRoute";
import AllProducts from "./pages/AllProducts";
import { useSelector } from "react-redux";
import General from "./pages/General";
import WalletDetailsPage from "./pages/WalletDetailsPage";
const App = () => {
  const {authInfo}=useSelector((state)=>state.login);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={

              <Dashboard />
         
          }
        />
        <Route
          path="/general"
          element={

              <General/>
         
          }
        />
        <Route
          path="/giftCard/steam/:id"
          element={
            <ProtectedRoute authInfo={authInfo}>
              <GiftCardSteam />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute authInfo={authInfo}>
              <AllProducts/>
            </ProtectedRoute>
          }
        />
          <Route
          path="/wallet-details"
          element={
            <ProtectedRoute authInfo={authInfo}>
              <WalletDetailsPage/>
            </ProtectedRoute>
          }
        />
        /wallet-details
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
