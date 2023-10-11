import z, { ZodType } from "zod";

type FormData = {
  name: string
  lastName: string
  dni: string
  email: string
  birthdate: string
  phoneNumber: string
  password: string
  confirmPassword: string
  insurance: string
  licenseNumber: string
  genre: string
}

export const options = ['Obra Social 1', 'Obra Social 2', 'Obra Social 3', 'Obra Social 4'] as const
export const genreOptions = ['Masculino', 'Femenino'] as const

const RegisterSchema: ZodType<FormData> = z.object({
  name: z.string().min(3, {message: 'El nombre debe tener al menos 3 caracteres'}),
  lastName: z.string().min(4, { message: 'El apellido debe tener al menos 4 caracteres' }),
  dni: z.string().refine((value) => value.replace(/\D/g, '').length > 7, {
    message: 'Ingrese un DNI válido',
  }),
  email: z.string().min(4, { message: 'Ingrese un email válido' }).email(),
  insurance: z.enum(options, {errorMap: () => ({message: 'Selecciona una obra social'})}),
  birthdate: z.string().datetime(),
  phoneNumber: z.string().refine((value) => value.replace(/\D/g, '').length > 9, {
    message: 'Ingrese un número de telefono válido',
  }),
  licenseNumber: z.string().min(6, {message: 'El nombre debe tener al menos 6 caracteres'}),
  genre: z.enum(genreOptions, {errorMap: () => ({message: 'Selecciona una género'})}),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
  confirmPassword: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden!',
  path: ['confirmPassword'],
})

export default RegisterSchema

