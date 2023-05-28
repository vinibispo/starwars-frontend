import { Link } from "react-router-dom"
import { useFilms } from "../../hooks/films"
import { styled } from "../../shared/styles"
import Card from "../../shared/card"

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1rem',
  padding: '1rem',
})
export default function Films() {
  const { films, isLoading } = useFilms()

  return (
    <main>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          {films?.map((film) => (
            <Card key={film.id} title={film.title} type="film">
              <Link to={`/films/${film.id}`}>View</Link>
            </Card>
          ))}
        </Container>
      )}
    </main>
  )
}
