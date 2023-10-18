import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface SpecialtyFormProps {
  setSelectedSpecialty: Dispatch<SetStateAction<string | null>>
}

const SpecialtyForm = ({ setSelectedSpecialty }: SpecialtyFormProps) => {
  const [selected, setSelected] = useState("")

  const options = [
    "Selecciona especialidad",
    "Medicina general",
    "Pediatría",
    "Cardiología",
    "Dermatología",
    "Ginecología",
    "Oftalmología",
    "Traumatología"
  ]
  const handleSelect = (e: any) => {
    setSelectedSpecialty(e.target.value)
  }

  useEffect(() => {
    setSelectedSpecialty(options[0])
  }, [])

  return (
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
  )
}

export default SpecialtyForm
