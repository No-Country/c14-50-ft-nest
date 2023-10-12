import Link from "next/link"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>App</h1>
      <Link className="p-2 underline" href="/auth/login">Login</Link>
      <Link className="p-2 underline" href="/auth/register">Registrarse</Link>
    </main>
  )
}
