import React, { Dispatch, SetStateAction } from "react"
import { string } from "zod"

interface SpecialtyFormProps {
  setSelectedSpecialty: Dispatch<SetStateAction<string | null>>
}

const SpecialtyForm = ({ setSelectedSpecialty }: SpecialtyFormProps) => {
  const [selected, setSelected] = React.useState("")

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
