import { useQuery } from "@tanstack/react-query"
import { api } from "../resources/api"

const fetchFilms = async () => {
  const res = await api.get(`/films`)
  return res.data
}
export function useFilms() {
  const { data, ...rest } = useQuery({
    queryKey: ["films"],
    queryFn: fetchFilms,
  })

  return { films: data, ...rest }
}
