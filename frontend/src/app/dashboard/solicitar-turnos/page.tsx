'use client'
import React from "react";
import { InlineWidget  } from "react-calendly";

export default function SolicitarTurnos() {

  
  return (
    <main className="h-screen lg:w-[80%] lg:ml-auto flex justify-center bg-[#f0f4f7] ">
      <div className="App">
      <InlineWidget 
        url="https://calendly.com/yordani12yorda"
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055',
          hideGdprBanner:true,
        }}

        styles={{
          height: '90vh',
          width: '90vw',
        }}
      />
    </div>
    </main>
  );
}
