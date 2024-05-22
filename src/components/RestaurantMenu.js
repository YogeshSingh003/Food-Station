import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../utils/useFetch";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resDetails, setResDetails] = useState(null);
  const resId = useParams();

  const resDetails = useFetch(resId.resId);

  /* This code has been shifted to useFetch 

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=" +
        resId.resId
    );
    const json = await data.json();

    setResDetails(json.data);
  };

  */

  if (resDetails === null) return <Shimmer />;

  const { name, cuisines, costForTwo, avgRating } =
    resDetails?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  // console.log(resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="font-bold text-xl pt-4">{name}</h2>
        <h5 className="font-bold pb-2">{cuisines.join(", ")}</h5>
        <span className="bg-green-600 rounded-lg px-4 py-1">
          {avgRating}
          {"⭐".repeat(avgRating)}
        </span>
      </div>
      <div>
        {categories.map((c) => (
          <div key={c?.card?.card?.title}>
            <RestaurantCategory cat={c?.card?.card} />
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;

// console.log(
//   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]
//
// );
// console.log(json?.data?.cards[2].card.card.info.name);

//   console.log(resDetails.cards[2].card.card.info.name);

//   console.log(name);
