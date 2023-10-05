"use client"
import { useState } from "react"
import { FormEvent } from "react"

export default function LoginForm (){

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      email: email,
      password: password
    }
    alert(`Email: ${data.email}, Password ${data.password}`)
    
  }

  return(
    <form onSubmit={handeSubmit}
      className="flex flex-col gap- min-w-full gap-3"
    >
      <div className="flex flex-col gap-3">
        <span className="text-black font-medium">Email</span>
        <input
          className="w-full rounded pl-2 p-2 text-black focus:outline-none"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-black font-medium">Password</span>
        <input
          className="w-full rounded pl-2 p-2 text-black focus:outline-none"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button className="singIn rounded px-3 py-2 text-white mt-5 font-medium">
          Sing In
      </button>
    </form>
  )
}