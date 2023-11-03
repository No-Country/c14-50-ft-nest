import axios from "axios"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Loader from "./Loader"

interface SpecialtyFormProps {
  setSelectedSpecialty: Dispatch<SetStateAction<string>>
}

interface speciaty {
  deletedAt: null | string
  id: string
  is_deleted: boolean
  name: string
}

const SpecialtyForm = ({ setSelectedSpecialty }: SpecialtyFormProps) => {
  const [specialties, setSpecialties] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const options = specialties.map((especiality: speciaty) => especiality.name)
  options.unshift("Seleccione una especialidad")

  useEffect(() => {
    axios
      .get("https://nc-project-lim7.onrender.com/api/specialties")
      .then((res) => setSpecialties(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  const handleSelect = (e: any) => {
    setSelectedSpecialty(e.target.value)
  }
  useEffect(() => {
    setSelectedSpecialty(options[0])
  }, [])

  return (
    <>
      {isLoading ? <Loader /> : false}
      <select
        onChange={(e) => {
          handleSelect(e)
        }}
        name="specialty"
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default SpecialtyForm
