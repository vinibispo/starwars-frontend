import { Link } from "react-router-dom"
import { useFilms } from "../../hooks/films"

export default function Films() {
  const { films, isLoading } = useFilms()

  return (
    <main>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {films?.map((film) => (
            <div key={film.id}>
              <h2>{film.title}</h2>
              <Link to={`/films/${film.id}`}>View</Link>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
