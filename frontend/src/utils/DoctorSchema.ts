import z, { ZodType } from "zod";

type DoctorData = {
  firstName: string
  lastName: string
  document: string
  email: string
  birthDate: string
  phone: string
  password: string
  confirmPassword: string
  insurance: string[]
  registrationNumber: string
  gender: string
}

export const genderOptions = ['Masculino', 'Femenino'] as const
export const specialityOptions = [
  "Dentista",
  "Ortopedista",
  "Neurólogo",
  "Oftalmólogo",
  "Anestesiólogo",
  "Cardiólogo",
  "Medico General",
  "Pediatra",
  "Psicólogo",
  "Dermatólogo"
] as const

export const DoctorSchema: ZodType<DoctorData> = z.object({
  firstName: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  lastName: z.string().min(3, { message: 'El apellido debe tener al menos 3 caracteres' }),
  document: z.string().refine((value) => value.replace(/\D/g, '').length === 8, {
    message: 'Ingrese un DNI válido',
  }),
  email: z.string().min(4, { message: 'Ingrese un email válido' }).email(),
  insurance: z.array(z.string()),
  birthDate: z.string().datetime(),
  phone: z.string().refine((value) => value.replace(/\D/g, '').length > 7, {
    message: 'Ingrese un número de telefono válido',
  }),
  registrationNumber: z.string().min(6, { message: 'Ingrese una matricula válida' }),
  gender: z.enum(genderOptions, { errorMap: () => ({ message: 'Selecciona un género' }) }),
  specialties: z.enum(specialityOptions, { errorMap: () => ({ message: 'Selecciona una especialidad' }) }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
  confirmPassword: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden!',
  path: ['confirmPassword'],
})