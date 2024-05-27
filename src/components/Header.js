import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

function Header() {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // SUbscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex shadow-lg justify-between">
      <img className="w-32" src={LOGO_URL}></img>

      <ul className="flex gap-5 px-3 py-12 font-semibold text-lg">
        <li>onlineStatus : {onlineStatus ? "✅" : "❌"}</li>
        <li className="hover:text-blue-900 hover:underline">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-blue-900 hover:underline">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="hover:text-blue-900 hover:underline">
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>Cart({cartItems.length} items)</li>
        <li>
          <button
            className="rounded border-solid border-2 px-2  border-black "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
