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

type RoleInfo = {
  id: string

}

type User = {
  id: string
  email: string
  document: string
  role: {
    id: string
    name: string
  }
  patient: RoleInfo | null
  doctor: RoleInfo | null
}

type Appointment = {
  id: string
  day: string
  interval: string
  doctor: Doctor,
  speciality: {
    name: string
  }
  patient: {
    id: string
    firstName: string
    lastName: string
  }
}

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nc-project-lim7.onrender.com/api',
  }),
  endpoints: (builder) => ({
    getDoctors: builder.query<Doctor[], null>({
      query: () => '/doctor'
    }),
    getDoctorsById: builder.query<Doctor, { id: string }>({
      query: ({ id }) => `/doctor/${ id }`
    }),
    getUsers: builder.query<User[], null>({
      query: () => '/users'
    }),
    getUsersById: builder.query<User, { id: string }>({
      query: ({ id }) => `/users/${ id }`
    }),
    getAppointments: builder.query<Appointment[], null>({
      query: () => '/appointments'
    })
  })
})

export const { useGetDoctorsQuery, useGetDoctorsByIdQuery, useGetAppointmentsQuery } = projectApi