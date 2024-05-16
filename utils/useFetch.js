import React from "react";
import { useState, useEffect } from "react";

export const useFetch = (link) => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(link);
    const json = await data.json();
    setResponse(json);
  };

  return { response };
};
