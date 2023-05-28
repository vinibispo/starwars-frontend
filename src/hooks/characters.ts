import { useQuery } from "@tanstack/react-query";
import { api } from "../resources/api";

const fetchCharacter = async (id: string) => {
  const res = await api.get(`/people/${id}`)
  return res.data
}
export function useCharacter(id: string) {
  const { data, ...rest } = useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacter(id),
  })

  return { character: data, ...rest }
}

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
