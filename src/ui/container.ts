import { styled } from '../shared/styles'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1rem',
  padding: '1rem',
  margin: '0 auto',
  maxWidth: '1200px',
})
