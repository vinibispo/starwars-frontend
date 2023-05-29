import { Outlet } from 'react-router-dom'
import NavBar from './navbar'

export function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
