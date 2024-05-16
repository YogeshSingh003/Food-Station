import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=807690&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    setResMenu(json.data);
  };

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines } = resMenu.cards[2].card.card.info;
  console.log(resMenu.cards[2].card.card.info);

  return (
    <>
      <h3>{name}</h3>
      <h3>{cuisines}</h3>
      <h3>Pizza</h3>
    </>
  );
};

export default RestaurantMenu;

// console.log(
//   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//     ?.card?.itemCards[0]
// );
// console.log(json?.data?.cards[2].card.card.info.name);

//   console.log(resMenu.cards[2].card.card.info.name);

//   console.log(name);
