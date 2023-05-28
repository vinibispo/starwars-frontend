import { useQuery } from "@tanstack/react-query";
import { api } from "../resources/api";

const fetchCharacters = async () => {
  const res = await api.get('/people')
  return res.data
}
export function useCharacters() {
  const { data, ...rest } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  })

  return { characters: data, ...rest }
}
