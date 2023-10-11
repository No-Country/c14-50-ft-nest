"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import RegisterSchema, { genreOptions, options } from "./RegisterSchema";

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
  licenseNumber: string
  genre: string
};

const RegisterForm = () => {
  // EJEMPLOS DE MATRICULAS EN CABA, BS.AS Y CBA => CABA-12345, PBA-6789, CORD-AB123 o CORD-CD456.
  const date = useRef<HTMLInputElement>(null);
  const [newError, setNewError] = useState(false);
  const [isChecked, setIsChecked] = useState(false)
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
    if (isChecked) {
      //FETCH AL ENDPOINT DE DOCTORES 
    } else {
      //FETCH AL ENDPOINT DE PACIENTES 
    }
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

  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <form
    className={`flex flex-col justify-center max-w-sm w-full h-fit py-5 text-primary  ${
      newError ? "gap-1" : "gap-5"
    }`}    
      onSubmit={handleSubmit(submitData)}
    >
      <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={handleCheckbox}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-primary dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Register as a professional
        </span>
      </label>
      </div>
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Name</label>
        <input
          type="text"
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
      {isChecked && (
        <>
          <div className="mb-0">
          <label className="block text-sm font-bold mb-2">License Number</label>
          <input
            type="text"
            {...register("licenseNumber")}
            placeholder="Número de Licencia"
            />
          </div>
          {errors.licenseNumber && (
            <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
              {errors.licenseNumber.message}
            </span>
          )}
          <div className="mb-0">
            <label className="block text-sm font-bold mb-2">Genre</label>
            <select
              {...register("genre")}
            >
              <option value="">* Seleccione Un Género *</option>
              {genreOptions.map((genreOptions) => (
                <option key={genreOptions} value={genreOptions}>
                  {genreOptions}
                </option>
              ))}
            </select>
          </div>
          {errors.genre && (
            <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
              {errors.genre.message}
            </span>
          )}
        </>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Password</label>
        <input
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
          className="bg-primary text-white hover:bg-[#0C616E] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300"
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
