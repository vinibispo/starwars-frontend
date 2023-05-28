import { useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/useCharacter";

export default function CharacterId() {
  const { id } = useParams<{ id: string }>();
  if(!id) throw new Error("No id")

  const { character, isLoading } = useCharacter(id);

  return (
    <div>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
     <div>
       <h2>{character.name}</h2>
       <p>{character.gender}</p>
     </div>
    )}
    </div>
  )
}
