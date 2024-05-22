import { key } from "localforage";
import { CDN_URL } from "../../utils/constant";
const ItemList = (items) => {
  return (
    <>
      {items.items.map((c) => (
        <div
          key={c?.card?.info?.id}
          className="flex border-b-2 justify-between"
        >
          <div className="py-16  font-bold text-sm w-9/12 ">
            {c?.card?.info?.name} - ₹{" "}
            {c?.card?.info?.price / 100 || c?.card?.info?.defaultPrice / 100}
            <div className="font-light py-2">{c?.card?.info?.description}</div>
          </div>
          <div className="w-3/12 font-thin py-4 relative ">
            <img
              className="w-full  rounded-sm    "
              src={CDN_URL + c?.card?.info?.imageId}
            ></img>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
