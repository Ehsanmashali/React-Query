import React, { useState } from "react";
import { useAddSuperHeroData, UseSuperHeroeData } from "./hooks/UseSuperHeroeData";

const CustomRQSuperHeroe = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')
  const onSuccess = (data) => {
    console.log({ data });
  };
  const onError = (error) => {
    console.log({ error });
  };
  const { data, isError, isLoading, isFetching, error } = UseSuperHeroeData(
    onSuccess,
    onError
  );

  const { mutate: addHero } = useAddSuperHeroData()

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo }
    addHero(hero)
    console.log(hero)
  }


  console.log({ isLoading }, { isFetching });
  if (isLoading || isFetching) {
    return <h2>Loading ... </h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Custom RQ SuperHeroe</h2>


      <div>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='text'
          value={alterEgo}
          onChange={e => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>

      {data.map((heroeName) => (
        <div key={heroeName}>{heroeName}</div>
      ))}
    </>
  );
};

export default CustomRQSuperHeroe;
