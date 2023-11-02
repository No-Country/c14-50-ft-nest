"use client";
import AppointmentCard from '@/components/AppointmentCard';
import Loader from "@/components/Loader";
import { authSlice } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import axios from "axios";
import { useEffect, useState } from "react";

export default function MisTurnos () {
  const [allAppointments, setAllAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = useAppSelector(state => state.authReducer.userId)
  const role = useAppSelector(state => state.authReducer.role)
  const roleId = useAppSelector(state => state.authReducer.roleId)
  const dispatch = useAppDispatch()

  useEffect(() => {
    axios
      .get("https://nc-project-lim7.onrender.com/api/appointments")
      .then((res) => setAllAppointments(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));

    axios
      .get("https://nc-project-lim7.onrender.com/api/users/" + userId)
      .then((res) => {
        if (role === 'patient') {
          dispatch(authSlice.actions.setRoleId({ roleId: res.data.patient.id }))
        }
        if (role === 'doctor') {
          dispatch(authSlice.actions.setRoleId({ roleId: res.data.doctor.id }))
        }
      })
  }, []);

  const userAppointments = allAppointments.filter((book: any) => {//falta typar
    if (role === 'patient') {
      return book.patient.id === roleId
    }
    if (role === 'doctor') {
      return book.doctor.id === roleId
    }
  });

  return (
    <>
      {isLoading && <Loader />}
      <main className="h-screen md:w-[80%] ml-auto p-3 md:p-10">
        <h2 className="text-xl font-sans mb-3 text-[#02298A]">
          Resumen de citas agendadas:
        </h2>
        {userAppointments.map((book: any, index) => { //falta typar
          let opciones = { weekday: "long", month: "long", day: "numeric" };
          let fecha = new Date(book.day);

          // Ajustar la fecha a UTC para evitar cambios en la zona horaria
          fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset());
          let fechaFormateada = fecha.toLocaleDateString("es-ES", opciones as any); //falta typar

          return <AppointmentCard role={role} book={book} fechaFormateada={fechaFormateada} key={index} />
        })}

        <h2 className="text-xl font-sans mb-3 text-[#02298A]">
          Turnos caducados:
        </h2>
      </main>
    </>
  );
}
