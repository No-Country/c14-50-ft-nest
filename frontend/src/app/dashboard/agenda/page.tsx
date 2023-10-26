"use client";
import Loader from "@/components/Loader";
import { useAppSelector } from '@/redux/hooks';
import axios from "axios";
import { useEffect, useState } from "react";

export default function MisTurnos () {
  const [allAppointments, setAllAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const id = useAppSelector(state => state.authReducer.userId)
  // const id = localStorage.getItem("patientId");

  useEffect(() => {
    axios
      .get("https://nc-project-lim7.onrender.com/api/appointments")
      .then((res) => setAllAppointments(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const userAppointments = allAppointments.filter((book: any) => {
    return book.doctor?.id === id;
  });
  // console.log(userAppointments);

  return (
    <>
      {isLoading && <Loader />}
      <main className="h-screen md:w-[80%] ml-auto p-3 md:p-10">
        <h2 className="text-xl font-sans mb-3 text-[#02298A]">
          Resumen de citas agendadas:
        </h2>
        {userAppointments.map((book: any) => { //falta typar
          console.log(book)

          let opciones = { weekday: "short", month: "short", day: "numeric" };
          let fecha = new Date(book.day);
          let fechaFormateada = fecha.toLocaleDateString("es-ES", opciones as any); //falta typar


          return (
            <div className="sm:w-[30rem] mb-3 border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-gradient-to-l from-slate-300 to-slate-100">
              {/* <!-- Badge --> */}
              <p className=" bg-emerald-700 w-fit px-4 py-1 text-sm font-bold text-white rounded-bl-lg rounded-tr-xl ml-auto">
                {" "}
                ACTIVO{" "}
              </p>
              <div className="grid grid-cols-6 p-5 gap-y-2">
                {/* <!-- Description --> */}
                <div className="col-span-5 md:col-span-4 ml-4">
                  <p className="text-sky-500 font-bold text-md mb-1">
                    {" "}
                    Consulta Medica
                  </p>
                  <p className="text-gray-600 font-bold mb-1 capitalize">
                    {" "}
                    <span className="text-[#0C616E]">
                      [{book.specialty?.name}]{" "}
                    </span>
                    <wbr /> {book.doctor?.firstName}{" "}
                    {book.doctor?.lastName}
                  </p>
                  <p className="text-gray-400 mb-1">
                    {" "}
                    {fechaFormateada} . {book.interval}
                  </p>
                  <p className="text-gray-400 mb-1">
                    {" "}
                    <b className=" text-zinc-900">Direccion</b>: #########{" "}
                  </p>
                </div>
              </div>
            </div>)

        })}

        <h2 className="text-xl font-sans mb-3 text-[#02298A]">
          Turnos caducados:
        </h2>
      </main>
    </>
  );
}