import { z } from "zod"

const characterSchema = z.object({
  id: z.number(),
  name: z.string(),
})

const planetSchema = z.object({
  id: z.number(),
  name: z.string(),
})
export const filmSchema = z.object({
  id: z.number(),
  title: z.string(),
  opening_crawl: z.string(),
  episode_id: z.number(),
  director: z.string(),
  producer: z.string(),
  release_date: z.string(),
  characters: z.array(characterSchema),
  planets: z.array(planetSchema),
})

export const filmsSchema = z.array(filmSchema)
