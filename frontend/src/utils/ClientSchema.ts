import z, { ZodType } from "zod";

type ClientData = {
  firstName: string
  lastName: string
  document: string
  email: string
  birthDate: string
  phone: string
  password: string
  confirmPassword: string
  //insurance: string
}

export const options = ['Osde', 'Swiss Medical'] as const

export const ClientSchema: ZodType<ClientData> = z.object({
  firstName: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  lastName: z.string().min(3, { message: 'El apellido debe tener al menos 3 caracteres' }),
  document: z.string().refine((value) => value.replace(/\D/g, '').length === 8, {
    message: 'Ingrese un DNI válido',
  }),
  email: z.string().min(4, { message: 'Ingrese un email válido' }).email(),
  //insurance: z.enum(options, { errorMap: () => ({ message: 'Selecciona una obra social' }) }),
  birthDate: z.string().datetime(),
  phone: z.string().refine((value) => value.replace(/\D/g, '').length > 7, {
    message: 'Ingrese un número de telefono válido',
  }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
  confirmPassword: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden!',
  path: ['confirmPassword'],
})