import { Link } from "react-router-dom"
import { styled } from "./styles"
import star from "../assets/star.svg"
import wars from "../assets/wars.svg"

const Header = styled('header', {
  backgroundColor: '$primary',
})
const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
})
const Ul = styled('ul', {
  display: 'flex',
  listStyle: 'none',
  alignItems: 'center',
  gap: '1rem',
  li: {
    paddingLeft: '3rem',
  }
})

const StyledLink = styled(Link, {
  textDecoration: 'none',
  padding: '0'
})

const Logo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  img: {
    transform: 'scale(0.35)',
    '&:last-of-type': {
      marginTop: '-3rem'
    }
  }

})
export default function NavBar() {
  return (
    <Header>
      <Nav>
        <StyledLink to="/">
          <Logo>
            <img src={star} />
            <img src={wars} />
          </Logo>
        </StyledLink>
        <Ul>
          <li>
            <StyledLink to="/planets">Planets</StyledLink>
          </li>
          <li>
            <StyledLink to="/characters">Characters</StyledLink>
          </li>
          <li>
            <StyledLink to="/films">Films</StyledLink>
          </li>
        </Ul>
      </Nav>
    </Header>
  )
}
