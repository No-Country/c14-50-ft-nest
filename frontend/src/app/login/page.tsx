import Link from "next/link"
import LoginForm from "@/components/LoginForm"

export default function Login() {

  return (
    <main className="login-page-container  grid place-content-center min-h-screen w-screen">
      <section className="w-screen px-10 py-10 rounded-lg flex flex-col gap-5 justify-center min-w-full max-w-md mx-auto">
        <h1 className="loginText text-5xl mb-7 text-black font-bold relative">
          Sing In
        </h1>
        <LoginForm />
        <div className="flex justify-between">
          <Link href="/resetpassword">Forgot password</Link>
          
          <Link href="/register">Sing Up</Link>
        </div>
      </section>
    </main>
  )
}
