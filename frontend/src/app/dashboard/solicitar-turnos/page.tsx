"use client"
import ConfirmAppointment from "@/components/ConfirmAppointment"
import DoctorsResult from "@/components/DoctorsResult"
import HoursForm from "@/components/HoursForm"
import SpecialtyForm from "@/components/SpecialtyForm"
import { useAppSelector } from '@/redux/hooks'
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps
} from "@chakra-ui/react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'

const steps = [
  {
    title: "Elegir especialidad médica",
    description: "Selecciona la especialidad que necesitas"
  },
  {
    title: "Elegir doctor",
    description: "Elige el doctor según la especialidad"
  },
  {
    title: "Seleccionar horario",
    description: "Escoge la fecha y hora de tu consulta"
  },
  {
    title: "Confirmar turno",
    description: "Confirma el turno elegido"
  }
]

type Doctor = {
  firstName: string,
  lastName: string,
  specialties: string
  gender: string
  age: number
};
type Date = {
  date: string
  hour: string
  value: string
}

export default function SolicitarTurnos () {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("")
  const [dateInfo, setDateInfo] = useState<Date>({ date: '', hour: '', value:'' })
  // const userId = useAppSelector(state => state.authReducer.userId)
  const roleId = useAppSelector(state => state.authReducer.roleId)


  const [selectedDoc, setSelectedDoc] = useState<Doctor>({
    firstName: "",
    lastName: "",
    specialties: "",
    gender: "",
    age: 0
  })

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length
  })

  const router = useRouter();

  const dataToSend = {
    specialty: selectedSpecialty,
    doctor: selectedDoc,
    dateSelected: dateInfo,//"Jueves 19/10/2023 1:00 p.m.",
  };

  const setAppointment = (data: any) => { //falta typear

    const finalValue = {
      day: data.dateSelected.date,
      interval: data.dateSelected.hour,
      doctor: data.doctor.id,
      specialty: data.specialty,
      patient: roleId
    }

    toast.promise(

      axios.post("https://nc-project-lim7.onrender.com/api/appointments", finalValue)
        .then(() => {
          axios
          .patch(`https://nc-project-lim7.onrender.com/api/schedule/${finalValue.interval}`,{occupied:true})
          .then(() =>  router.push("/dashboard/summary"))
        }),
      {
        loading: "Agendando Turno...",
        success: <b>Turno agendado!</b>,
        error: <b>No hemos podido agendar el turno</b>,
      }
    );

  }

  const handlerNext = () => {

    if (activeStep === 3) {
      setAppointment(dataToSend)
      return
    } else {
      if (selectedSpecialty === "Seleccione una especialidad") {
        toast.error("Seleccione una especialidad")
        return
      }
      setActiveStep((prevActiveStep: any) => prevActiveStep + 1)
    }
  }

  const handlerPrev = () => {
    if (activeStep === 0) {
      return
    } else {
      setActiveStep((prevActiveStep: any) => prevActiveStep - 1)
    }
  }

  return (
    <main className="h-screen lg:w-[80%] lg:ml-auto bg-[#f0f4f7] p-10 position-relative">
      <Stepper
        index={activeStep}
        display={{ base: "block", md: "flex" }}
        className="w-full hidden "
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            className="whitespace-nowrap overflow-hidden text-ellipsis mb-4"
          >
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink="0" className="">
              <StepTitle className="" title={step.title}>
                {step.title}
              </StepTitle>
              <StepDescription className="" title={step.description}>
                {step.description}
              </StepDescription>
            </Box>
            {/* <StepSeparator /> */}
          </Step>
        ))}
      </Stepper>
      <Box>
        {activeStep === 0
          ? <SpecialtyForm setSelectedSpecialty={setSelectedSpecialty} />
          : false
        }
        {activeStep === 2
          ? <HoursForm dataToSend={dataToSend} setDateInfo={setDateInfo} />
          : false
        }
        {activeStep === 1
          ? <DoctorsResult
            selectedDoc={selectedDoc}
            setSelectedDoc={setSelectedDoc}
            selectedSpeciality={selectedSpecialty}
          />
          : false
        }
        {activeStep === 3
          ? <ConfirmAppointment info={dataToSend} />
          : false
        }
      </Box>
      <div className="flex justify-around items-center my-6">
        <button
          className={`${ activeStep === 0 ? "invisible" : "visible"
            } bg-primary w-28 h-10 self-center text-white hover:bg-[#0C616E] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300`}
          data-ripple-light="true"
          onClick={handlerPrev}
        >
          Volver
        </button>
        <button
          className="bg-primary w-28 h-10 text-white hover:bg-[#0C616E] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300"
          data-ripple-light="true"
          onClick={handlerNext}
        >
          {activeStep === 3 ? "Confirmar" : "Siguente"}
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  )
}
