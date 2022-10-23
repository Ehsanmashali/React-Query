import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchingData = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const RQSuperHeroe = () => {
  const onSuccess = (data) => {
    console.log({ data });
  };

  const onError = (error) => {
    console.log(error);
  };
  const { data, isError, isLoading, isFetching, error } = useQuery(
    "super-Heroe",
    fetchingData,
    {
      // cacheTime,
      // staleTime: 5000,
      // refetchOnMount
      // refetchInterval:2000,
      // refetchIntervalInBackground :true,

      onSuccess,
      onError,
      //   select: (data) => {
      //     const superHeroeNames = data.data.map((hero) => hero.name);
      //     return superHeroeNames;
      //   },
    }
  );
  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ SuperHeroePage</h2>
      {data.data.map((heroe) => (
        <div key={heroe.id}>
          <Link to={`/rq-super-heroe/${heroe.id}`}>{heroe.name}</Link>
        </div>
      ))}
    </>
  );
};

export default RQSuperHeroe;
