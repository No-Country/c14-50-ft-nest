"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import RegisterSchema, { options } from "./RegisterSchema";
import Link from "next/link";

type FormData = {
  name: string;
  lastName: string;
  dni: string;
  email: string;
  birthdate: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  insurance: string;
};

const RegisterForm = () => {
  const date = useRef<HTMLInputElement>(null);
  const [newError, setNewError] = useState(false);
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(RegisterSchema) });

  useEffect(() => {
    if (Object.values(errors).some((error) => error)) {
      setNewError(true);
    }
  }, [errors]);

  const submitData = (data: FormData) => {
    console.log(data);
    reset();
  };

  const handleChange = () => {
    unregister("birthdate");
    if (date.current !== null) {
      const birthdate = new Date(date.current.value);
      register("birthdate", { value: birthdate.toISOString() });
    }
  };

  return (
    <form
      className={`flex flex-col justify-center max-w-sm w-full  px-8 lg:pt-32 pt-10 pb-8 mb-4 lg:mt-40 text-[#0B8B9D]  ${
        newError ? "gap-1" : "gap-5"
      }`}
      onSubmit={handleSubmit(submitData)}
    >
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Name</label>

        <input
          type="text"
          className="shadow appearance-none border-[#0B8B9D] border-[1px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("name")}
          placeholder="Nombre"
        />
      </div>
      {errors.name && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm">
          {errors.name.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Last Name</label>

        <input
          className="shadow appearance-none border-[#0B8B9D] border-[1px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          {...register("lastName")}
          placeholder="Apellido"
        />
      </div>
      {errors.lastName && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.lastName.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">DNI</label>
        <input
          className="shadow appearance-none border-[#0B8B9D] border-[1px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          {...register("dni")}
          placeholder="DNI"
        />
      </div>
      {errors.dni && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.dni.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Email</label>
        <input
          className="shadow appearance-none border-[#0B8B9D] border-[1px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          {...register("email")}
          placeholder="Email"
        />
      </div>
      {errors.email && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.email.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Obra Social</label>
        <select
          className="shadow appearance-none border-[#0B8B9D] border-[1px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("insurance")}
        >
          <option value="">* Seleccione Obra Social *</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {errors.insurance && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.insurance.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Birthdate</label>
        <input
          className="shadow appearance-none border-[#0B8B9D] border-[1px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
          ref={date}
          onChange={handleChange}
        />
      </div>
      {errors.birthdate && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.birthdate.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Phone Number</label>
        <input
          className="shadow appearance-none border-[#0B8B9D] border-[1px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          {...register("phoneNumber")}
          placeholder="Número de teléfono"
        />
      </div>
      {errors.phoneNumber && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.phoneNumber.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Password</label>
        <input
          className="shadow appearance-none border-[#0B8B9D] border-[1px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          {...register("password")}
          placeholder="Contraseña"
        />
      </div>
      {errors.password && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.password.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Confirm Password</label>
        <input
          className="shadow appearance-none border-[#0B8B9D] border-[1px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirmar contraseña"
        />
      </div>
      {errors.confirmPassword && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm">
          {errors.confirmPassword.message}
        </span>
      )}
      <div>
        <button
          className="bg-[#0B8B9D] text-white hover:bg-[#0C616E] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300"
          type="submit"
        >
          Registrar
        </button>
      </div>
      <p className="my-1 text-sm flex justify-between px-3 font-medium">
        Already have an Account?
        <Link
          href="/login"
          className="text-blue-700 hover:text-blue-900 underline "
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
