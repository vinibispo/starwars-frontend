import { z } from "zod"

const filmSchema = z.object({
  title: z.string(),
  id: z.number(),
})
const planetSchema = z.object({
  name: z.string(),
  id: z.number(),
})
export const characterSchema = z.object({
  id: z.number(),
  name: z.string(),
  birth_year: z.string(),
  eye_color: z.string(),
  gender: z.string(),
  hair_color: z.string(),
  height: z.string(),
  mass: z.string(),
  skin_color: z.string(),
  homeworld: z.number(),
  films: z.array(filmSchema),
  planet: planetSchema,
})

export const charactersSchema = z.array(characterSchema)
