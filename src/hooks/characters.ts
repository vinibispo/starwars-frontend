import { useQuery } from '@tanstack/react-query'
import { api } from '../resources/api'
import {
  characterSchema,
  charactersSchema,
} from '../resources/schema/characters'
import { useCallback, useMemo, useState } from 'react'

const fetchCharacter = async (id: string) => {
  const res = await api.get(`/people/${id}`)
  return characterSchema.parse(res.data)
}
export function useCharacter(id: string) {
  const { data, ...rest } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacter(id),
  })

  return { character: data, ...rest }
}

export function useCharacters() {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const fetchCharacters = async (page: number) => {
    const res = await api.get('/people')
    if (page === 1) {
      setTotalPages(Number(res.headers['total-pages']))
    }
    return charactersSchema.parse(res.data)
  }
  const { data, ...rest } = useQuery({
    queryKey: ['characters', String(page)],
    queryFn: () => fetchCharacters(page),
  })

  const onNextPage = useCallback(() => {
    setPage((old) => Math.min(old + 1, totalPages))
  }, [totalPages])

  const onPrevPage = useCallback(() => {
    setPage((old) => Math.max(old - 1, 1))
  }, [])

  const isDisabledNextPage = useMemo(() => {
    return page === totalPages
  }, [page, totalPages])

  const isDisabledPrevPage = useMemo(() => {
    return page === 1
  }, [page])

  return {
    characters: data,
    onNextPage,
    onPrevPage,
    isDisabledNextPage,
    isDisabledPrevPage,
    currentPage: page,
    ...rest,
  }
}
