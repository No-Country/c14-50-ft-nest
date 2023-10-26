interface AppointmentInfo {
  specialty: string;
  doctor: {
    firstName: string;
    lastName: string;
    gender: string;
    specialties: Specialties[];
    age: number;
  }
  dateSelected: {
    date: string,
    hour: string
  };
}

interface Specialties {
  name:string
}

interface Prop {
  info: AppointmentInfo;
}

export default function ConfirmAppointment ({ info }: any) { //Falta typear
  return (
    <div className="w-full bg-white rounded-sm shadow-sm p-10">
      <div className="list-none gap-2 grid grid-flow-row md:grid-flow-col place-content-around">
        <div>
          <h1 className='font-semibold'>Especialidad</h1>
          <p>{info.specialty}</p>
        </div>
        <div>
          <h1 className='font-semibold'>Información del doctor</h1>
          {info.doctor && (
            <div>
              <p>Nombre: {info.doctor.firstName} {info.doctor.lastName}</p>
              <p>Género: {info.doctor.gender}</p>
              <p>Especialidad: {info.doctor.specialties[0].name}</p>
              {/* <p>Edad: {info.doctor.age} Años</p> */}
            </div>
          )}
        </div>
        <div>
          <h1 className='font-semibold'>Horario seleccionado</h1>
          <div>
            <p>{info.dateSelected.date}</p>
            <p>Desde: {info.dateSelected.hour.substring(0, 5)}</p>
            <p>Hasta: {info.dateSelected.hour.substring(6)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
