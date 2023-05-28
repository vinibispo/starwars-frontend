import { z } from "zod"

const residentSchema = z.object({
  name: z.string(),
  id: z.number(),
})

const filmSchema = z.object({
  title: z.string(),
  id: z.number(),
})
export const planetSchema = z.object({
  id: z.number(),
  name: z.string(),
  rotation_period: z.string(),
  orbital_period: z.string(),
  diameter: z.string(),
  climate: z.string(),
  gravity: z.string(),
  terrain: z.string(),
  surface_water: z.string(),
  population: z.string(),
  residents: z.array(residentSchema),
  films: z.array(filmSchema),
})

export const planetsSchema = z.array(planetSchema)
