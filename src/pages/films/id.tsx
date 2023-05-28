import { useParams } from "react-router-dom"
import { useFilm } from "../../hooks/films"

export default function FilmId() {
  const { id } = useParams<{ id: string }>()
  if (!id) throw new Error("No id provided")
  const { film, isLoading } = useFilm(id)

  return isLoading ? <div>Loading...</div> : (
    <div>
      <h1>{film.title}</h1>
      <p>{film.opening_crawl}</p>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
    </div>
  )
}
