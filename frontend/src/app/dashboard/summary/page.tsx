import React from "react";

export default function MisTurnos() {
  return (
    <main className="h-screen md:w-[80%] ml-auto p-3 md:p-10">
      <h2 className="text-xl font-sans mb-3 text-[#02298A]">Resumen de citas agendadas:</h2>
      <div className="sm:w-[30rem] mb-3 border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-gradient-to-l from-slate-300 to-slate-100">

        {/* <!-- Badge --> */}
        <p className=" bg-emerald-700 w-fit px-4 py-1 text-sm font-bold text-white rounded-bl-lg rounded-tr-xl ml-auto"> ACTIVO </p>
        <div className="grid grid-cols-6 p-5 gap-y-2">


          {/* <!-- Description --> */}
          <div className="col-span-5 md:col-span-4 ml-4">
            <p className="text-sky-500 font-bold text-md mb-1"> Consulta dental </p>
            <p className="text-gray-600 font-bold mb-1"> <span className="text-[#0C616E]">[Dentista]</span><wbr/> Dr. Eduardo Manzillas </p>
            <p className="text-gray-400 mb-1"> Sat, Mar 12 . 7:00 - 8:30 AM </p>
            <p className="text-gray-400 mb-1"> <b className=" text-zinc-900">Hospital</b>: San benito de juarez </p>
          </div>

          {/* <!-- Price --> */}
          {/* <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
            <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> $ 5 </p>
          </div> */}
        </div>
      </div>
      <h2 className="text-xl font-sans mb-3 text-[#02298A]">Turnos caducados:</h2>
      <div className="sm:w-[30rem] mb-3 border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-gradient-to-l from-slate-300 to-slate-100">

        {/* <!-- Badge --> */}
        <p className=" bg-red-700 w-fit px-4 py-1 text-sm font-bold text-white rounded-bl-lg rounded-tr-xl ml-auto"> CADUCADO </p>
        <div className="grid grid-cols-6 p-5 gap-y-2">


          {/* <!-- Description --> */}
          <div className="col-span-5 md:col-span-4 ml-4">
            <p className="text-sky-500 font-bold text-md mb-1"> Consulta dental </p>
            <p className="text-gray-600 font-bold mb-1"> <span className="text-[#0C616E]">[Dentista]</span><wbr/> Dr. Eduardo Manzillas </p>
            <p className="text-gray-400 mb-1"> Sat, Mar 12 . 7:00 - 8:30 AM </p>
            <p className="text-gray-400 mb-1"> <b className=" text-zinc-900">Hospital</b>: San benito de juarez </p>
          </div>

          {/* <!-- Price --> */}
          {/* <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
            <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> $ 5 </p>
          </div> */}
        </div>
      </div>
    </main>
  );
}
