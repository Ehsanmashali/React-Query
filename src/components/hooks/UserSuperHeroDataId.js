import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchingData = ({ queryKey }) => {
  const heroeId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroeId}`);
};
export const UserSuperHeroDataId = (heroeId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", heroeId], fetchingData, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroeId));
      if (hero) {
        return { data: hero };
      } else {
        return undefined;
      }
    },
  });
};
