import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import logo from "./logo.png";

function Header() {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // SUbscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  cartItems.map((item) => {
    console.log(item.card.info.id);
    console.log(item.card.info.name);
  });
  return (
    <div className="flex shadow-lg bg-white justify-between z-10 sticky top-0">
      {/* <img className="w-32" src={LOGO_URL}></img> */}
      <img className="w-32 py-6 mx-5" src={logo}></img>

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
        <li className="hover:text-blue-900 hover:underline">
          <Link to={"/cart"}>Cart({cartItems.length} items)</Link>
        </li>
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
