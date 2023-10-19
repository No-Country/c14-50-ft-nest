export interface ListItem {
  specialty: string | null;
  doctor: {
    nombre: string;
    género: string;
    especialidad: string;
    edad: number;
  }
  user: string;
}

interface ListProps {
  list: ListItem[];
}

export default function ConfirmAppointment ({ list }: ListProps) {
  return (
    <div className="w-full bg-white rounded-sm shadow-sm p-10">
      {list.map((item, index) => (
        <li
          key={index}
          className="list-none gap-2 grid grid-flow-row md:grid-flow-col place-content-around "
        >
          <div>

            <h1 className='font-semibold'>Especialidad</h1>
            <p>{item.specialty}</p>
          </div>
          <div>
            <h1 className='font-semibold'>Información del doctor</h1>
            {item.doctor && (
              <div>
                <p>Nombre: {item.doctor.nombre}</p>
                <p>Género: {item.doctor.género}</p>
                <p>Especialidad: {item.doctor.especialidad}</p>
                <p>Edad: {item.doctor.edad} Años</p>
              </div>
            )}
            {/* {JSON.stringify(item.doctor)} */}
          </div>
          <div>
            <h1 className='font-semibold'>Hoario seleccionado</h1>
            <p>{item.user}</p>
          </div>
        </li>
      ))}
    </div>
  );
}
