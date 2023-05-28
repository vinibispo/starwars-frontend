import { Link } from "react-router-dom"
import { usePlanets } from "../../hooks/planets"
import Card from "../../shared/card"
import { styled } from "../../shared/styles"

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1rem',
  padding: '1rem',
})
export default function Planets() {
  const { planets, isLoading, isError } = usePlanets()
  return (
    <main>
      <Container>
        {planets?.map((planet) => (
          <Card key={planet.id} title={planet.name}>
            <p>Population: {planet.population}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Climate: {planet.climate}</p>
            <Link to={`/planets/${planet.id}`}>View</Link>
          </Card>
        ))}
      </Container>
    </main>
  )
}
