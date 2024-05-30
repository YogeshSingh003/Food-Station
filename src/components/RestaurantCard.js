import { CDN_URL } from "../../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla, id } =
    resData.info;

  return (
    <div className="   object-contain rounded-lg w-52 h-80 border-solid border-2  border-black">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="w-52 h-36 object-cover"
      ></img>
      <div className="pl-2">
        <h3 className="font-semibold ">{name}</h3>
        <h3>{cuisines.slice(0, 4).join(", ")}</h3>
        <h3>{avgRating}</h3>
        {/* <h3>{id}</h3> */}
        <h3>{costForTwo.replace(" for two", "")}</h3>
        <h3>{sla.deliveryTime + " minutes"}</h3>
      </div>
    </div>
  );
};

export const topRated = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute   px-1 text-white text-sm rounded-lg bg-black">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
