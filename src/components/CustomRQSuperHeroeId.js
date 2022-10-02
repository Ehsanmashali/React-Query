import React from "react";
import { useParams } from "react-router-dom";
import { UserSuperHeroDataId } from "./hooks/UserSuperHeroDataId";

const CustomRQSuperHeroeId = () => {
  const { heroeId } = useParams();

  const { data, isLoading, isError, error, isFetching } =
    UserSuperHeroDataId(heroeId);

  if (isLoading || isFetching) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>CustomRQSuperHeroeId</h2>
      {data?.data?.name} - {data?.data?.alterEgo}
    </>
  );
};

export default CustomRQSuperHeroeId;
