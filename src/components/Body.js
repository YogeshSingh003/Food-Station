import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
// import resList from "../../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>You're Offline</h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const filteredRestaurant = restaurantList.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="res-btn"
          onClick={() => {
            const filteredRestaurant = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );

            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Top rated restaurant
        </button>
        {/* <button onClick={() => setRestaurantList(resList)}>Reset</button> */}
      </div>
      <div className="res-container">
        {/** Different styles of mapping */}
        {/* {restaurantList.map((item, index) => (
            <RestaurantCard resData={resList[index]} />
          ))} */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
