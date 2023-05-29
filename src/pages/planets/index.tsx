import { usePlanets } from '../../hooks/planets'
import Card from '../../shared/card'
import { Pagination } from '../../shared/pagination'
import { Container } from '../../ui/container'

export default function Planets() {
  const {
    planets,
    isLoading,
    isError,
    onNextPage,
    onPrevPage,
    currentPage,
    isDisabledNextPage,
    isDisabledPrevPage,
  } = usePlanets()
  return (
    <main>
      <Container>
        {planets?.map((planet) => (
          <Card id={planet.id} key={planet.id} title={planet.name}>
            <p>Population: {planet.population}</p>
            <p>Climate: {planet.climate}</p>
          </Card>
        ))}
      </Container>
      <Pagination
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        currentPage={currentPage}
        isDisabledNextPage={isDisabledNextPage || isLoading || isError}
        isDisabledPrevPage={isDisabledPrevPage || isLoading || isError}
      />
    </main>
  )
}
