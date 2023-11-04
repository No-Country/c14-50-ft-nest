import { createSlice } from '@reduxjs/toolkit';

interface Appointment {
  id: string
  day: string
  interval: string
  doctor: {
    id: string
    firstName: string
    lastName: string
  }
  patient: {
    id: string
    firstName: string
    lastName: string
  }
}

const initialState: Appointment[] = []

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setAppointment: (state, action) => {
      action.payload.forEach((element:any) => {
        if (!state.find(item => item.id === element.id)) {
          state.push(element);
        }
      });
    },
  }
})

export const { setAppointment } = appointmentSlice.actions
export default appointmentSlice.reducer