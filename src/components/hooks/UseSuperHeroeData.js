import axios from "axios";
import { useQuery ,useQueryClient , useMutation} from "react-query";

// API
const fetchingData = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const addSuperHero = (heroe)=>{
  return axios.post("http://localhost:4000/superheroes",heroe)
}
export const UseSuperHeroeData = (onSuccess, onError) => {
  return useQuery("super_heroe", fetchingData, {
    onSuccess,
    onError,
    select: (data) => {
      const SuperHeroNames = data.data.map((hero) => hero.name);
      return SuperHeroNames;
    },
  });
};

export const useAddSuperHeroData = ()=>{
  const queryClient = useQueryClient();
  return useMutation ( addSuperHero , {
    onSuccess:()=>{
      queryClient.invalidateQueries("super-heroes")
    } ,
 })
}
                             
