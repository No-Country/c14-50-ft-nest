interface Doctor {
  nombre: string;
  especialidad: string;
  género: string;
  edad: string;
}

export interface ListItem {
  nombre: string;
  specialty: string | null;
  doctor: Doctor;
  user: string;
}

interface ListProps {
  list: ListItem[];
}

export default function ConfirmAppointment({ list }: ListProps) {
  return (
    <div className="w-[70%]  mx-auto p-10 rounded mt-10 ">
      {list.map((item, index) => (
        <li
          key={index}
          className="list-none grid grid-flow-row md:grid-flow-col place-content-around "
        >
          <div className=" pr-4 ">
            <h1 className="text-xl mb-2 uppercase border-b-2 border-slate-500">
              Especialidad
            </h1>
            <p>{item.specialty}</p>
          </div>
          <div className=" px-2 ">
            <h1 className="text-xl mb-2 uppercase border-b-2 border-slate-500">
              Información del doctor
            </h1>
            <p>{item.doctor.nombre}</p>
            <p>{item.doctor.especialidad}</p>
            <p>{item.doctor.género}</p>
            <p>{item.doctor.edad}</p>
          </div>
          <div className="px-4">
            <h1 className="text-xl mb-2 uppercase border-b-2 border-slate-500">
              Hoario seleccionado
            </h1>
            <p>{item.user}</p>
          </div>
        </li>
      ))}
    </div>
  );
}
