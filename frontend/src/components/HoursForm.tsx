import { getCurrentDate } from '@/utils/getCurrentDate'
import { Dispatch, SetStateAction } from 'react'

type Date = {
  date: string
  hour: string
}
interface Props {
  setDateInfo: Dispatch<SetStateAction<Date>>
}

const HoursForm = ({ setDateInfo }: Props) => {
  const { year, month, day } = getCurrentDate()
  const minDate = `${ year }-${ month }-${ day }`
  const maxDate = `${ year }-${ parseInt(month) + 2 }-${ day }`
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

  const handleHour = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedHour = e.target.value;
    // Aquí estableces el estado utilizando setDateInfo
    setDateInfo((prevDateInfo) => ({
      ...prevDateInfo,
      hour: selectedHour,
    }));
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    // Aquí estableces el estado utilizando setDateInfo
    setDateInfo((prevDateInfo) => ({
      ...prevDateInfo,
      date: selectedDate,
    }));
  };

  return (
    <div className='flex'>
      <input type="date" min={minDate} max={maxDate} onChange={handleDate} />
      <select onChange={handleHour}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {`${ option[0] } - ${ option[1] }`}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default HoursForm
