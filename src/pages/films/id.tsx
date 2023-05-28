import { Link, useParams } from "react-router-dom"
import { useFilm } from "../../hooks/films"
import Card from "../../shared/card"

export default function FilmId() {
  const { id } = useParams<{ id: string }>()
  if (!id) throw new Error("No id provided")
  const { film, isLoading } = useFilm(id)

  return (isLoading || !film) ? <div>Loading...</div> : (
    <div>
      <h1>{film.title}</h1>
      <p>{film.opening_crawl}</p>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <div>
        {film.characters.map((character) => (
          <Card key={character.id} title={character.name} type="character">
            <Link to={`/characters/${character.id}`}>View</Link>
          </Card>
        ))}

        {film.planets.map((planet) => (
          <Card key={planet.id} title={planet.name} type="planet">
            <Link to={`/planets/${planet.id}`}>View</Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
