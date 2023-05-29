import { styled } from '../styles'
import { ArrowLeftIcon } from './arrow-left'
import ArrowRightIcon from './arrow-right'

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
  cursor: 'pointer',
  '&:disabled': {
    filter: 'brightness(0.5)',
    cursor: 'not-allowed',
  },
  svg: {
    stroke: '$primary',
    width: '2rem',
  },
})

type PaginationProps = {
  onNextPage: () => void
  onPrevPage: () => void
  currentPage: number
  isDisabledNextPage: boolean
  isDisabledPrevPage: boolean
}
export const Pagination = ({
  onNextPage,
  onPrevPage,
  currentPage,
  isDisabledNextPage,
  isDisabledPrevPage,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <Button onClick={onPrevPage} disabled={isDisabledPrevPage}>
        <ArrowLeftIcon />
      </Button>
      <p>Page {currentPage}</p>
      <Button onClick={onNextPage} disabled={isDisabledNextPage}>
        <ArrowRightIcon />
      </Button>
    </PaginationContainer>
  )
}
