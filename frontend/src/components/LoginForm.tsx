'use client'
import axios from "axios";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const LoginForm = () => {
  const [documento, setDocumento] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const router = useRouter()
  const URL = "https://nc-project-lim7.onrender.com/api/auth/login"

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log('cargarndooooooo')
    e.preventDefault()
    try {
      const data = {
        document: documento,
        password: password
      }
      const response = await axios
        .post(URL, data)

      const { token } = response.data
      console.log(token);

      router.push('/dashboard/mis-turnos', { scroll: false })

    } catch (err) {
      const errors = err.response.data.message //ignorar si sale un error unkown (funciona correctamente)
      if (errors) {
        toast.error(errors);
      }

      // toast({
      //   title: 'Error',
      //   description: errors.length === 1 ? errors : errors.join(', '),
      //   status: 'error',
      //   position: 'bottom-right',
      //   duration: 3000,
      //   isClosable: true,
      // })
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col justify-center max-w-sm w-full h-fit px-2 py-5 text-primary gap-4`}>
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Numero de documento</label>
        <input
          value={documento}
          type="text"
          placeholder="99.999.999"
          onChange={e => setDocumento(e.target.value)}
        />
      </div>
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Contraseña</label>
        <input
          value={password}
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
      <Toaster position="bottom-right" reverseOrder={false} />
    </form>
  )
}

export default LoginForm