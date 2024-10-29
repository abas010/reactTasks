import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import NavbarSite from "./Header/header";

export default function App() {
  let routers = useRoutes(routes);
  return (
    <>
      <NavbarSite />
      {routers}
    </>
  );
}
