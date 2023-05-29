import { useParams } from "react-router-dom"
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

const CharacterContainer = styled("div", {
  display: "flex",
  gap: "2rem",
  margin: "1rem",
  background: "#2e557c",
  padding: "4rem",
})

const Wrapper = styled("div", {

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
        <>
        <CharacterContainer>
          <Wrapper>
            <h1>{character?.name}</h1>
            <p>Gender: {character?.gender}</p>
            <p>Birth Year: {character?.birth_year}</p>
            <p>Height: {character?.height}</p>
            <p>Mass: {character?.mass}</p>
            <p>Eye Color: {character?.eye_color}</p>
            <p>Hair Color: {character?.hair_color}</p>
            <p>Skin Color: {character?.skin_color}</p>

          </Wrapper>
          </CharacterContainer>
          <Container>
            <h3>Films</h3>
            <CardContainer>
              {character?.films.map((film) => (
                <Card id={film.id} key={film.id} title={film.title} type="film">
                </Card>
              ))}
            </CardContainer>
          </Container>

          <Container>
            <h3>Planet</h3>
            {character?.planet && (
              <CardContainer>
                <Card id={character.planet.id} title={character.planet.name} type="planet">
                </Card>
              </CardContainer>
            )}
          </Container>
        </>
      )}
    </div>
  )
}
