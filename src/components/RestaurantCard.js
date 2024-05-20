import { CDN_URL } from "../../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla, id } =
    resData.info;
  return (
    <div className="flex flex-col place-content-center   rounded-lg w-56 h-100 border-solid border-2  border-black">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="w-52  rounded-md pt-2"
      ></img>
      <h3>{name}</h3>
      <h3>{cuisines.slice(0, 4).join(", ")}</h3>
      <h3>{avgRating}</h3>
      {/* <h3>{id}</h3> */}
      <h3>{costForTwo.replace(" for two", "")}</h3>
      <h3>{sla.deliveryTime + " minutes"}</h3>
    </div>
  );
};

export default RestaurantCard;
