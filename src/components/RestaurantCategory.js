import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ cat }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <>
      <div className="w-1/2 mx-auto my-4 p-4 bg-gray-50 shadow-lg  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold">
            {cat.title}({cat.itemCards.length})
          </span>
          <span className="text-2xl">⬇️</span>
        </div>
        <div>{showItems && <ItemList items={cat.itemCards} />}</div>
      </div>
    </>
  );
};

export default RestaurantCategory;
