interface ListItem {
  specialty: string | null;
  doctor: string | null;
  user: string;
}

interface ListProps {
  list: ListItem[];
}

export default function ConfirmAppointment({ list }: ListProps) {
  return (
    <div className="w-[70%] border-[1px] border-black mx-auto p-10 rounded ">
      {list.map((item, index) => (
        <li
          key={index}
          className="list-none grid grid-flow-row place-content-center "
        >
          <h1>Especialidad</h1>
          <p>{item.specialty}</p>
          <h1>Información del doctor</h1>
          <p>{item.doctor}</p>
          <h1>Hoario seleccionado</h1>
          <p>{item.user}</p>
        </li>
      ))}
    </div>
  );
}
