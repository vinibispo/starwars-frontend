import { Link } from 'react-router-dom'
import { styled } from './styles'
import star from '../assets/star.svg'
import wars from '../assets/wars.svg'
import { AvatarFallback as Fallback, Root } from '@radix-ui/react-avatar'
import SignOutIcon from '../ui/styles/sign-out'
import { useAuth } from '../hooks/user'

const Header = styled('header', {
  backgroundColor: '$primary',
  position: 'sticky',
  top: '0',
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
  },
})

const InvisibleButton = styled('button', {
  background: 'transparent',
  border: 'none',
  padding: '0',
  cursor: 'pointer',
  outline: 'none',
})

const AvatarFallback = styled(Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$card',
})

const AvatarRoot = styled(Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  width: '4rem',
  height: '4rem',
  borderRadius: '100%',
  userSelect: 'none',
})

const StyledLink = styled(Link, {
  textDecoration: 'none',
  padding: '0',
})

const Logo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  img: {
    transform: 'scale(0.35)',
    '&:last-of-type': {
      marginTop: '-3rem',
    },
  },
})

export default function NavBar() {
  const {
    user: { name },
    signOut,
  } = useAuth()
  const initials = name
    .split(' ')
    .map((n) => n[0]?.toUpperCase() ?? '')
    .join('')
  return (
    <Header>
      <Nav>
        <StyledLink to="/">
          <Logo>
            <img src={star} alt="star" />
            <img src={wars} alt="wars" />
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
        <AvatarRoot>
          <AvatarFallback>{initials}</AvatarFallback>
        </AvatarRoot>
        <InvisibleButton onClick={signOut}>
          <SignOutIcon />
        </InvisibleButton>
      </Nav>
    </Header>
  )
}
