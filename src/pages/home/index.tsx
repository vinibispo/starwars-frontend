import { styled, keyframes } from '../../shared/styles'
import starWarsSong from '../../assets/star-wars-theme-song.mp3'
import { useEffect, useRef } from 'react'

const scroll = keyframes({
  '0%': {
    top: 0,
    transform: 'translateZ(0) rotateX(20deg)',
  },
  '100%': {
    top: -6000,
    transform: 'translateZ(-2500px) rotate(21deg)',
  },
})
const Container = styled('main', {
  overflow: 'hidden',
  position: 'relative',
  margin: '40% 0 0',
  '&::after': {
    content: '',
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '50%',
    background:
      'linear-gradient(0deg, rgba(20,20,20,1) 40%, rgba(20,20,20,0) 100%))',
  },
})
const Wrapper = styled('div', {
  display: 'flex',
  height: '100%',
  width: '60%',
  margin: '0 auto',
  perspective: '450px',
})

const ScrollText = styled('div', {
  lineHeight: '1.5',
  fontWeight: 'bold',
  textAlign: 'justify',
  position: 'relative',
  'h1, h2, p': {
    fontSize: '4vw',
    color: '$secondary',
  },
  animation: `${scroll} 30s linear infinite`,

  'h1, h2': {
    textAlign: 'center',
  },
})

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(new Audio(starWarsSong))
  useEffect(() => {
    const audio = audioRef.current
    audio.play()
    audio.volume = 0.5
    audio.currentTime = 50
    audio.loop = true
    return () => {
      audio.pause()
    }
  }, [])
  return (
    <Container>
      <Wrapper>
        <ScrollText>
          <h1>Home</h1>
          <h2>Star Wars App</h2>
          <p>It is a period of civil war.</p>
          <p>Rebel spaceships, striking</p>
          <p>from a hidden base, have won</p>
          <p>their first victory against</p>
          <p>the evil Galactic Empire.</p>
          <p></p>
          <p>During the battle, Rebel</p>
          <p>spies managed to steal secret</p>
          <p>plans to the Empire’s</p>
          <p>ultimate weapon, the DEATH</p>
          <p>STAR, an armored space</p>
          <p>station with enough power to</p>
          <p>destroy an entire planet.</p>
          <p></p>
          <p>Pursued by the Empire’s </p>
          <p>sinister agents, Princess</p>
          <p>Leia races home aboard her</p>
          <p>starship, custodian of the</p>
          <p>stolen plans that can save</p>
          <p>her people and restore freedom to the galaxy….</p>
        </ScrollText>
      </Wrapper>

    </Container>
  )
}
