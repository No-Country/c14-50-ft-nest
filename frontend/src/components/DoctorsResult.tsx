import { doctors } from "@/utils/Doctors"
import axios from "axios"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Loader from "./Loader"

type Doctor = {
  nombre: string
  especialidad: string
  género: string
  edad: number
}

interface Props {
  setSelectedDoc: Dispatch<SetStateAction<Doctor>>
  selectedDoc: Doctor
  selectedSpeciality: string | null
}

const DoctorsResult = ({
  selectedSpeciality,
  setSelectedDoc,
  selectedDoc
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const insurances = ["Ossde", "Swiss medical"]
  const [isLoading, setIsLoading] = useState(true)
  const [alldoctors , setAlldoctors] = useState()

  const closeModal = () => {
    setIsOpen(false)
  }

  //! alldoctors aqui estan todos los doctores, pero falta adjuntar mas info desde el back
  //! hacer un console.log para ver los datos del doctor enviados del back

  const handleOutsideClick = (e: any) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  useEffect(() => {
    axios
      .get("https://nc-project-lim7.onrender.com/api/doctor")
      .then((res) => setAlldoctors(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const filteredDoctors = doctors.filter(
    (doctor) => doctor.especialidad === selectedSpeciality
  )

  const handleRowClick = (doctor: Doctor) => {
    setSelectedDoc(doctor)
  }

  return (
    <>
      {isLoading ? <Loader /> : false}
      <div>
        <table className="basic">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Especialidad</th>
              <th>Género</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doctor, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(doctor)}
                className={`cursor-pointer ${
                  selectedDoc === doctor ? "bg-slate-300" : "bg-white"
                }`}
              >
                <td>{doctor.nombre}</td>
                <td className="text-center">{doctor.especialidad}</td>
                <td className="text-center">{doctor.género}</td>
                <td>
                  <svg
                    onClick={() => setIsOpen(true)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.0}
                    stroke="currentColor"
                    className="w-6 h-6 hover:fill-primary transition-all duration-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOpen && (
          <div
            onClick={handleOutsideClick}
            className="backdrop-blur-sm bg-white/30 main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
          >
            <div className="border border-teal-500 bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-4 text-left px-6">
                {/* <!--Title--> */}
                <div className="flex justify-between items-center pb-3 border-b-2">
                  <div className="flex items-center -space-x-4">
                    <img
                      alt="user 1"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                      className="relative inline-block h-[60px] w-[60px] rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold">{selectedDoc.nombre}</p>
                    <p>{selectedDoc.especialidad}</p>
                  </div>
                  <div></div>
                </div>
                {/* <!--Body--> */}
                <div className="my-5 flex">
                  <div>
                    <p className="font-bold">Trabaja con:</p>
                    {insurances.map((insurance, index) => (
                      <li key={index}>{insurance}</li>
                    ))}
                    <p>Datos que el doctor quiera compartir...</p>
                  </div>
                </div>
                {/* <!--Footer--> */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={closeModal}
                    className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default DoctorsResult
