interface AppointmentInfo {
  specialty: string;
  doctor: {
    id: string
    is_deleted: boolean
    deletedAt: string
    firstName: string
    lastName: string
    birthDate: string
    phone: string
    registrationNumber: number
    gender: string
    schedules: string[]
    specialties: [{
      id: string,
      is_deleted: false,
      deletedAt: null,
      name: string
    }]
  }
  dateSelected: {
    date: string,
    hour: string
  };
}

interface Prop {
  info: AppointmentInfo;
}

export default function ConfirmAppointment ({ info }: Prop) {
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
              <p>Nombre: {info.doctor.firstName}</p>
              <p>Género: {info.doctor.gender}</p>
              {/* <p>Especialidad: {info.doctor.specialties}</p> */}
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
