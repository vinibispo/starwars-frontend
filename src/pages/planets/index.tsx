import { Link } from "react-router-dom"
import { usePlanets } from "../../hooks/planets"

export default function Planets() {
  const { planets, isLoading, isError } = usePlanets()
  return (
    <main>
      {planets?.map((planet) => (
        <div key={planet.id}>
          <h2>{planet.name}</h2>
          <p>Population: {planet.population}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Climate: {planet.climate}</p>
          <Link to={`/planets/${planet.id}`}>View</Link>
        </div>
      ))}
    </main>
  )
}
