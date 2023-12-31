'use client'
import { authSlice } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const [documento, setDocumento] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  const URL = "https://nc-project-lim7.onrender.com/api/auth/login"

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      document: documento,
      password: password
    }

    toast.promise(
      axios.post(URL, data)
        .then((res: any) => { //falta typear
          const user = {
            token: res.data.token,
            userId: res.data.userId,
            role: res.data.role.name
          }
          localStorage.setItem("userInfo", JSON.stringify(user))
          dispatch(authSlice.actions.setUser({
            token: res.data.token,
            userId: res.data.userId,
            role: res.data.role.name
          }))
          router.push("/dashboard/summary")
        }),
      {
        loading: "Comprobando credenciales...",
        success: <b>Sesion iniciada!</b>,
        error: (err: any) => `${ err.response.data.message.toString() }`,
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col justify-center max-w-sm w-full h-fit px-2 py-5 text-primary gap-4`}>
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Número de documento</label>
        <input
          value={documento}
          type="number"
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
      <Link href="/auth/resetpassword" className="text-red-500 font-medium underline">Olvide mi contraseña</Link>
      <div className='my-2'>
        <button
          className="bg-primary w-full text-white hover:bg-[#0C616E] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300"
          type="submit"
        >
          Iniciar sesión
        </button>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </form>
  )
}

export default LoginForm