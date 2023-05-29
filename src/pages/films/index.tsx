import { useFilms } from "../../hooks/films"
import Card from "../../shared/card"
import { Pagination } from "../../shared/pagination"
import { Container } from "../../ui/container"

export default function Films() {
  const { films, isLoading, isDisabledNextPage, isDisabledPrevPage, onPrevPage, onNextPage, currentPage, isError } = useFilms()

  return (
    <main>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          {films?.map((film) => (
            <Card id={film.id} key={film.id} title={film.title} type="film">
              <p>Episode: {film.episode_id}</p>
            </Card>
          ))}
        </Container>
      )}
      <Pagination
        isDisabledNextPage={isDisabledNextPage || isLoading || isError}
        isDisabledPrevPage={isDisabledPrevPage || isLoading || isError}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        currentPage={currentPage}
      />
    </main>
  )
}
