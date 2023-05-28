import { BrowserRouter, Route, Routes } from "react-router-dom"
import Planets from "./pages/planets"
import PlanetId from "./pages/planets/id"
import Characters from "./pages/characters"
import CharacterId from "./pages/characters/id"
import Films from "./pages/films"
import FilmId from "./pages/films/id"
import { Layout } from "./shared/layout"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<PlanetId />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterId />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmId />} />
          <Route path="/" element={<div>Home</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
