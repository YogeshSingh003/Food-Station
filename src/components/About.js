import { useState, useEffect } from "react";
import { useFetch } from "../../utils/useFetch";

const About = () => {
  const { data } = useFetch("https://api.github.com/users/YogeshSingh003");
  console.log(data);
  return (
    <>
      <h2>About</h2>
      <div>{data && data.map((name) => <p key={name.id}>{name.login}</p>)}</div>
    </>
  );
};

export default About;
