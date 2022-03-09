import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");

    window.location.href = "/";
  };

  return (
    <div className="nav">
      <div className="nav-left">
        <h2>Ecommerce</h2>
      </div>
      <div className="nav-right">
        <Link className="text-decoration-none" to={"/account"}>
          Account
        </Link>
        <Link className="text-decoration-none" to={"/cart"}>
          Cart
        </Link>
        <div className="intro-user">!Hi {username}</div>
        <div className="logout-btn" onClick={logout}>
          Logout
        </div>
      </div>
    </div>
  );
}
