import { Link, useParams } from "react-router-dom"
import { useCharacter } from "../../hooks/characters"
import Card from "../../shared/card";
import { styled } from "../../shared/styles";

const CardContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "1rem",
  padding: "1rem",
})

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  justifyContent: "center",
  'h3': {
    alignSelf: 'center',
    scale: 3,
  }
})
export default function CharacterId() {
  const { id } = useParams();
  if (!id) throw new Error("No id")

  const { character, isLoading } = useCharacter(id);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{character?.name}</h2>
          <p>{character?.gender}</p>
          <Container>
            <h3>Films</h3>
            <CardContainer>
              {character?.films.map((film) => (
                <Card key={film.id} title={film.title} type="film">
                  <Link to={`/films/${film.id}`}>View</Link>
                </Card>
              ))}
            </CardContainer>
          </Container>

          <Container>
            <h3>Planet</h3>
            {character?.planet && (
              <CardContainer>
                <Card title={character.planet.name} type="planet">
                  <Link to={`/planets/${character?.planet.id}`}>View</Link>
                </Card>
              </CardContainer>
            )}
          </Container>
        </div>
      )}
    </div>
  )
}
