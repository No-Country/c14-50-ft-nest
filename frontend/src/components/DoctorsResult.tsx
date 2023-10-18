import { doctors } from '@/utils/Doctors';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  setSelectedDoc: Dispatch<SetStateAction<Object>>
  selectedDoc: Object
  selectedSpeciality: string | null
}

type Doctor = {
  nombre: string;
  especialidad: string;
  género: string;
  edad: number;
};

const DoctorsResult = ({ selectedSpeciality, setSelectedDoc, selectedDoc }: Props) => {
  // const [selectedDoctor, setSelectedDoctor] = useState({})
  const filteredDoctors = doctors.filter((doctor) => doctor.especialidad === selectedSpeciality);

  const handleRowClick = (doctor: Doctor) => {
    // console.log(doctor)
    setSelectedDoc(doctor);
  };


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
        {filteredDoctors.map((doctor, index) => (
          <tr
            key={index}
            onClick={() => handleRowClick(doctor)}
            className={`cursor-pointer ${ selectedDoc === doctor ? 'bg-slate-500' : 'bg-white' }`}
          >
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