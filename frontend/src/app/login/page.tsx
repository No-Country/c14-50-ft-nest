import Link from "next/link"

export default function Login() {

  return (
    <main className="login-page-container  grid place-content-center min-h-screen w-[40%] ml-auto">
      <section className="w-screen px-10 py-10 rounded-lg flex flex-col gap-5 justify-center min-w-full max-w-md mx-auto">
        <div>

        <h1 className="loginText text-5xl mb-7 text-black font-bold relative">
        Hola!
        </h1>
        <span>Bienvenido otra vez!</span>
        </div>
        <form
          className="flex flex-col gap- min-w-full gap-3"
        >
          <div className="flex flex-col gap-3">
            <span className="text-black font-medium">Email</span>
            <input
              className="w-full pl-2 p-4 text-black focus:outline-none rounded-full"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-black font-medium">Password</span>
            <input
              className="w-full rounded pl-2 p-4 text-black focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="singIn rounded px-3 py-2 text-white mt-5 font-medium">
            Sign In
          </button>
        </form>
        <div className="flex justify-between">
          <button className="text-red-500">Forgot password</button>
          <Link href="/register">Sign Up</Link>
        </div>
      </section>
    </main>
  )
}
