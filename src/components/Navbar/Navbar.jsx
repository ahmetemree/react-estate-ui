import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/booking_logo.png" alt=""></img>
          <span>Booking</span>
        </a>
        <a href="/"> home</a>
        <a href="/"> about</a>
        <a href="/"> contact</a>
        <a href="/"> agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Emre</span>
            <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <a href="/" className="signIn">
              Sign In
            </a>
            <a href="/" className="register">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/"> home</a>
          <a href="/"> about</a>
          <a href="/"> contact</a>
          <a href="/"> agents</a>
          <a href="/" className="signIn">
            Sign In
          </a>
          <a href="/" className="register">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
