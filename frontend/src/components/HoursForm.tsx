import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface HoursFormProps {}

const HoursForm = ({}: HoursFormProps) => {
  const [selected, setSelected] = useState("")

  const options = [
    ["9:00", "9:30"],
    ["10:00", "10:30"],
    ["11:00", "11:30"],
    ["12:00", "12:30"],
    ["13:00", "13:30"],
    ["14:00", "14:30"],
    ["15:00", "15:30"],
    ["16:00", "16:30"]
  ]

  return (
    <select onChange={(e) => {}} name="specialty">
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {`${option[0]} - ${option[1]}`}
          </option>
        )
      })}
    </select>
  )
}

export default HoursForm
