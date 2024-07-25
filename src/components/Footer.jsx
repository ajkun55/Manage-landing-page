import { useState } from "react";

export default function Footer() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");

  const re = /\S+@\S+\.\S+/;

  function handleSubmit(e) {
    e.preventDefault();
    if (!re.test(email)) {
      setIsError(true);
      setEmail("johnmadden/mail");
      return;
    }
    setIsError(false);
    return;
  }
  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <footer>
      <div className="container">
        <div className="main-footer">
          <div className="footer-icon">
            <img src="/images/logo-white.svg" alt="" className="logo" />

            <div className="icons">
              <img src="/images/icon-facebook.svg" alt="" />
              <img src="/images/icon-youtube.svg" alt="" />
              <img src="/images/icon-twitter.svg" alt="" />
              <img src="/images/icon-pinterest.svg" alt="" />
              <img src="/images/icon-instagram.svg" alt="" />
            </div>
          </div>
          <div className="lists">
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
          </div>
          <div className="lists">
            <a href="#">Careers</a>
            <a href="#">Community</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-btm">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="email"
                name="email"
                placeholder="Updates in your inbox…"
                value={email || ""}
                onChange={(e) => handleChange(e)}
              />
              <button type="submit">Go</button>
            </form>{" "}
            {isError && <em className="error">Please insert a valid email</em>}
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>

        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://github.com/ajkun55/Manage-landing-page">John A</a>.
        </div>
      </div>
    </footer>
  );
}
