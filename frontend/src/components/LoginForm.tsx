'use client'
import Link from 'next/link'
import { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    setMessage
    console.log(email, password)
  }

  return (
    <form className={`flex flex-col justify-center max-w-sm w-full h-fit px-2 py-5 text-primary gap-4`}>
       <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Correo electrónico</label>
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Contraseña</label>
        <input
          value={email}
          type="password"
          placeholder="Contraseña"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <Link href="/auth/register" className="text-red-500 font-medium underline">Olvide mi contraseña</Link>
      <div className='my-2'>
        <button
          className="bg-primary w-full text-white hover:bg-[#0C616E] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300"
          type="submit"
        >
          Iniciar sesión
        </button>
        <p>{message}</p>
      </div>
    </form>
  )
}

export default LoginForm