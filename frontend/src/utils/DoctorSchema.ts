import z, { ZodType } from "zod";

type DoctorData = {
  name: string
  lastName: string
  dni: string
  email: string
  birthdate: string
  phoneNumber: string
  password: string
  confirmPassword: string
  insurance: string[]
  licenseNumber: string
  genre: string
}

export const genreOptions = ['Masculino', 'Femenino'] as const
export const specialityOptions = [
  "Cardiólogo",
  "Otorrinolaringología",
  "Oftalmólogo",
  "Neurólogo",
  "Dermatólogo",
  "Reumatólogo",
  "Urólogo",
  "Psiquiatra",
  "Ginecólogo",
  "Pediatría"
] as const

export const DoctorSchema: ZodType<DoctorData> = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  lastName: z.string().min(3, { message: 'El apellido debe tener al menos 3 caracteres' }),
  dni: z.string().refine((value) => value.replace(/\D/g, '').length === 8, {
    message: 'Ingrese un DNI válido',
  }),
  email: z.string().min(4, { message: 'Ingrese un email válido' }).email(),
  insurance: z.array(z.string()),
  birthdate: z.string().datetime(),
  phoneNumber: z.string().refine((value) => value.replace(/\D/g, '').length > 7, {
    message: 'Ingrese un número de telefono válido',
  }),
  licenseNumber: z.string().min(6, { message: 'Ingrese una matricula válida' }),
  genre: z.enum(genreOptions, { errorMap: () => ({ message: 'Selecciona una género' }) }),
  speciality: z.enum(specialityOptions, { errorMap: () => ({ message: 'Selecciona una especialidad' }) }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
  confirmPassword: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden!',
  path: ['confirmPassword'],
})