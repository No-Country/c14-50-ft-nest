"use client";
import { ClientSchema, options } from '@/utils/ClientSchema';
import { DoctorSchema, genreOptions } from '@/utils/DoctorSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

type ClientData = {
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

type DoctorData = {
  name: string
  lastName: string
  dni: string
  email: string
  birthdate: string
  phoneNumber: string
  password: string
  confirmPassword: string
  insurance: string[]
  licenseNumber: string
  genre: string
}

const RegisterForm = () => {
  // EJEMPLOS DE MATRICULAS EN CABA, BS.AS Y CBA => CABA-12345, PBA-6789, CORD-AB123 o CORD-CD456.
  const date = useRef<HTMLInputElement>(null);
  const [newError, setNewError] = useState(false);
  const [isChecked, setIsChecked] = useState(false)
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  function handleCheckboxChange (event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedItems([...selectedItems, value]);
      console.log(selectedItems)
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
      console.log(selectedItems)
    }
  }

  const selectedSchema = isChecked ? DoctorSchema : ClientSchema

  const {
    register,
    unregister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DoctorData | ClientData>({ resolver: zodResolver(selectedSchema) });

  useEffect(() => {
    if (Object.values(errors).some((error) => error)) {
      setNewError(true);
    }
  }, [errors]);

  const submitData = (data: DoctorData | ClientData) => {
    if (isChecked) {
      register("insurance", { value: selectedItems })
    }
    // La función recibe data, que es de tipo DoctorData si isChecked es verdadero,
    // o de tipo PatientData si isChecked es falso.
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
      className={`flex flex-col justify-center max-w-sm w-full h-fit px-2 py-5 text-primary  ${ newError ? "gap-1" : "gap-5"
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
            Registrarme como profesional
          </span>
        </label>
      </div>
      <div className="mb-0">
        <label htmlFor='name' className="block text-sm font-bold mb-2">Nombre</label>
        <input
          id='name'
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
        <label htmlFor='lastname' className="block text-sm font-bold mb-2">Apellido</label>

        <input
          id='lastname'
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
        <label htmlFor='dni' className="block text-sm font-bold mb-2">DNI</label>
        <input
          id='dni'
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
        <label htmlFor='email' className="block text-sm font-bold mb-2">Correo electrónico</label>
        <input
          id='email'
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
      {isChecked ? (
        <>
          <p className='block text-sm font-bold'>Trabaja con:</p>
          {options.map((option) => (
            <label className="inline-flex items-center cursor-pointer" key={option}>
              <input
                type="checkbox"
                className={`form-checkbox h-5 w-5 text-primary ${ selectedItems.includes(option) ? 'bg-primary' : 'bg-white' }`}
                value={option}
                checked={selectedItems.includes(option)}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-gray-700">{option}</span>
            </label>
          ))}
        </>
      ) : (
        <div className="mb-0">
          <label className="block text-sm font-bold mb-2">Obra social</label>
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
      )}
      {errors.insurance && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.insurance.message}
        </span>
      )}
      <div className="mb-0">
        <label htmlFor='date' className="block text-sm font-bold mb-2">Fecha de nacimiento</label>
        <input
          id='date'
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
        <label htmlFor='phoneNumber' className="block text-sm font-bold mb-2">Número de teléfono</label>
        <input
          id='phoneNumber'
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
            <label className="block text-sm font-bold mb-2">Número de matrícula</label>
            <input
              type="text"
              {...register("licenseNumber")}
              placeholder="Número de Matricula"
            />
          </div>
          {errors.licenseNumber && (
            <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
              {errors.licenseNumber.message}
            </span>
          )}
          <div className="mb-0">
            <label className="block text-sm font-bold mb-2">Género</label>
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
        <label htmlFor='password' className="block text-sm font-bold mb-2">Contraseña</label>
        <input
          id='password'
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
        <label htmlFor='confirmPassword' className="block text-sm font-bold mb-2">Confirmar contraseña</label>
        <input
          id='confirmPassword'
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
      <div className='my-2'>
        <button
          className="bg-primary w-full text-white hover:bg-[#0C616E] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300"
          type="submit"
        >
          Registrar
        </button>
      </div>
      <p className="my-2 text-sm flex justify-between font-medium">
        ¿Ya tienes una cuenta?
        <Link
          href="/auth/login"
          className="text-blue-700 hover:text-blue-900 mx-2"
        >
          Iniciar sesión
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
