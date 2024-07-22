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
import Cart from "./pages/Cart";
import CartTest from "./pages/CartTest";
import ProfilePersonalInfo from "./pages/ProfilePersonalInfo";
import SecuritySettings from "./pages/SecuritySettings";
import ProfileNotifications from "./pages/ProfileNotifications";
import ProfilePayments from "./pages/ProfilePayments";
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
         <Route
          path="/cart"
          element={
            <ProtectedRoute authInfo={authInfo}>
              <Cart/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cartTest"
          element={
            <ProtectedRoute authInfo={authInfo}>
              <CartTest/>
            </ProtectedRoute>
          }
        />

        <Route
        path="/profile/personal-info"
        element={
          <ProtectedRoute authInfo={authInfo}>
            <ProfilePersonalInfo/>
          </ProtectedRoute>
        }
        />




      <Route
        path="/profile/security-settings"
        element={
          <ProtectedRoute authInfo={authInfo}>
            <SecuritySettings/>
          </ProtectedRoute>
        }
        />

       <Route
        path="/profile/notifications"
        element={
          <ProtectedRoute authInfo={authInfo}>
            <ProfileNotifications/>
          </ProtectedRoute>
        }
        />

       <Route
        path="/profile/payments"
        element={
          <ProtectedRoute authInfo={authInfo}>
            <ProfilePayments/>
          </ProtectedRoute>
        }
        />
  
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
