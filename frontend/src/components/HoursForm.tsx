import { getCurrentDate } from '@/utils/getCurrentDate'
import { Dispatch, SetStateAction } from 'react'

type Date = {
  date: string
  hour: string
}
interface Props {
  setDateInfo: Dispatch<SetStateAction<Date>>
  dataToSend: any //Falta tipar
}

const HoursForm = ({ setDateInfo, dataToSend }: Props) => {
  const { year, month, day } = getCurrentDate()
  const minDate = `${ year }-${ month }-${ day }`
  const maxDate = `${ year }-${ parseInt(month) + 2 }-${ day }`

  const options = dataToSend?.doctor?.schedules?.reduce((acc: any, curr: any) => { //debemos ordenar este array
    if (curr.ocupped) return
    const start = curr.startTime
    const end = curr.endTime
    const book = [start, end]
    return [...acc, book]
  }, [])


  const handleHour = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedHour = e.target.value;
    // let index = e.target.selectedIndex
    // console.log(e.target.options[index].text)
    setDateInfo((prevDateInfo) => ({
      ...prevDateInfo,
      hour: selectedHour,
    }));
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setDateInfo((prevDateInfo) => ({
      ...prevDateInfo,
      date: selectedDate,
    }));
  };

  return (
    <div className='flex'>
      <input type="date" min={minDate} value={dataToSend.dateSelected.date} max={maxDate} onChange={handleDate} />
      <select onChange={handleHour} value={dataToSend.dateSelected.hour}>
        <option value="">* Selecciona Un Horario *</option>
        {options.map((option: any, index: any) => { //falta typar
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
