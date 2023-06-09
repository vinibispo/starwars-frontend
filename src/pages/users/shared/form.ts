import { styled } from '../../../shared/styles'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
})
export const FormContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2rem',
  maxWidth: '400px',
  padding: '2rem',
  borderRadius: '10px',
})

export const FormError = styled('div', {
  color: '$error',
  fontSize: '1rem',
  textAlign: 'center',
  marginTop: '0.25rem',
  maxWidth: '200px',
})

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Input = styled('input', {
  padding: '0.5rem',
  border: '1px solid',
  borderRadius: '8px',
  '&:focus': {
    outline: 'none',
    borderColor: '#ccc',
  },
  variants: {
    error: {
      true: {
        borderColor: '$error',
        borderWidth: '3px',
      },
    },
  },
})

export const Label = styled('label', {
  marginBottom: '1rem',
  variants: {
    error: {
      true: {
        color: '$error',
      },
    },
  },
})

export const Button = styled('button', {
  padding: '0.5rem 1rem',
  border: '1px solid $secondary',
  backgroundColor: '$secondary',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  '&:focus': {
    outline: 'none',
  },
  '&:hover': {
    filter: 'brightness(0.9)',
  },

  '&:disabled': {
    filter: 'brightness(0.3)',
    cursor: 'not-allowed',
  },
  span: {
    fontSize: '1rem',
    color: '$textInButton',
  },
})

export const Link = styled(ReactRouterLink, {
  color: '$link',
  fontWeight: 'bold',
})
