import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {/** Different styles of mapping */}
        {/* {resList.map((item, index) => (
            <RestaurantCard resData={resList[index]} />
          ))} */}
        {resList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
