import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHeroePage = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((response) => {
        setdata(response.data);
        setisLoading(false);
      })
      .catch((error) => {
        seterror(error.message);
        setisLoading(false);
      });
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <>
      <h2>SuperHeroePage</h2>
      {data.map((heroe) => (
        <div key={heroe.id}>{heroe.name}</div>
      ))}
    </>
  );
};

export default SuperHeroePage;
