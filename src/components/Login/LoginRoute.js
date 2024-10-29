import React from "react";
import { login } from "../utils";
import { Navigate, Outlet } from "react-router-dom";

export default function LoginRoute() {
  return <>{login ? <Outlet /> : <Navigate to="/Login" />}</>;
}
