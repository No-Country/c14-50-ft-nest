"use client";
import { ClientSchema, options } from "@/utils/ClientSchema";
import { DoctorSchema, genreOptions } from "@/utils/DoctorSchema";
import { getCurrentDate } from '@/utils/getCurrentDate';
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type ClientData = {
  firstName: string;
  lastName: string;
  document: number;
  email: string;
  birthDate: string;
  phone: string;
  password: string;
  confirmPassword: string;
  insurance: string;
};

type DoctorData = {
  firstName: string;
  lastName: string;
  document: number;
  email: string;
  birthDate: string;
  phone: string;
  password: string;
  confirmPassword: string;
  insurance: string[];
  licenseNumber: string;
  gender: string;
  speciality:string[];
  schedule:string[];
  registrationNumber:number
};

const RegisterForm = () => {
  // EJEMPLOS DE MATRICULAS EN CABA, BS.AS Y CBA => CABA-12345, PBA-6789, CORD-AB123 o CORD-CD456.
  const { year, month, day } = getCurrentDate()
  const currentDate = `${ year }-${ month }-${ day }`
  const date = useRef<HTMLInputElement>(null);
  const [newError, setNewError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const URLDOCTOR = "https://nc-project-lim7.onrender.com/api/auth/register/doctor";
  const URLPATIENT = "https://nc-project-lim7.onrender.com/api/auth/register/patient";
  const router = useRouter();

  function handleCheckboxChange (event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  }

  const selectedSchema = isChecked ? DoctorSchema : ClientSchema;

  const {
    register,
    unregister,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<DoctorData | ClientData>({
    resolver: zodResolver(selectedSchema),
  });

  useEffect(() => {
    if (Object.values(errors).some((error) => error)) {
      setNewError(true);
    }
  }, [errors, isChecked, selectedItems]);

  const submitData = ({insurance,confirmPassword,...rest}: DoctorData | ClientData) => {


    if (isChecked) {
      toast.promise(
        axios.post(URLDOCTOR, { ...rest, role: "doctor" }).then(() => {
          router.push("/auth/login");
        }),
        {
          loading: "Registrando...",
          success: <b>Registro exitoso!</b>,
          error: <b>No hemos podido registrarte</b>,
        }
      );
      setSelectedItems([]);
    } else {
      toast.promise(
        axios.post(URLPATIENT, { ...rest, role: "patient" })
        .then(() => {
          router.push("/auth/login");
          reset();
        }),
        {
          loading: "Registrando...",
          success: <b>Registro exitoso!</b>,
          error: (err: any) => `${err.response.data.sqlMessage}`,
        }
      );
    }
  };

  const handleChange = () => {
    unregister("birthDate");
    if (date.current!.value) {
      const birthDate = new Date(date.current!.value);
      register("birthDate", { value: birthDate.toISOString() });
    }
  };

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    clearErrors();
  };

  return (
    <>
    <form
      className={`flex flex-col justify-center max-w-sm w-full h-fit px-2 py-5 text-primary  ${ newError ? "gap-1" : "gap-5" }`}
      onSubmit={handleSubmit(submitData as SubmitHandler<FieldValues>)}
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
        <label className="block text-sm font-bold mb-2">Nombre</label>
        <input type="text" {...register("firstName")} placeholder="Nombre" />
      </div>
      {errors.firstName && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm">
          {errors.firstName.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Apellido</label>

        <input type="text" {...register("lastName")} placeholder="Apellido" />
      </div>
      {errors.lastName && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.lastName.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">
          Número de documento
        </label>
        <input type="number" {...register("document")} placeholder="99.999.999" />
      </div>
      {errors.document && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.document.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">
          Correo electrónico
        </label>
        <input type="email" {...register("email")} placeholder="Email" />
      </div>
      {errors.email && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.email.message}
        </span>
      )}
      {isChecked ? (
        <>
          <p className="block text-sm font-bold">Trabaja con:</p>
          {options.map((option) => (
            <label
              className="inline-flex items-center cursor-pointer"
              key={option}
            >
              <input
                type="checkbox"
                className={`form-checkbox h-5 w-5 text-primary ${ selectedItems.includes(option) ? "bg-primary" : "bg-white"
                  }`}
                value={option}
                checked={selectedItems.includes(option)}
                {...register("insurance")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-gray-700">{option}</span>
            </label>
          ))}
        </>
      ) : (
        <div className="mb-0">
          <label className="block text-sm font-bold mb-2">Obra social</label>
          <select {...register("insurance")}>
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
        <label className="block text-sm font-bold mb-2">
          Fecha de nacimiento
        </label>
        <input
          type="date"
          ref={date}
          max={currentDate}
          // onChange={handleChange}
          onBlur={handleChange}
        />
      </div>
      {errors.birthDate && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.birthDate.message}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">
          Número de teléfono
        </label>
        <input
          type="number"
          {...register("phone")}
          placeholder="Número de teléfono"
        />
      </div>
      {errors.phone && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {errors.phone.message}
        </span>
      )}
      {isChecked && (
        <>
          <div className="mb-0">
            <label className="block text-sm font-bold mb-2">
              Número de matrícula
            </label>
            <input
              type="text"
              {...register("licenseNumber")}
              placeholder="Número de Matricula"
            />
          </div>
          {"licenseNumber" in errors && errors.licenseNumber && (
            <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
              {errors.licenseNumber.message}
            </span>
          )}
          <div className="mb-0">
            <label className="block text-sm font-bold mb-2">Género</label>
            <select {...register("gender")}>
              <option value="">* Seleccione Un Género *</option>
              {genreOptions.map((genderOptions:string) => (
                <option key={genderOptions} value={genderOptions}>
                  {genderOptions}
                </option>
              ))}
            </select>
          </div>
          {"gender" in errors && errors.gender && (
            <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
              {errors.gender.message}
            </span>
          )}
        </>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Contraseña</label>
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
        <label className="block text-sm font-bold mb-2">
          Confirmar contraseña
        </label>
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
      <div className="my-2">
        <button
          className="bg-primary w-full text-white hover:bg-[#0C616E] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300"
          type="submit"
        >
          Registrar
        </button>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </form>
    <div>
      <p className="my-2 text-sm flex justify-between font-medium">
        ¿Ya tienes una cuenta?
        <Link
          href="/auth/login"
          className="text-blue-700 hover:text-blue-900 mx-2"
          >
          Iniciar sesión
        </Link>
      </p>
    </div>
     
      </>
  );
};

export default RegisterForm;
