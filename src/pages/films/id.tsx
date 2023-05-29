import { useParams } from 'react-router-dom'
import { useFilm } from '../../hooks/films'
import Card from '../../shared/card'
import { styled } from '../../shared/styles'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  justifyContent: 'center',
  h3: {
    alignSelf: 'center',
    scale: 3,
  },
})

const FilmContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
  margin: '1rem',
  background: '#2e557c',
  padding: '4rem',
})

const CardContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1rem',
  padding: '1rem',
})

const Wrapper = styled('div', {
  minWidth: '400px',
  p: {
    marginTop: '1rem',
  },
})
export default function FilmId() {
  const { id } = useParams<{ id: string }>()
  if (!id) throw new Error('No id provided')
  const { film, isLoading } = useFilm(id)
  const date = new Date(film?.release_date ?? '')
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`

  return isLoading || !film ? (
    <div>Loading...</div>
  ) : (
    <>
      <FilmContainer>
        <Wrapper>
          <h1>{film.title}</h1>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <p>Release Date: {formattedDate}</p>
        </Wrapper>
        <p>{film.opening_crawl}</p>
      </FilmContainer>
      <Container>
        <h3>Casts</h3>
        <CardContainer>
          {film.characters.map((character) => (
            <Card
              id={character.id}
              key={character.id}
              title={character.name}
              type="character"
            ></Card>
          ))}
        </CardContainer>
      </Container>

      <Container>
        <h3>Scenarios</h3>
        <CardContainer>
          {film.planets.map((planet) => (
            <Card
              id={planet.id}
              key={planet.id}
              title={planet.name}
              type="planet"
            ></Card>
          ))}
        </CardContainer>
      </Container>
    </>
  )
}
