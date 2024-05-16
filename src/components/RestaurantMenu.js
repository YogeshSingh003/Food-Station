import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resDetails, setResDetails] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=692079&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    setResDetails(json.data);
  };

  if (resDetails === null) return <Shimmer />;

  const { name, cuisines, costForTwo, avgRating } =
    resDetails.cards[2].card.card.info;
  console.log(resDetails.cards);

  return (
    <>
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo / 100}</h5>
      <h3>Menu</h3>
      <div>
        {resDetails.cards.map(
          (item) =>
            item?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
              ?.title
        )}
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
