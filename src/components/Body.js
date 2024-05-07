import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      {/* <div className="search"> Search</div> */}
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
        {/* {resList.map((item, index) => (
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
