import React from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div>
      <h2 className="white"> Abute</h2>
      <div className="flex">
        <Link to="setting" className="a">
          <Button>setting</Button>
        </Link>
        <Link to="discription" className="a">
          <Button>discription</Button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
