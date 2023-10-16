"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useRouter } from 'next/navigation'

type FormData = {
  name: string;
  lastName: string;
  document: string;
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
  const URL = 'https://nc-project-lim7.onrender.com/api/auth/register'
  const toast = useToast()
  const router = useRouter()

  const {
    register,
    unregister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (Object.values(errors).some((error) => error)) {
      setNewError(true);
    }
  }, [errors]);

  const submitData = (data: FormData) => {
    
    const dataToSend = {
      name: data.name,
      lastName: data.lastName,
      document: data.document,
      email: data.email,
      birthdate :data.birthdate,
      password:data.password
    }
    if (isChecked) { //!DOCTOR
      axios
      .post(URL, {...dataToSend,role:"doctor"})
      .then((res) => {
        toast({
          title: 'Usuario Registrado!',
          description: "Ahora inicia sesion!",
          status: 'success',
          position: 'bottom-right',
          duration: 3000,
          isClosable: true,
        })
        reset();
        router.push('/auth/login')
      })
      .catch((err) => {
        const errors = err.response.data.message
        
        toast({
          title: 'Error',
          description: errors.join(', '),
          status: 'error',
          position: 'bottom-right',
          duration: 3000,
          isClosable: true,
        })
      });
    } else { //!PACIENTE
      axios
      .post(URL,  {...dataToSend,role:"patient"})
      .then((res) =>{
        toast({
          title: 'Usuario Registrado!',
          description: "Ahora inicia sesion!",
          status: 'success',
          position: 'bottom-right',
          duration: 3000,
          isClosable: true,
        })
        reset();
        router.push('/auth/login')
      })
      .catch((err) => {
        
        const errors = err.response.data.message
        console.log(errors);
        toast({
          title: 'Error',
          description: errors.length===1? errors: errors.join(', '),
          status: 'error',
          position: 'bottom-right',
          duration: 3000,
          isClosable: true,
        })
      });
    }
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

  const options = ['Osde',"Swiss Medical"]
  const genreOptions = ['Masculino', 'Femenino']

  return (
    <form
    className={`flex flex-col justify-center max-w-sm w-full h-fit px-2 py-5 text-primary  ${
      newError ? "gap-1" : "gap-5"
    }`}    
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
        <input
          type="text"
          {...register("name")}
          placeholder="Nombre"
        />
      </div>
      {errors.name && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm">
          {/*{errors.name.message}*/}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Apellido</label>

        <input
          type="text"
          {...register("lastName")}
          placeholder="Apellido"
        />
      </div>
      {errors.lastName && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {/*{errors.lastName.message}*/}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Documento</label>
        <input
          type="number"
          {...register("document")}
          placeholder="Documento"
        />
      </div>
      {errors.document && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {/*{errors.document.message}*/}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Correo electrónico</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
        />
      </div>
      {errors.email && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {/*{errors.email.message}*/}
        </span>
      )}
      {isChecked ? (
        <>
          <p className='block text-sm font-bold'>Trabaja con:</p>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
            <span className="ml-2 text-gray-700">Obra Social 1</span>
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
            <span className="ml-2 text-gray-700">Obra Social 2</span>
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
            <span className="ml-2 text-gray-700">Obra Social 3</span>
          </label>
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
          {/*{errors.insurance.message}*/}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Fecha de nacimiento</label>
        <input
          type="date"
          ref={date}
          onChange={handleChange}
        />
      </div>
      {errors.birthdate && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {/*{errors.birthdate.message}*/}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Número de teléfono</label>
        <input
          type="number"
          {...register("phoneNumber")}
          placeholder="Número de teléfono"
        />
      </div>
      {errors.phoneNumber && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm ">
          {/*{errors.phoneNumber.message}*/}
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
              {/*{errors.licenseNumber.message}*/}
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
              {/*{errors.genre.message}*/}
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
          {/*{errors.password.message}*/}
        </span>
      )}
      <div className="mb-0">
        <label className="block text-sm font-bold mb-2">Confirmar contraseña</label>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirmar contraseña"
        />
      </div>
      {errors.confirmPassword && (
        <span className="bg-red-200 text-red-600 px-4 rounded-sm">
          {/*{errors.confirmPassword.message}*/}
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
