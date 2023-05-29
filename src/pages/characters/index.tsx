import { useCharacters } from '../../hooks/characters'
import Card from '../../shared/card'
import { Pagination } from '../../shared/pagination'
import { Container } from '../../ui/container'

export default function Characters() {
  const {
    characters,
    isLoading,
    isError,
    onPrevPage,
    onNextPage,
    currentPage,
    isDisabledNextPage,
    isDisabledPrevPage,
  } = useCharacters()
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <main>
      <Container>
        {characters?.map((character) => (
          <Card
            id={character.id}
            key={character.id}
            title={character.name}
            type="character"
          ></Card>
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
