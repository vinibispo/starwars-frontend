import { useQuery } from "@tanstack/react-query"
import { api } from "../resources/api"

const fetchFilm = async (id: string) => {
  const res = await api.get(`/films/${id}`)
  return res.data
}
export function useFilm(id: string) {
  const { data, ...rest } = useQuery({
    queryKey: ["films", id],
    queryFn: () => fetchFilm(id),
  })

  return { film: data, ...rest }
}

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
