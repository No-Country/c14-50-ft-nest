import { doctors } from '@/utils/Doctors'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  setSelectedDoc: Dispatch<SetStateAction<string | null>>
  selectedSpeciality: string | null
}

const DoctorsResult = ({ selectedSpeciality }: Props) => {
  const filteredDoctors = doctors.filter((doctor) => doctor.especialidad === selectedSpeciality);

  return (
    <table className='basic'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Especialidad</th>
          <th>Género</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor, index) => (
          <tr key={index}>
            <td>{doctor.nombre}</td>
            <td>{doctor.especialidad}</td>
            <td>{doctor.género}</td>
            <td>{doctor.edad} Años</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DoctorsResult