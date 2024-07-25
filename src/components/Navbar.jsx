import { useState } from "react";
import "../styles/Navbar.css";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleNav() {
    setOpen(!open);
  }
  const list = (
    <>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Product</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">Community</a>
      </li>
    </>
  );

  const openMobileNav = (
    <img
      src="/images/icon-hamburger.svg"
      alt=""
      onClick={toggleNav}
      className="toggle-btn"
    />
  );
  const closeMobileNav = (
    <>
      <img
        src="/images/icon-close.svg"
        alt=""
        onClick={toggleNav}
        className="toggle-btn"
      />
      <ul className="nav-mobile">{list}</ul>
    </>
  );

  return (
    <div className="nav-container container">
      <div className="left-part">
        <img src="/images/logo.svg" alt="" className="logo" />

        <div className="nav-mobile-container">
          {open ? closeMobileNav : openMobileNav}
        </div>

        <div className="nav-desk-container">
          <ul className="nav-desk">{list}</ul>
        </div>
      </div>

      <Button />
    </div>
  );
}
