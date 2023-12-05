import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProtectedRoute from "./protectedRoute";
import Home from "../pages/Home";
import Products from "../pages/Products";

//This component implements routing using Routes & Route
//It uses share layout 'AppLayout' to have a consistent behavior
//It uses ProjectedRoute to project app from unauthenticated users
const AppRoute : React.FunctionComponent<any> = ():JSX.Element => {
  
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route />
        <Route
          path="products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route />
        <Route path="*" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route />
      </Route>
    </Routes>
  );
};

export default AppRoute;
