"use client";
import ConfirmAppointment from "@/components/ConfirmAppointment";
import DoctorsResult from "@/components/DoctorsResult";
import SpecialtyForm from "@/components/SpecialtyForm";
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
  useSteps,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Elegir especialidad médica",
    description: "Selecciona la especialidad que necesitas",
  },
  {
    title: "Elegir doctor",
    description: "Elige el doctor según la especialidad",
  },
  {
    title: "Seleccionar horario",
    description: "Escoge la fecha y hora de tu consulta",
  },
  {
    title: "Confirmar turno",
    description: "Confirma el turno elegido",
  },
];
export default function SolicitarTurnos() {
  // const [next, setNext] = useState()

  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>("");
  const [selectedDoc, setSelectedDoc] = useState<string | null>("");
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const toast = useToast();
  const dataToSend = [
    {
      specialty: selectedSpecialty,
      doctor: selectedDoc,
      user: "",
    },
  ];

  const handlerNext = () => {
    if (activeStep === 3) {
      dataToSend;
      console.log(dataToSend);
      return;
    } else {
      setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
    }
  };

  const handlerPrev = () => {
    if (activeStep === 0) {
      return;
    } else {
      setActiveStep((prevActiveStep: any) => prevActiveStep - 1);
    }
  };

  console.log(selectedSpecialty);
  return (
    <main className="h-screen lg:w-[80%] lg:ml-auto bg-[#f0f4f7] p-10 ">
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
        {activeStep === 0 ? (
          <SpecialtyForm setSelectedSpecialty={setSelectedSpecialty} />
        ) : (
          false
        )}
        {activeStep === 1 ? (
          <DoctorsResult
            setSelectedDoc={setSelectedDoc}
            selectedSpeciality={selectedSpecialty}
          />
        ) : (
          false
        )}
        {activeStep === 3 ? <ConfirmAppointment list={dataToSend} /> : false}
      </Box>
      <div className="flex justify-around items-center my-6">
        <button
          className={`${
            activeStep === 0 ? "invisible" : "visible"
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
    </main>
  );
}
