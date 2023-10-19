// interface Doctor {
//   nombre: string;
//   especialidad: string;
//   género: string;
//   edad: string;
// }

export interface ListItem {
  specialty: string | null;

  doctor: {
    nombre: string;
    especialidad: string;
    género: string;
    edad?: string;
  };

  user: string;
}

interface ListProps {
  list: ListItem[];
}

// type Doctor = {
//   nombre: string;
//   especialidad: string;
//   género: string;
// };

export default function ConfirmAppointment({ list }: ListProps) {
  return (
    <div className="w-[70%]  mx-auto p-10 rounded mt-10 ">
      {list.map((item, index) => (
        <li
          key={index}
          className="list-none grid grid-flow-row md:grid-flow-col place-content-around "
        >
          <h1>Especialidad</h1>
          <p>{item.specialty}</p>
          <div>
            <h1>Información del doctor</h1>
            {/* {item.doctor && (
              Object.keys(item.doctor as Doctor ).map((property, propIndex) => (
                <p key={propIndex}>
                  {property}: {item.doctor[property]}
                </p>
              ))
            )} */}
            {JSON.stringify(item.doctor)}
          </div>
          <h1>Hoario seleccionado</h1>
          <p>{item.user}</p>
        </li>
      ))}
    </div>
  );
}
