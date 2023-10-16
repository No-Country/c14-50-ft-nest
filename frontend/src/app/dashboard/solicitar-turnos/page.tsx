'use client'
import React, { useEffect, useState } from "react";
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useSteps,
  useToast,
} from '@chakra-ui/react'
import SpecialtyForm from "@/components/SpecialtyForm";

const steps = [
  { 
    title: 'Elegir especialidad médica',
    description: 'Selecciona la especialidad que necesitas'
  },
  {
    title: 'Elegir doctor',  
    description: 'Elige el doctor según la especialidad'
  },
  {
    title: 'Seleccionar horario',
    description: 'Escoge la fecha y hora de tu consulta'
  },
  {
    title: 'Confirmar turno',
    description: 'Confirma el turno elegido' 
  }
]
export default function SolicitarTurnos() {
  // const [next, setNext] = useState()

  const [selectedSpecialty, setSelectedSpecialty] = useState<string|null>("")
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  const toast = useToast()
  const dataToSend = {
    specialty: selectedSpecialty,
    doctor: "",
    user: "",
  }

  useEffect(() => {
    if(!selectedSpecialty || selectedSpecialty=== "Selecciona especialidad"){
      setActiveStep(0)
      toast({
        title: 'Selecciona una especialidad',
        description: "Debes seleccionar una especialidad para sacar un turno",
        status: 'error',
        position: 'bottom-right',
        duration: 4000,
        isClosable: true,
      })
    }
  },[dataToSend])

  console.log(selectedSpecialty);
  return (
    <main className="h-screen lg:w-[80%] lg:ml-auto bg-[#f0f4f7] p-10 ">
      <Stepper index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
      <Box>
      {activeStep===0?<SpecialtyForm setSelectedSpecialty={setSelectedSpecialty} /> :false}
      </Box>
      <div className="flex justify-around">
    <button className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true" onClick={()=>setActiveStep(activeStep -1)}>
      Volver
    </button>
    <button className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true" onClick={()=>setActiveStep(activeStep +1)}>
      siguente
    </button>
      </div>
    </main>
  );
}

