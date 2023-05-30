import { ReactNode } from 'react'
import { styled } from './styles'
import film from '../assets/film.svg'
import planet from '../assets/planet.svg'
import character from '../assets/character.svg'
import { Link as ReactRouterLink } from 'react-router-dom'

type Type = 'planet' | 'character' | 'film'
type CardProps = {
  title: string
  children?: ReactNode
  type?: Type
  id: number
}

const CardContainer = styled('div', {
  backgroundColor: '$card',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '2rem 2.5rem',
  borderRadius: '8px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  margin: '1rem 0',
  maxWidth: '400px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.3)',
  },
})
const Title = styled('h2', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  fontFamily: '$secondary',
  textTransform: 'uppercase',
  marginTop: '1rem',
})

const Link = styled(ReactRouterLink, {
  color: '$link',
  marginTop: '0.5rem',
})
export default function Card({
  title,
  children,
  type = 'planet',
  id,
}: CardProps) {
  const getIcon = () => {
    switch (type) {
      case 'planet':
        return { alt: 'planet', src: planet }
      case 'character':
        return { alt: 'character', src: character }
      case 'film':
        return { alt: 'film', src: film }
    }
  }
  const icon = getIcon()
  return (
    <CardContainer>
      <img src={icon.src} alt={icon.alt} />
      <Title>{title}</Title>
      {children}
      <Link to={`/${type}s/${id}`}>View</Link>
    </CardContainer>
  )
}
