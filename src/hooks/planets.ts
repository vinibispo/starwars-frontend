import { useQuery } from '@tanstack/react-query'
import { api } from '../resources/api'
import { planetSchema, planetsSchema } from '../resources/schema/planets'
import { useCallback, useMemo, useState } from 'react'

const fetchPlanet = async (id: string) => {
  const res = await api.get(`/planets/${id}`)
  return planetSchema.parse(res.data)
}
export function usePlanet(id: string) {
  const { data, ...rest } = useQuery({
    queryKey: ['planet', id],
    queryFn: () => fetchPlanet(id),
  })

  return { planet: data, ...rest }
}

export function usePlanets() {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchPlanets = async (page: number) => {
    const res = await api.get('/planets', {
      params: {
        page,
      },
    })
    if (page === 1) {
      setTotalPages(Number(res.headers['total-pages']))
    }
    return planetsSchema.parse(res.data)
  }
  const { data, ...rest } = useQuery({
    queryKey: ['planets', String(page)],
    queryFn: () => fetchPlanets(page),
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
    planets: data,
    onNextPage,
    onPrevPage,
    currentPage: page,
    isDisabledNextPage,
    isDisabledPrevPage,
    ...rest,
  }
}
