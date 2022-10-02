import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroe = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFrinds = () => {
  return axios.get("http://localhost:4000/friends");
};
const ParallelQuerysPage = () => {
  const { data: superHeroe } = useQuery("super-Heroe", fetchSuperHeroe);
  const { data: friends } = useQuery("friends", fetchFrinds);

  console.log({ superHeroe });
  console.log({ friends });
  return (
    <>
      <h2>ParallelQuerysPage</h2>
      {superHeroe?.data?.map((heroes) => (
        <div key={heroes.id}>{heroes.name}</div>
      ))}
      
      -

      {friends?.data?.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </>
  );
};

export default ParallelQuerysPage;
