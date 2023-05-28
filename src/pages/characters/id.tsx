import { Link, useParams } from "react-router-dom"
import { useCharacter } from "../../hooks/characters"
import Card from "../../shared/card";

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
          <div>
            {character?.films.map((film) => (
              <Card key={film.id} title={film.title} type="film">
                <Link to={`/films/${film.id}`}>View</Link>
              </Card>
            ))}
          </div>

          <div>
            {character?.planet && (
              <Card title={character.planet.name} type="planet">
                <Link to={`/planets/${character?.planet.id}`}>View</Link>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
