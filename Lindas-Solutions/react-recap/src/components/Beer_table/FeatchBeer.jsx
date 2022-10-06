import React from "react";
import useAxios from "@vinsjo/use-axios";

const FeatchBeer = () => {
  const { data } =
    useAxios <
    { message: " :) " } >
    {
      url: "https://api.punkapi.com/v2/beers",
    };
  console.log(data);
  return <>{data}</>;
};

export default FeatchBeer;
