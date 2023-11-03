import { getCurrentDate } from "@/utils/getCurrentDate";
import { Dispatch, SetStateAction } from "react";

type Date = {
  date: string;
  hour: string;
  value: string
};
interface Props {
  setDateInfo: Dispatch<SetStateAction<Date>>;
  dataToSend: any; //Falta tipar
}

const HoursForm = ({ setDateInfo, dataToSend }: Props) => {
  const { year, month, day } = getCurrentDate();
  const minDate = `${year}-${month}-${day}`;
  const maxDate = `${year}-${parseInt(month) + 2}-${day}`;

  const options = dataToSend?.doctor?.schedules
    ?.reduce((acc: any, curr: any) => {
      //debemos ordenar este array
      if (curr.occupied) return[...acc];
      const start = curr.startTime;
      const end = curr.endTime;
      const book = [start, end];
      const data = {
        id: curr.id,
        interval: book,
      };
      return [...acc, data];
    }, [])
    .sort((a: any, b: any) => {
      const timeA = a.interval[0].split(":");
      const timeB = b.interval[0].split(":");

      const hoursA = parseInt(timeA[0]);
      const hoursB = parseInt(timeB[0]);

      return hoursA - hoursB;
    });

  const handleHour = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let index = e.target.selectedIndex
    const value = e.target.value
    const selectedHour = e.target.options[index].text;
     // Aquí estableces el estado utilizando setDateInfo
     setDateInfo((prevDateInfo) => ({
       ...prevDateInfo,
       hour: selectedHour,
       value
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
    <div className="flex">
      <input type="date" min={minDate} max={maxDate} onChange={handleDate} />
      <select onChange={handleHour}>
        {options?.map((option: any, index: any) => {
          //falta typar
          
          return (
            <option key={index} value={option.id}>
              {`${option.interval[0]} - ${option.interval[1]}`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default HoursForm;
