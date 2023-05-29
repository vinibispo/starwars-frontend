import { Link } from "react-router-dom"
import { useCharacters } from "../../hooks/characters"
import Card from "../../shared/card"
import { styled } from "../../shared/styles"
import { Pagination } from "../../shared/pagination"

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1rem',
  padding: '1rem',
})
export default function Characters() {
  const { characters, isLoading, isError, onPrevPage, onNextPage, currentPage, isDisabledNextPage, isDisabledPrevPage } = useCharacters()
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <main>
      <Container>
        {characters?.map((character) => (
          <Card key={character.id} title={character.name} type="character">
            <p>{character.gender}</p>
            <Link to={`/characters/${character.id}`}>View</Link>
          </Card>
        ))}
      </Container>
      <Pagination
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        currentPage={currentPage}
        isDisabledNextPage={isDisabledNextPage || isLoading || isError}
        isDisabledPrevPage={isDisabledPrevPage || isLoading || isError}
      />
    </main>
  )
}
