// ********* PACKAGE IMPORT *********
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// ********* FILE IMPORT *********
import Dashboard from "./pages/dashboard/Dashboard";
import ProductInfo from "./pages/product/ProductInfo";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./config/ProtectedRoute";
import AllProducts from "./pages/product/AllProducts";
import Catalogue from "./pages/catalogue/Catalogue";
import Cart from "./pages/cart/Cart";
import ProfilePersonalInfo from "./pages/profile/ProfilePersonalInfo";
import SecuritySettings from "./pages/profile/SecuritySettings";
import ProfileNotifications from "./pages/profile/ProfileNotifications";
import ProfilePayments from "./pages/profile/ProfilePayments";
import FontPage from "./pages/FontPage";
import WalletDetailsPage from "./pages/wallet/WalletDetailsPage";
import RootLayout from "./layouts/RootLayout";
const App = () => {
  const { authInfo } = useSelector((state) => state.login);
  return (
    <BrowserRouter>
      {/* <RootLayout> */}
      <Routes>
      {/* Routes with Header and Sidebar */}
    
        <Route path="/" element={
          <RootLayout>
             <Dashboard />
          </RootLayout>
        
          } />
        <Route path="/catalogue" element={
          <RootLayout>
           <FontPage />
          </RootLayout>
       
        } />
        <Route path="/general" element={
          <RootLayout>
            <Catalogue />
          </RootLayout>
         
          } />
        <Route
          path="/giftCard/steam/:id"
          element={
            <RootLayout>
               <ProtectedRoute authInfo={authInfo}>
              <ProductInfo />
            </ProtectedRoute>
            </RootLayout>
           
          }
        />

        <Route
          path="/products"
          element={
          <RootLayout>
              <ProtectedRoute authInfo={authInfo}>
              <AllProducts />
            </ProtectedRoute>
          </RootLayout>
          }
        />
        <Route
          path="/wallet-details"
          element={
          <RootLayout>
              <ProtectedRoute authInfo={authInfo}>
              <WalletDetailsPage />
            </ProtectedRoute>
          </RootLayout>
          }
        />
        <Route
          path="/cart"
          element={
           <RootLayout>
             <ProtectedRoute authInfo={authInfo}>
              <Cart />
            </ProtectedRoute>
           </RootLayout>
          }
        />

        <Route
          path="/profile/personal-info"
          element={
           <RootLayout>
             <ProtectedRoute authInfo={authInfo}>
              <ProfilePersonalInfo />
            </ProtectedRoute>
           </RootLayout>
          }
        />

        <Route
          path="/profile/security-settings"
          element={
            <RootLayout>
              <ProtectedRoute authInfo={authInfo}>
              <SecuritySettings />
            </ProtectedRoute>
            </RootLayout>
          }
        />

        <Route
          path="/profile/notifications"
          element={
            <RootLayout>
              <ProtectedRoute authInfo={authInfo}>
              <ProfileNotifications />
            </ProtectedRoute>
            </RootLayout>
          }
        />

        <Route
          path="/profile/payments"
          element={
           <RootLayout>
             <ProtectedRoute authInfo={authInfo}>
              <ProfilePayments />
            </ProtectedRoute>
           </RootLayout>
          }
        />

        <Route 
         path="/login" element={
          <RootLayout showHeader={false} showSidebar={false}>
            <Login/>
          </RootLayout>
         }  /> 
       
      </Routes>
      {/* </RootLayout> */}
    </BrowserRouter>
  );
};

export default App;
