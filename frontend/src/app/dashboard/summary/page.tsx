"use client";
import AppointmentCard from "@/components/AppointmentCard";
import Loader from "@/components/Loader";
import { appointmentSlice } from "@/redux/features/appointmentSlice";
import { authSlice } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetAppointmentsQuery } from "@/redux/services/projectApi";
import axios from "axios";
import { useEffect } from "react";

export default function MisTurnos() {
  const { data, error, isLoading, isFetching } = useGetAppointmentsQuery(null);
  const userId = useAppSelector((state) => state.authReducer.userId);
  const role = useAppSelector((state) => state.authReducer.role);
  const roleId = useAppSelector((state) => state.authReducer.roleId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get("https://nc-project-lim7.onrender.com/api/users/" + userId)
      .then((res) => {
        if (role === "patient") {
          dispatch(
            authSlice.actions.setRoleId({ roleId: res.data.patient.id })
          );
        }
        if (role === "doctor") {
          dispatch(authSlice.actions.setRoleId({ roleId: res.data.doctor.id }));
        }
      });
  }, []);

  const expiredAppointments: any = [];

  // const userAppointments = data?.filter((book: any) => {//falta typar
  //   const currentDate = new Date()
  //   if (role === 'patient') {
  //     if (currentDate > book.day) {
  //       expiredAppointments.push(book)
  //       return false
  //     }
  //     return book.patient.id === roleId
  //   }
  //   if (role === 'doctor') {
  //     if (currentDate > book.day) {
  //       expiredAppointments.push(book)
  //       return false
  //     }
  //     return book.doctor.id === roleId
  //   }
  //   return 0;
  // });

  useEffect(() => {
    const userAppointmentString = localStorage.getItem("appointments");
    if (userAppointmentString) {
      const appointmenParse = JSON.parse(userAppointmentString);
      dispatch(appointmentSlice.actions.setAppointment(appointmenParse));
      return;
    }
    if (!isLoading && data !== undefined) {
      const filteredData = data?.filter((book: any) => {
        if (role === "patient") return book.patient.id === roleId;
        if (role === "doctor") return book.doctor.id === roleId;
      });
      // Realizar el dispatch para almacenar los datos en Redux
      dispatch(appointmentSlice.actions.setAppointment(filteredData));
      // Almacenar los datos en localStorage
      localStorage.setItem("appointments", JSON.stringify(filteredData));
    }
  }, [data, isLoading]);

  const fecha = new Date();

  var año = fecha.getFullYear();
  var mes: number | string = fecha.getMonth() + 1;
  var dia: number | string = fecha.getDate();

  if (dia < 10) dia = "0" + dia;
  if (mes < 10) mes = "0" + mes;

  var fechaFormateada = año + "-" + mes + "-" + dia;
  const prueba = new Date(fechaFormateada);

  const userAppointments = data
    ?.filter((book: any) => {
      //falta typar
      const prueba2 = new Date(book.day);

      if (role === "patient") {
        if (prueba > prueba2) {
          expiredAppointments.push(book);
          return false;
        }
        return book.patient.id === roleId;
      }
      if (role === "doctor") {
        if (prueba > prueba2) {
          expiredAppointments.push(book);
          return false;
        }
        return book.doctor.id === roleId;
      }
    })
    .sort((a: any, b: any) => {
      if (new Date(a.day) > new Date(b.day)) {
        return 1;
      }
      if (new Date(a.day) < new Date(b.day)) {
        return -1;
      }
      return 0;
    });

  return (
    <>
      {isLoading && <Loader />}
      <main className="h-screen lg:w-[80%] lg:ml-auto bg-[#f0f4f7] p-10 position-relative">
        <h2 className="text-xl font-sans mb-3 text-[#02298A]">
          Resumen de citas agendadas:
        </h2>
        <div className="flex flex-wrap gap-10">
          {userAppointments?.map((book: any, index: number) => {
            //falta typar
            let opciones = { weekday: "long", month: "long", day: "numeric" };
            let fecha = new Date(book.day);

            // Ajustar la fecha a UTC para evitar cambios en la zona horaria
            fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset());
            let fechaFormateada = fecha.toLocaleDateString(
              "es-ES",
              opciones as any
            ); //falta typar

            return (
              <AppointmentCard
              active={true}
                role={role}
                book={book}
                fechaFormateada={fechaFormateada}
                key={index}
              />
            );
          })}
        </div>

        <h2 className="text-xl font-sans mb-3 text-[#02298A]">
          Turnos caducados:
        </h2>
        <div className="flex flex-wrap gap-10">
          {expiredAppointments.map((book: any, index: number) => {
            //falta typar
            let opciones = { weekday: "short", month: "short", day: "numeric" };
            let fecha = new Date(book.day);
            let fechaFormateada = fecha.toLocaleDateString(
              "es-ES",
              opciones as any
            ); //falta typar

            return (
              <AppointmentCard
              active={false}
              role={role}
              book={book}
              fechaFormateada={fechaFormateada}
              key={index}
            />
            );
          })}
        </div>
      </main>
    </>
  );
}
