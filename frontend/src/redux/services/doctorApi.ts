import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Doctor = {
  id: string
  is_deleted: boolean
  deletedAt: string
  firstName: string
  lastName: string
  birthDate: string
  phone: string
  registrationNumber: number
  gender: string
  schedules: string[]
  specialties: [{
    id: string,
    is_deleted: false,
    deletedAt: null,
    name: string
  }]
}

export const doctorApi = createApi({
  reducerPath: 'doctorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nc-project-lim7.onrender.com/api/',
  }),
  endpoints: (builder) => ({
    getDoctors: builder.query<Doctor[], null>({
      query: () => 'doctor'
    }),
    getDoctorsById: builder.query<Doctor, { id: string }>({
      query: ({ id }) => `doctor/${ id }`
    })
  })
})

export const { useGetDoctorsQuery, useGetDoctorsByIdQuery } = doctorApi