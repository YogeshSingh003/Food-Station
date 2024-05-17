import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

function Header() {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL}></img>
      <ul className="list">
        <li>onlineStatus : {onlineStatus ? "✅" : "❌"}</li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
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
