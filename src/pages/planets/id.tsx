import { useParams } from 'react-router-dom'
import { usePlanet } from '../../hooks/planets'
import Card from '../../shared/card'
import { styled } from '../../shared/styles'
import planetImg from '../../assets/planet.png'

const CardContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1rem',
  padding: '1rem',
})

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

const PlanetContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
  margin: '1rem',
  background: '#2e557c',
  padding: '4rem',
})

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '1rem',
  ul: {
    listStyle: 'none',
    height: '150px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    li: {
      marginTop: '1rem',
      marginLeft: '2rem',
      fontSize: '1.5rem',
      maxWidth: '300px',
      overflowWrap: 'break-all',
    },
  },
})

export default function PlanetId() {
  const { id } = useParams()
  if (!id) throw new Error('No id provided')
  const { planet, isLoading } = usePlanet(id)

  return (
    <main>
      {isLoading || !planet ? (
        <p>Loading...</p>
      ) : (
        <>
          <PlanetContainer>
            <img
              src={planetImg}
              alt={planet.name}
              width="auto"
              height={300}
              style={{ borderRadius: '50%' }}
            />
            <Wrapper>
              <h1>{planet.name}</h1>
              <ul>
                <li>Population: {planet.population}</li>
                <li>Climate: {planet.climate}</li>
                <li>Terrain: {planet.terrain}</li>
                <li>Surface Water: {planet.surface_water}</li>
                <li>Gravity: {planet.gravity}</li>
                <li>Orbital Period: {planet.orbital_period}</li>
                <li>Rotation Period: {planet.rotation_period}</li>
                <li>Diameter: {planet.diameter}</li>
              </ul>
            </Wrapper>
          </PlanetContainer>
          <Container>
            <h3>Films</h3>
            <CardContainer>
              {planet.films.map((film) => (
                <Card
                  key={film.id}
                  id={film.id}
                  title={film.title}
                  type="film"
                ></Card>
              ))}
            </CardContainer>
          </Container>
          <Container>
            <h3>Residents</h3>
            <CardContainer>
              {planet.residents.map((resident) => (
                <Card
                  key={resident.id}
                  id={resident.id}
                  title={resident.name}
                  type="character"
                ></Card>
              ))}
            </CardContainer>
          </Container>
        </>
      )}
    </main>
  )
}
