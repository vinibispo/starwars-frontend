import { useQuery } from "@tanstack/react-query";
import { api } from "../resources/api";

const fetchPlanet = async (id: string) => {
  const res = await api.get(`/planets/${id}`)
  return res.data
}
export function usePlanet(id: string) {
  const { data, ...rest } = useQuery({
    queryKey: ["planet", id],
    queryFn: () => fetchPlanet(id),
  })

  return { planet: data, ...rest }
}
