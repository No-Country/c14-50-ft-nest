'use client'
import React from "react";
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
} from '@chakra-ui/react'


const steps = [
  { title: 'primero', description: 'elegir especialidad' },
  { title: 'Segundo', description: 'selecciona el doctor' },
  { title: 'tercero', description: 'horario' },
  { title: 'cuarto', description: 'elegir turno' },
]
export default function SolicitarTurnos() {
  // const [next, setNext] = useState()
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  })
  
  const nextStep = () =>{
    setActiveStep(activeStep +1);
    console.log(activeStep);
    
  }

  return (
    <main className="h-screen lg:w-[80%] lg:ml-auto bg-[#f0f4f7] ">
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
      <Text>
        Step {activeStep + 1}: <b>{<div>hoollljfds</div>}</b>
        Step {activeStep + 1}: <b>{<div>hola</div>}</b>
      </Text>
    <button className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true" onClick={()=>nextStep()}>
      siguente
    </button>
    </main>
  );
}

