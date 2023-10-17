import LoginForm from '@/components/LoginForm'
import Link from "next/link"

export default function Login () {

  return (
    <div className="p-3 pb-12 shadow-md lg:w-[40%] lg:ml-auto lg:overflow-y-scroll bg-white flex flex-col items-center justify-center">
      <h1 className='max-w-sm w-full text-primary font-bold text-3xl mb-4 text-center'>Hola</h1>
      <p>Bienvenido otra vez</p>
      <LoginForm />
      <p className="my-2 text-sm flex justify-between font-medium">
        ¿No tienes una cuenta?
        <Link
          href="/auth/register"
          className="text-blue-700 hover:text-blue-900 mx-2 underline"
        >
          Registrate
        </Link>
      </p>
    </div>
  )
}
