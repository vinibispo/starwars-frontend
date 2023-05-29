import { styled } from "./styles"

const PaginationContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
})

const Button = styled('button', {
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '0.25rem',
  backgroundColor: '$secondary',
  color: '$white',
  cursor: 'pointer',
  '&:disabled': {
    filter: 'brightness(0.5)',
    cursor: 'not-allowed',
  }
})

type PaginationProps = {
  onNextPage: () => void
  onPrevPage: () => void
  currentPage: number
  isDisabledNextPage: boolean
  isDisabledPrevPage: boolean
}
export const Pagination = ({ onNextPage, onPrevPage, currentPage, isDisabledNextPage, isDisabledPrevPage }: PaginationProps) => {
  return (
    <PaginationContainer>
      <Button onClick={onPrevPage} disabled={isDisabledPrevPage}>{"<"}</Button>
      <p>Page {currentPage}</p>
      <Button onClick={onNextPage} disabled={isDisabledNextPage}>{">"}</Button>
    </PaginationContainer>
  )
}
