import { Link, useParams } from "react-router-dom"
import { useFilm } from "../../hooks/films"
import Card from "../../shared/card"
import { styled } from "../../shared/styles"

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  justifyContent: "center",
  'h3': {
    alignSelf: 'center',
    scale: 3,
  }
})

const CardContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "1rem",
  padding: "1rem",
})
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
      <Container>
        <h3>Casts</h3>
        <CardContainer>
        {film.characters.map((character) => (
          <Card key={character.id} title={character.name} type="character">
            <Link to={`/characters/${character.id}`}>View</Link>
          </Card>
        ))}
        </CardContainer>
        </Container>

        <Container>
        <h3>Scenarios</h3>
        <CardContainer>
          {film.planets.map((planet) => (
            <Card key={planet.id} title={planet.name} type="planet">
              <Link to={`/planets/${planet.id}`}>View</Link>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </div>
  )
}
