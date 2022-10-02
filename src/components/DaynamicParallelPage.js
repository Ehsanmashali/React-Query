import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHeroe = (heroeId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroeId}`);
};

const DaynamicParallelPage = ({ heroeId }) => {
  const response = useQueries(
    heroeId.map((id) => {
      return {
        queryKey: ["super-Heroe", id],
        queryFn: () => fetchSuperHeroe(id),
      };
    })
  );
  return (
    <>
      <h2>DaynamicParallelPage</h2>
      {console.log({response})}
    </>
  );
};

export default DaynamicParallelPage;
