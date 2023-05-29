import { z } from 'zod'

export const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  token: z.string(),
})

export type User = z.infer<typeof userSchema>
