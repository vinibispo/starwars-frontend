import { useParams } from "react-router-dom";
import { usePlanet } from "../../hooks/usePlanet";

export default function PlanetId() {
    const { id } = useParams()
    const {planet, isLoading} = usePlanet(id)

    return (
      <main>
      {isLoading ? (
       <p>Loading...</p>
      ): (
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
        </div>
      )}
      </main>
    )
  }