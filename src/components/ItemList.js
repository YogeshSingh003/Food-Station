import { key } from "localforage";
import { CDN_URL } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";

const ItemList = (items) => {
  const dispatch = useDispatch();
  const handleAddItem = (c) => {
    dispatch(addItem(c));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <>
      {items.items.map((c) => (
        <div
          key={c?.card?.info?.id}
          className="flex border-b-2 justify-between"
        >
          <div className="py-4  font-bold text-sm w-9/12 ">
            {c?.card?.info?.name} - ₹{" "}
            {c?.card?.info?.price / 100 || c?.card?.info?.defaultPrice / 100}
            <div className="font-light py-2">{c?.card?.info?.description}</div>
          </div>
          <div className="w-3/12 font-thin py-4 relative ">
            <img
              className="w-full  rounded-sm    "
              src={CDN_URL + c?.card?.info?.imageId}
            ></img>
            <div className="text-center  flex justify-center ">
              <button
                className="bg-black text-white text-sm py-1 pl-2 pr-2 "
                onClick={handleRemoveItem}
              >
                remove -
              </button>
              <button
                className="bg-black text-white text-sm py-1 pl-2 pr-2 "
                onClick={() => handleAddItem(c)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
