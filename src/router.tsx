import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Planets from './pages/planets'
import PlanetId from './pages/planets/id'
import Characters from './pages/characters'
import CharacterId from './pages/characters/id'
import Films from './pages/films'
import FilmId from './pages/films/id'
import { Layout } from './shared/layout'
import Signup from './pages/users/signup'
import SignIn from './pages/users/signin'
import { useAuth } from './hooks/user'
import ForgotPassword from './pages/users/forgot-password'
import ResetPassword from './pages/users/reset-password'
export default function Router() {
  const { isValidAuth, isInvalidAuth } = useAuth()
  return (
    <BrowserRouter>
      <Routes>
        {isValidAuth ? (
          <Route element={<Layout />}>
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<PlanetId />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterId />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/:id" element={<FilmId />} />
            <Route path="/" element={<div>Home</div>} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/signin" replace />} />
        )}

        <Route element={<Outlet />}>
          {isInvalidAuth ? (
            <>
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
