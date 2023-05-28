import { useParams } from "react-router-dom"
import { usePlanet } from "../../hooks/planets"
import { Link } from "react-router-dom"
import Card from "../../shared/card"

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
          <div>
            {planet.films.map((film) => (
              <Card key={film.id} title={film.title} type="film">
                <Link to={`/films/${film.id}`}>View</Link>
              </Card>
            ))}
          </div>
          <div>
            {planet.residents.map((resident) => (
              <Card key={resident.id} title={resident.name} type="character">
                <Link to={`/characters/${resident.id}`}>View</Link>
              </Card>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
