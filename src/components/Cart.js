import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    clearCart;
  };
  return (
    <div className="m-4">
      <h1 className="text-center font-bold text-2xl">Cart</h1>
      <div className="text-end text-sm  mr-5">
        <button
          className="border-solid border-gray-700 rounded border-2 px-2"
          onClick={handleClearCart}
        >
          Clear
        </button>
      </div>
      {}
      <div className="w-6/12 text-center m-auto">
        {cartItem.length === 0 ? (
          <h3>Cart is empty</h3>
        ) : (
          <ItemList items={cartItem}></ItemList>
        )}
      </div>
    </div>
  );
};

export default Cart;
