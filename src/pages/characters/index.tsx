import { useCharacters } from "../../hooks/useCharacters"

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
        </div>
      ))}
    </main>
  )
}
