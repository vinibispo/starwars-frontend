import { useQuery } from '@tanstack/react-query'
import { api } from '../resources/api'
import { filmSchema, filmsSchema } from '../resources/schema/films'
import { useCallback, useMemo, useState } from 'react'

const fetchFilm = async (id: string) => {
  const res = await api.get(`/films/${id}`)
  return filmSchema.parse(res.data)
}
export function useFilm(id: string) {
  const { data, ...rest } = useQuery({
    queryKey: ['films', id],
    queryFn: () => fetchFilm(id),
  })

  return { film: data, ...rest }
}

export function useFilms() {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const fetchFilms = async (page: number) => {
    const res = await api.get('/films')
    if (page === 1) {
      setTotalPages(Number(res.headers['total-pages']))
    }
    return filmsSchema.parse(res.data)
  }
  const { data, ...rest } = useQuery({
    queryKey: ['films', String(page)],
    queryFn: () => fetchFilms(page),
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
    films: data,
    onNextPage,
    onPrevPage,
    currentPage: page,
    isDisabledPrevPage,
    isDisabledNextPage,
    ...rest,
  }
}
