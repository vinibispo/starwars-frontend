import { Link } from "react-router-dom"
import { useCharacters } from "../../hooks/characters"

export default function Characters() {
  const { characters, isLoading, isError } = useCharacters()
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <main>
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <p>{character.gender}</p>
          <Link to={`/characters/${character.id}`}>View</Link>
        </div>
      ))}
    </main>
  )
}
