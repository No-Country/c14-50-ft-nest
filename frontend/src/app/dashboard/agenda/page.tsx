'use client'
import AppointmentCard from '@/components/AppointmentCard';
import { useAppSelector } from '@/redux/hooks';
import { getCurrentDate } from '@/utils/getCurrentDate';

const AgendaPage = () => {
  const role = useAppSelector(state => state.authReducer.role)
  const roleId = useAppSelector(state => state.authReducer.roleId)
  const appointments = useAppSelector(state => state.appointmentReducer)
  const { year, month, day } = getCurrentDate()
  const currentDate = `${ year }-${ month }-${ day }`

  const todayAppointments = appointments.filter((book: any) => {//falta typar
    return book.doctor.id === roleId && book.day === currentDate
  });


  return (
    <main className="h-screen lg:w-[80%] lg:ml-auto bg-[#f0f4f7] p-10 position-relative">
      <table>
        <thead>
          <tr>
            <th>Hoy</th>
            {/* <th>Mañana</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                {todayAppointments.map((book: any, index: number) => { //falta typar
                  let opciones = { weekday: "long", month: "long", day: "numeric" };
                  let fecha = new Date(book.day);

                  // Ajustar la fecha a UTC para evitar cambios en la zona horaria
                  fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset());
                  let fechaFormateada = fecha.toLocaleDateString("es-ES", opciones as any); //falta typar

                  return <AppointmentCard active={true} role={role} book={book} fechaFormateada={fechaFormateada} key={index} />
                })}
              </div>
            </td>
            {/* <td>
              <div>Columna1</div>
            </td> */}
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default AgendaPage