'use client'
import { useAppSelector } from '@/redux/hooks';
import { useGetDoctorsByIdQuery } from '@/redux/services/doctorApi';
import { useEffect } from 'react';

export default function AgendaPage () {
  const userId = useAppSelector(state => state.authReducer.userId)
  const { data, error, isLoading, isFetching } = useGetDoctorsByIdQuery({ id: userId })

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <main className="h-screen">
      <h1>mis turnos</h1>
    </main>
  );
}
