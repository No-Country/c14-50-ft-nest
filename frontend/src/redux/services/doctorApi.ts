import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Doctor = {
  id: string
  is_deleted: boolean
  deletedAt: null
  firstName: string
  lastName: string
  birthDate: string
  phone: null
  gender: null
  schedules: string[]
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