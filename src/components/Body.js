import { Link } from "react-router-dom";
import RestaurantCard, { topRated } from "./RestaurantCard";
// import resList from "../../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const TopRestaurant = topRated(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(restaurantList);
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
      <div className="my-2 flex justify-center mx-auto py-4">
        <input
          className="py-1 mx-1  rounded border-solid border-2 border-slate-800 "
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <button
          className="py-1 px-2 rounded border-solid border-2 border-black  transition ease-in-out  duration-500 hover:bg-blue-100 font-bold "
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
          className="mx-4 py-1 px-2 rounded border-solid border-2 border-black transition ease-in-out  duration-500 hover:bg-blue-100 font-bold "
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
      <div className="flex justify-evenly flex-wrap gap-5">
        {/** Different styles of mapping */}
        {/* {restaurantList.map((item, index) => (
            <RestaurantCard resData={resList[index]} />
          ))} */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.5 ? (
              <TopRestaurant resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
