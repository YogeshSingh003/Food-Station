import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../utils/useFetch";

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
    resDetails.cards[2].card.card.info;

  const { itemCards } =
    resDetails.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  // console.log(itemCards);

  return (
    <>
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo / 100}</h5>
      <h3>Menu</h3>
      <div>
        {itemCards.map((item) => (
          <div key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
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
