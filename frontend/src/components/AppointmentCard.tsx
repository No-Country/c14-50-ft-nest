interface Props {
  book: {
    specialty: {
      name: string;
    };
    doctor: {
      firstName: string;
      lastName: string;
    };
    patient: {
      firstName: string;
      lastName: string;
    };
    interval: string;
  };
  fechaFormateada: string;
  role: string;
  active: boolean;
}

const AppointmentCard = ({ book, fechaFormateada, role, active }: Props) => {
  return (
    <div className="sm:w-[30rem] mb-3 border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-gradient-to-l from-slate-300 to-slate-100">
      {/* <!-- Badge --> */}
      {active ? (
        <p className=" bg-emerald-700 w-fit px-4 py-1 text-sm font-bold text-white rounded-bl-lg rounded-tr-xl ml-auto">
          ACTIVO
        </p>
      ) : (
        <p className=" bg-red-700 w-fit px-4 py-1 text-sm font-bold text-white rounded-bl-lg rounded-tr-xl ml-auto">CADUCADO</p>
      )}

      <div className="grid grid-cols-6 p-5 gap-y-2">
        {/* <!-- Description --> */}
        <div className="col-span-5 md:col-span-4 ml-4">
          <p className="text-sky-500 font-bold text-md mb-1">Consulta Medica</p>
          <p className="text-gray-600 font-bold mb-1 capitalize">
            {role === "patient" ? (
              <span className="text-[#0C616E]">[{book.specialty.name}]</span>
            ) : (
              <span className="text-[#0C616E]">[Paciente]</span>
            )}
            {role === "patient" ? (
              <>
                <wbr /> {book.doctor.firstName} {book.doctor.lastName}
              </>
            ) : (
              <>
                <wbr /> {book.patient.firstName} {book.patient.lastName}{" "}
              </>
            )}
          </p>
          <p className="text-gray-400 mb-1 capitalize">{fechaFormateada}</p>
          <p className="text-gray-400 mb-1">{book.interval}</p>
          {/* <p className="text-gray-400 mb-1">
            <b className=" text-zinc-900">Direccion</b>: #########
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
