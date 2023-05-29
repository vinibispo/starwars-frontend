import { useParams } from "react-router-dom"
import { usePlanet } from "../../hooks/planets"
import { Link } from "react-router-dom"
import Card from "../../shared/card"
import { styled } from "../../shared/styles"

const CardContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "1rem",
  padding: "1rem",
})

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

export default function PlanetId() {
  const { id } = useParams()
  if (!id) throw new Error("No id provided")
  const { planet, isLoading } = usePlanet(id)

  return (
    <main>
      {isLoading || !planet ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{planet.name}</h2>
          <p>Population: {planet.population}</p>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Surface Water: {planet.surface_water}</p>
          <p>Gravity: {planet.gravity}</p>
          <p>Orbital Period: {planet.orbital_period}</p>
          <p>Rotation Period: {planet.rotation_period}</p>
          <p>Diameter: {planet.diameter}</p>
          <Container>
            <h3>Films</h3>
            <CardContainer>
              {planet.films.map((film) => (
                <Card key={film.id} title={film.title} type="film">
                  <Link to={`/films/${film.id}`}>View</Link>
                </Card>
              ))}
            </CardContainer>
          </Container>
          <Container>
            <h3>Residents</h3>
            <CardContainer>
              {planet.residents.map((resident) => (
                <Card key={resident.id} title={resident.name} type="character">
                  <Link to={`/characters/${resident.id}`}>View</Link>
                </Card>
              ))}
            </CardContainer>
          </Container>
        </div>
      )}
    </main>
  )
}
