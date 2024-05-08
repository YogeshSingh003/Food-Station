import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="body">
      <div>
        <button
          className="res-btn"
          onClick={() => {
            const filterList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );

            setRestaurantList(filterList);
          }}
        >
          Top rated restaurant
        </button>
        <button onClick={() => setRestaurantList(resList)}>Reset</button>
      </div>
      <div className="res-container">
        {/** Different styles of mapping */}
        {/* {restaurantList.map((item, index) => (
            <RestaurantCard resData={resList[index]} />
          ))} */}
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
