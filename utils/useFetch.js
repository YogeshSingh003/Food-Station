import React from "react";
import { useState, useEffect } from "react";

export const useFetch = (resId) => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(resId);
  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=" +
    //     resId
    // );
    const data = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=" +
        resId
    );
    const json = await data.json();
    setResponse(json.data);
  };
  return response;
};
