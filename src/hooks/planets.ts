import { useQuery } from "@tanstack/react-query"
import { api } from "../resources/api"
import { planetSchema, planetsSchema } from "../resources/schema/planets"

const fetchPlanet = async (id: string) => {
  const res = await api.get(`/planets/${id}`)
  return planetSchema.parse(res.data)
}
export function usePlanet(id: string) {
  const { data, ...rest } = useQuery({
    queryKey: ["planet", id],
    queryFn: () => fetchPlanet(id),
  })

  return { planet: data, ...rest }
}

const fetchPlanets = async () => {
  const res = await api.get("/planets")
  return planetsSchema.parse(res.data)
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
