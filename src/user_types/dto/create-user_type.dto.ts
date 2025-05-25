import * as z from 'zod'

export const user_types_validation = z.object({
    name: z.string().nonempty().toLowerCase()
})

export class CreateUserTypeDto {}