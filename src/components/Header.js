import { LOGO_URL } from "../../utils/constant";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL}></img>
      <ul className="list">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}

export default Header;
