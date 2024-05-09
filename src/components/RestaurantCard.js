import { CDN_URL } from "../../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData.info;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} className="res-img"></img>
      <h3>{name}</h3>
      <h3>{cuisines.slice(0, 4).join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo.replace(" for two", "")}</h3>
      <h3>{sla.deliveryTime + " minutes"}</h3>
    </div>
  );
};

export default RestaurantCard;
