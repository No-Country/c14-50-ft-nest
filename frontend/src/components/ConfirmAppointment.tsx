interface ListItem {
  specialty: string | null;
  doctor: Object | null;
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

export default function ConfirmAppointment ({ list }: ListProps) {
  return (
    <div className="w-[70%] border-[1px] border-black mx-auto p-10 rounded ">
      {list.map((item, index) => (
        <li
          key={index}
          className="list-none grid grid-flow-row place-content-center "
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
