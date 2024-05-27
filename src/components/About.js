import { useState, useEffect } from "react";
import { useFetch } from "../../utils/useFetch";

const About = () => {
  // const data = useFetch("https://api.github.com/users/YogeshSingh003");

  // useEffect(() => {
  //   console.log(data.response);
  // }, [data]);
  return (
    <>
      <h2>About</h2>
      {/* <div>{data.response.name}</div> */}
    </>
  );
};

export default About;
