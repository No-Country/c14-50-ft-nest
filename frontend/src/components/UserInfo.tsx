"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "@/redux/hooks";
import Loader from "./Loader";

type User = {
  id?: string,
  is_deleted?: boolean,
  deletedAt?: null | string,
  email?: string,
  document?: number,
  role?: {
      id: string,
      is_deleted: boolean,
      deletedAt: null | string,
      name: string
  },
  doctor?: null | string,
  patient?: {
      id: string,
      is_deleted: boolean,
      deletedAt: null | string,
      firstName: string,
      lastName: string,
      birthDate: string,
      phone:null | string,
      healthInsurance:null | string
  }
}

export default function UserInfo() {
  const userId = useAppSelector((state) => state.authReducer.userId);
  const [UserData, setDataUser] = useState<User>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://nc-project-lim7.onrender.com/api/users/${userId}`)
        .then((res) => setDataUser(res.data))
        .catch((err) => console.log(err))
        .finally(()=>setLoading(false))
    }
  }, [userId]);

  return (
    <>
      {loading ? <Loader /> : false}
      <div className="relative flex w-[200%] flex-col rounded-xl max-h-fit bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-primary"></div>
        <div className="p-6">
          <h5 className="mb-4 block font-sans text-4xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {UserData.patient?.firstName} {UserData.patient?.lastName}
          </h5>
          <ul className="flex gap-4 flex-col text-xl">
            <li>
            Correo: {UserData.email}
            </li>
            <li>
            Documento: {UserData.document}
            </li>
            <li>
              Fecha de nacimiento: {UserData.patient?.birthDate.split('T')[0]}
            </li>
            <li>
              Telefono: {UserData.patient?.phone ? [UserData.patient?.phone] :"Dato no ingresado"}
            </li>
            <li>
              Asegurador Medico: {UserData.doctor ? UserData.doctor : "Dato no ingresado"}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
