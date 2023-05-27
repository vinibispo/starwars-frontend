import { useQuery } from "@tanstack/react-query";
import { api } from "../resources/api";

const fetchPlanets = async () => {
  const res = await api.get("/planets")
  return res.data
}
export function usePlanets() {
  const { data, ...rest } = useQuery({
    queryKey: ["planets"],
    queryFn: fetchPlanets
  })

  return {
    planets: data,
    ...rest
  }
}
