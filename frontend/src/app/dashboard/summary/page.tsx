import React from "react";

export default function MisTurnos() {
  return (
    <main className="h-screen sm:w-[80%] ml-auto bg-[#256697] p-10">
      <h2 className=" text-xl font-bold font-sans">Resumen de citas agendadas:</h2>
      <div className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-cyan-200">

        {/* <!-- Badge --> */}
        <p className=" bg-emerald-700 w-fit px-4 py-1 text-sm font-bold text-white rounded-bl-lg rounded-tr-xl ml-auto"> ACTIVO </p>
        <div className="grid grid-cols-6 p-5 gap-y-2">

          {/* <!-- Profile Picture --> */}
          <div>
            <img src="https://picsum.photos/seed/2/200/200" className="max-w-16 max-h-16 rounded-full" />
          </div>

          {/* <!-- Description --> */}
          <div className="col-span-5 md:col-span-4 ml-4">
            <p className="text-sky-500 font-bold text-xs"> Consulta dental </p>
            <p className="text-gray-600 font-bold"> [Dentista] Dr. Eduardo Manzillas </p>
            <p className="text-gray-400"> Sat, Mar 12 . 7:00 - 8:30 AM </p>
            <p className="text-gray-400"> Hospital: San benito de juarez </p>
          </div>

          {/* <!-- Price --> */}
          <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
            <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> $ 5 </p>
          </div>
        </div>
      </div>
      <h2 className=" text-xl font-bold font-sans">Turnos caducados:</h2>
      <div className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-cyan-200">

        {/* <!-- Badge --> */}
        <p className=" bg-red-600 w-fit px-4 py-1 text-sm font-bold text-white rounded-bl-lg rounded-tr-xl ml-auto"> FALLO </p>
        <div className="grid grid-cols-6 p-5 gap-y-2">

          {/* <!-- Profile Picture --> */}
          <div>
            <img src="https://picsum.photos/seed/2/200/200" className="max-w-16 max-h-16 rounded-full" />
          </div>

          {/* <!-- Description --> */}
          <div className="col-span-5 md:col-span-4 ml-4">
            <p className="text-sky-500 font-bold text-xs"> Consulta dental </p>
            <p className="text-gray-600 font-bold"> [Dentista] Dr. Eduardo Manzillas </p>
            <p className="text-gray-400"> Sat, Mar 12 . 7:00 - 8:30 AM </p>
            <p className="text-gray-400"> Hospital: San benito de juarez </p>
          </div>

          {/* <!-- Price --> */}
          <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
            <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> $ 5 </p>
          </div>
        </div>
      </div>



    </main>
  );
}
