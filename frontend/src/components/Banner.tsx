'use client'
import Image from "next/image";
import { useState } from 'react';

export default function Banner() {

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () =>{
     setModalVisible(!modalVisible);    
  }
  const closeModal = () =>{
    setModalVisible(false);
  }

  return (
    <div className="py-10 lg:py-0 relative w-fit lg:w-[60%] bg-no-repeat bg-cover h-auto lg:h-screen text-white flex flex-col justify-center items-center gap-5">
      <Image
        src={"/banner.svg"}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        style={{ zIndex: "-1" , objectPosition: 'bottom'}}
      />
      <h2 className="text-2xl lg:text-4xl font-bold text-center px-0.5">
        Gestiona tus turnos con facilidad
      </h2>
      <p className="text-lg lg:w-[50%] text-left px-8 lg:px-0">
        Organiza los turnos de trabajo de tu equipo de <strong>forma sencilla</strong> con
        nuestra aplicación. <strong>Asigna turnos, gestiona horarios y mantén a tu
        equipo comunicado.</strong>
      </p>
      <button onClick={openModal} className="bg-primary text-white hover:bg-[#0C616E] font-bold mb-2 p-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300">
        Conocé más sobre la App
      </button>

      <div className={`flex ${modalVisible ? 'opactity-5' : 'hidden'} p-8 absolute text-white bg-gradient-to-r from-blue-900 to-blue-800 h-full w-full flex-col lg:justify-center @lg:justify-center items-center`}>
        <div>
          <h2 className="text-4xl lg:text-4xl font-bold text-center px-0.5">
            MediConnect
          </h2>
          <p className="text-xl">
            La App de Gestión Médica Total
          </p>
        </div>
        <br />
        <p className="text-lg lg:w-[60%] text-left px-8 lg:px-0">         
          Es una innovadora aplicación diseñada para <strong>revolucionar la gestión de turnos médicos y el acceso a historiales médicos</strong>, al tiempo que mejora la comunicación entre médicos y pacientes.          
        </p>
        <br />
        <p className="text-lg lg:w-[60%] text-left px-8 lg:px-0">Nuestra plataforma se ha creado con el objetivo de <strong>simplificar la experiencia médica, brindando comodidad, eficiencia y transparencia en cada paso del proceso. </strong> </p>
        <p><button className="my-5 bg-primary text-white hover:bg-[#0C616E] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300" onClick={closeModal}>Cerrar</button></p>
      </div>
    </div>
   
  );
}
