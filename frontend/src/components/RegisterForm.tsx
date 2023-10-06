'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { useForm } from "react-hook-form";
import RegisterSchema, { options } from './RegisterSchema';

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
}

const RegisterForm = () => {
  const date = useRef<HTMLInputElement>(null)
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(RegisterSchema) })
  const submitData = (data: FormData) => {
    console.log(data)
    reset()
  }

  const handleChange = () => {
    unregister('birthdate')
    if (date.current !== null) {
      const birthdate = new Date(date.current.value)
      register('birthdate', { value: birthdate.toISOString() })
    }
  }

  return (
    <form className="h-screen justify-center p-8 flex flex-col text-black shadow-xl"
      onSubmit={handleSubmit(submitData)}
    >
      <div className='flex justify-between mt-5 mb-1'>
        <label>Nombre</label>
        <input type="text" {...register('name')} placeholder="Nombre" />
      </div>
      {errors.name && (
        <span className='bg-red-200 text-red-600 px-4 rounded-sm'>{errors.name.message}</span>
      )}
      <div className='flex justify-between mt-5 mb-1'>
        <label>Apellido</label>
        <input type="text" {...register('lastName')} placeholder="Apellido" />
      </div>
      {errors.lastName && (
        <span className='bg-red-200 text-red-600 px-4 rounded-sm '>{errors.lastName.message}</span>
      )}
      <div className='flex justify-between mt-5 mb-1'>
        <label>DNI</label>
        <input type="number" {...register('dni')} placeholder="DNI" />
      </div>
      {errors.dni && (
        <span className='bg-red-200 text-red-600 px-4 rounded-sm '>{errors.dni.message}</span>
      )}
      <div className='flex justify-between mt-5 mb-1'>
        <label>Email</label>
        <input type="email" {...register('email')} placeholder="Email" />
      </div>
      {errors.email && (
        <span className='bg-red-200 text-red-600 px-4 rounded-sm '>{errors.email.message}</span>
      )}
      <div className='flex justify-between mt-5 mb-1'>
        <label>Obra Social</label>
        <select {...register('insurance')}>
          <option value=''>* Seleccione Obra Social *</option>
          {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
      {errors.insurance && (
        <span className='bg-red-200 text-red-600 px-4 rounded-sm '>{errors.insurance.message}</span>
      )}
      <div className='flex justify-between mt-5 mb-1'>
        <label>Fecha de Nacimiento</label>
        <input type="date" ref={date} onChange={handleChange} />
      </div>
      {errors.birthdate && (
        <span className='bg-red-200 text-red-600 px-4 rounded-sm '>{errors.birthdate.message}</span>
      )}
      <div className='flex justify-between mt-5 mb-1'>
        <label>Número de Teléfono</label>
        <input type="number" {...register('phoneNumber')} placeholder="Número de teléfono" />
      </div>
      {errors.phoneNumber && (
        <span className='bg-red-200 text-red-600 px-4 rounded-sm '>{errors.phoneNumber.message}</span>
      )}
      <div className='flex justify-between mt-5 mb-1'>
        <label>Contraseña</label>
        <input type="password" {...register('password')} placeholder="Contraseña" />
      </div>
      {errors.password && (
        <span className='bg-red-200 text-red-600 px-4 rounded-sm '>{errors.password.message}</span>
      )}
      <div className='flex justify-between mt-5 mb-1'>
        <label>Confirmar Contraseña</label>
        <input type="password" {...register('confirmPassword')} placeholder="Confirmar contraseña" />
      </div>
      {errors.confirmPassword && (
        <span className='bg-red-200 text-red-600 px-4 rounded-sm'>{errors.confirmPassword.message}</span>
      )}
      <button type="submit">Registrar</button>
    </form>
  )
}

export default RegisterForm