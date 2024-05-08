import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";

function Header() {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL}></img>
      <ul className="list">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
}

export default Header;
