'use client'
import Menu from "@/components/Menu";
import { authSlice, logoutUser } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Header () {
  const router = useRouter()
  const role = useAppSelector(state => state.authReducer.role)
  const dispatch = useAppDispatch()

  const DocMenuInfo = [{
    href: "/dashboard/agenda",
    id: 0,
    link: "Agenda"
  }]
  const MenuInfo = [{
    href: "/dashboard/summary",
    id: 0,
    link: "Home"
  },
  {
    href: "/dashboard/solicitar-turnos",
    id: 1,
    link: "Solicitar un turno"
  },
  {
    href: "/dashboard/perfil",
    id: 3,
    link: "Perfil"
  }]

  useEffect(() => {
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString)
      dispatch(authSlice.actions.setUser({
        token: userInfo.token,
        userId: userInfo.userId,
        role: userInfo.role
      }))
    }
  }, [])

  const handleLogout = () => {
    dispatch(logoutUser())
    localStorage.removeItem('userInfo')
    router.push('/auth/login')
  }

  return (
    <header className="relative flex justify-between h-16  z-[100] shadow-2xl drop-shadow-2xl bg-primary">
      <Menu list={role === 'patient' ? MenuInfo : DocMenuInfo} />
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:absolute lg:top-0 lg:h-16 lg:w-[20%] lg:bg-primary lg:z-40 lg:shadow-md lg:drop-shadow-md text-xl text-white font-bold">
        <svg version="1.1" width="40px" height="40px" viewBox="0 0 100 125">
          <path
            fill="white"
            d="M45.8,69c0.5-0.4,1-0.6,1.4-0.7c-0.4-0.4-0.7-0.9-0.7-1.6l0,0c0-0.7,0.1-1.1,0.2-1.5h-0.1l0,0  c-0.2,0-1.2,0-2.2-0.4c-0.1,0.5-0.2,1.1-0.2,1.9l0,0c0,1.4,0.4,2.3,1,3C45.3,69.4,45.6,69.2,45.8,69z M55.7,57.8  c0.1,0.4,0.2,0.9,0.2,1.7l0,0c0,1.2-0.7,1.8-1.4,2.1c0.1,0.1,0.2,0.1,0.3,0.2c0.5,0.4,1,1,1.2,1.7c1.1-0.6,2.2-1.8,2.2-4l0,0  c0-1-0.1-1.9-0.4-2.5C57.2,57.4,56.5,57.7,55.7,57.8z M41.6,55.7c0.2-0.4,0.5-0.7,0.9-1c0.3-0.2,0.6-0.4,0.8-0.5  c-0.6-0.4-1.2-1.1-1.2-2.2l0,0c0-0.9,0.3-1.5,0.8-1.9c-0.6,0-1.6-0.2-2.6-0.5c-0.3,0.6-0.5,1.4-0.5,2.3l0,0  C39.9,53.7,40.6,54.9,41.6,55.7z M53.9,71.6c-0.3,0.2-0.6,0.3-0.9,0.4c0.2,0.4,0.4,0.9,0.4,1.9l0,0c0,0.9-0.4,1.5-0.9,1.9  c0.1,0.1,0.3,0.1,0.5,0.2c0.3,0.2,0.7,0.5,1,1c0.6-0.7,1.1-1.6,1.1-3.1l0,0c0-1.1-0.2-2-0.4-2.7C54.4,71.3,54.1,71.5,53.9,71.6z   M53.2,31.4v1.8c0,0.2-0.2,0.4-0.4,0.4H47c-0.2,0-0.4-0.2-0.4-0.4v-1.8C46.6,31.4,53.2,31.4,53.2,31.4z M42.6,26.6  c0,0-0.1-0.2-0.3-0.1c-2.1,1.1-7.5,1.2-6-7.7c0.1-0.3-0.1-0.5-0.4-0.6c-4-0.5-20.7-2.7-24.5-3.2c-0.5-0.1-0.6,0.1-0.5,0.4  c0.7,1.3,2.7,4.4,4.5,4.5c2.1,0.1,14.4,0.6,16,0.6c0.4,0,0.2,0.5,0.1,0.5s-13-0.1-16-0.1c-0.4,0-0.5,0.2-0.3,0.5  c0.8,1,2.7,3.1,4.1,2.9c1.8-0.3,11.4-1.2,12.8-1.3c0.3,0,0.3,0.5,0.1,0.5s-10.6,1.6-13,1.9c-0.3,0-0.3,0.2-0.1,0.4  c0.9,0.7,2.9,2.2,4.5,1.8c2-0.5,8.2-2.4,9.4-2.7c0.3-0.1,0.3,0.4,0.1,0.4c-0.2,0.1-7.4,3-9.2,3.7c-0.3,0.1-0.3,0.2-0.1,0.4  c0.9,0.5,3.3,1.9,4.3,1.3c1.1-0.7,5.1-3.2,6-3.8c0.2-0.1,0.5,0.2,0.3,0.4c-0.2,0.2-4.3,3.2-5.5,4.1c-0.2,0.1-0.1,0.3,0.1,0.4  c0.9,0.2,2.9,0.6,4.2-0.6c1.4-1.2,2.9-2.6,3.4-3c0.2-0.2,0.6,0.1,0.4,0.2c-0.1,0.1-3.1,3.1-4.1,4c-0.2,0.2-0.1,0.3,0.2,0.4  c0.9,0.1,3,0.3,4.1-1.1s1.7-2.3,2-2.6c0.2-0.2,0.6-0.1,0.5,0.1s-1.6,2.5-2.2,3.4c-0.1,0.2-0.1,0.3,0.2,0.3c0.9-0.1,3.2-0.4,3.8-1.2  c0.8-1.1,1.7-0.7,2-0.3c0.3,0.4,0.4-0.2,0.4-0.2l0.3-1.7L42.6,26.6z M28.9,32.5c-0.6-0.2-0.9,0.2-0.9,0.2s-1.9,1.4-2.2,1.6  c-0.3,0.2-0.2,0.4,0.2,0.5c1,0.2,2.9,0.5,4.2-0.7c0.2-0.1,0.3-0.3,0.5-0.5c0.1-0.1,0.4-0.4-0.1-0.6C30,32.8,29.4,32.7,28.9,32.5   M37.9,33.6c-0.3,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.4,0.6-0.4,0.7c0,0.1-0.1,0.3,0.2,0.3c0.8-0.1,2.4-0.3,2.9-0.9c0.1-0.1,0-0.2-0.2-0.2  C39.3,33.7,38.6,33.6,37.9,33.6 M10.4,16.1c-0.6-1-1.6-1-1.6-1l-4.5-0.7c-0.5-0.1-1-0.2-1.3-0.2c-0.5-0.1-0.7,0.1-0.5,0.5  c0.8,1.4,2.8,4.9,4.8,5.1c0.7,0.1,2.4,0.2,4.6,0.4c0.6,0,0.8-0.5,0.6-0.7s-0.3-0.4-0.4-0.7L10.4,16.1z M33.1,33.4  c-0.3-0.1-0.5,0.2-0.5,0.2s-1,1-1.2,1.2s-0.1,0.3,0.2,0.4c0.8,0.1,2.5,0.1,3.4-1c0.1-0.1,0.1-0.3-0.2-0.4  C34.2,33.6,33.4,33.4,33.1,33.4 M23.7,30.4c-0.9-0.5-1.5-0.3-1.5-0.3s-3.5,1.2-3.9,1.4c-0.3,0.1-0.3,0.3,0,0.5  c1.1,0.7,3.6,2.3,4.7,1.6c0.5-0.3,1.5-0.9,2.7-1.5c0.1-0.1,0.3-0.3,0-0.5C24.9,31.2,24.3,30.8,23.7,30.4 M14.7,22.1  c-0.4-0.6-0.7-0.6-1.3-0.6c-0.5,0-5.4-0.2-5.7-0.2c-0.2,0-0.5,0.2-0.2,0.4c0.8,1.1,2.9,3.6,4.5,3.4c0.8-0.1,2.3-0.2,4.2-0.3  c0.2,0,0.6-0.2,0.3-0.5C15.9,23.6,15.3,22.8,14.7,22.1 M18.8,26.6c-0.2-0.2-0.6-0.5-1.2-0.3c-0.7,0.1-4.5,0.9-4.9,1  c-0.5,0.1-0.5,0.3-0.1,0.6c1,0.8,3.2,2.2,4.9,1.7c0.6-0.2,1.7-0.6,2.9-1c0.2-0.1,0.5-0.3,0.1-0.6C19.9,27.5,19.3,27.1,18.8,26.6   M55.6,29.7l0.3,1.7c0,0,0.1,0.7,0.4,0.2c0.3-0.4,1.2-0.8,2,0.3c0.6,0.8,2.9,1.1,3.8,1.2c0.2,0,0.3-0.1,0.2-0.3  c-0.6-0.9-2.1-3.3-2.2-3.4c-0.1-0.2,0.3-0.3,0.5-0.1c0.2,0.3,0.8,1.2,2,2.6c1.1,1.3,3.2,1.2,4.1,1.1c0.3,0,0.4-0.2,0.2-0.4  c-1-0.9-3.9-3.9-4.1-4c-0.1-0.1,0.2-0.4,0.4-0.2c0.4,0.4,2,1.8,3.4,3c1.3,1.2,3.3,0.8,4.2,0.6c0.3-0.1,0.3-0.2,0.1-0.4  c-1.2-0.9-5.3-4-5.5-4.1s0.1-0.5,0.3-0.4c0.9,0.5,4.9,3.1,6,3.8c0.9,0.6,3.4-0.7,4.3-1.3c0.2-0.1,0.2-0.3-0.1-0.4  c-1.8-0.7-9.1-3.7-9.2-3.7c-0.2-0.1-0.1-0.5,0.1-0.4c1.1,0.3,7.4,2.2,9.4,2.7c1.6,0.5,3.7-1.1,4.5-1.8c0.3-0.2,0.2-0.4-0.1-0.4  c-2.4-0.4-12.8-1.9-13-1.9s-0.2-0.5,0.1-0.5c1.4,0.1,11,1.1,12.8,1.3c1.4,0.2,3.4-1.9,4.1-2.9c0.2-0.3,0.1-0.5-0.3-0.5  c-3,0-15.9,0.1-16,0.1s-0.3-0.5,0.1-0.5c1.5-0.1,13.8-0.5,16-0.6c1.8-0.1,3.8-3.2,4.5-4.5c0.2-0.3,0-0.5-0.5-0.4  c-3.8,0.5-20.5,2.7-24.5,3.2c-0.3,0-0.4,0.3-0.4,0.6c1.5,8.9-3.9,8.7-6,7.7c-0.2-0.1-0.3,0.1-0.3,0.1L55.6,29.7z M71.1,32.5  c-0.6,0.2-1.2,0.3-1.7,0.5c-0.6,0.2-0.2,0.5-0.1,0.6c0.2,0.2,0.3,0.3,0.5,0.5c1.3,1.2,3.2,0.9,4.2,0.7c0.4-0.1,0.5-0.3,0.2-0.5  S72,32.7,72,32.7S71.7,32.3,71.1,32.5 M62.1,33.6c-0.7,0.1-1.3,0.1-2,0.1c-0.2,0-0.3,0.1-0.2,0.2c0.5,0.6,2.1,0.8,2.9,0.9  c0.3,0,0.2-0.2,0.2-0.3s-0.4-0.6-0.4-0.7C62.4,33.7,62.3,33.6,62.1,33.6 M87.8,18.7c-0.1,0.2-0.3,0.4-0.4,0.7  c-0.2,0.3,0,0.7,0.6,0.7c2.2-0.1,3.8-0.3,4.6-0.4c2-0.2,4-3.7,4.8-5.1c0.2-0.4,0-0.6-0.5-0.5c-0.3,0.1-0.8,0.1-1.3,0.2L91.1,15  c0,0-1,0.1-1.6,1L87.8,18.7z M66.9,33.4c-0.3,0.1-1.1,0.3-1.7,0.3C65,33.8,65,34,65.1,34.1c0.9,1.1,2.6,1.1,3.4,1  c0.3,0,0.3-0.2,0.2-0.4c-0.2-0.2-1.2-1.2-1.2-1.2S67.2,33.3,66.9,33.4 M76.3,30.4c-0.6,0.4-1.2,0.8-1.8,1.2c-0.3,0.2-0.2,0.4,0,0.5  c1.1,0.6,2.2,1.2,2.7,1.5c1.1,0.6,3.6-0.9,4.7-1.6c0.3-0.2,0.2-0.4-0.1-0.5c-0.3-0.1-3.9-1.4-3.9-1.4S77.1,29.9,76.3,30.4   M85.3,22.1c-0.6,0.7-1.2,1.5-1.8,2.2c-0.2,0.3,0.1,0.5,0.3,0.5c1.9,0.1,3.4,0.3,4.2,0.3c1.6,0.2,3.7-2.3,4.5-3.4  c0.2-0.3,0-0.5-0.2-0.4c-0.2,0-5.1,0.1-5.7,0.2C86,21.5,85.7,21.5,85.3,22.1 M81.2,26.6c-0.5,0.5-1.1,0.9-1.7,1.3  c-0.4,0.3-0.1,0.6,0.1,0.6c1.2,0.4,2.3,0.8,2.9,1c1.7,0.5,3.9-0.9,4.9-1.7c0.4-0.3,0.3-0.6-0.1-0.6c-0.5-0.1-4.2-0.8-4.9-1  C81.8,26.1,81.4,26.5,81.2,26.6 M55.6,25.2c0-3.1-2.5-5.6-5.6-5.6s-5.6,2.5-5.6,5.6c0,1.4,0.5,2.8,1.4,3.8v1.5  c0,0.2,0.2,0.4,0.4,0.4h7.6c0.2,0,0.4-0.2,0.4-0.4V29C55.1,28,55.6,26.6,55.6,25.2z M51.8,61.4l0.1-3.7H48l0.1,3.7  C48.7,61.4,51.6,61.4,51.8,61.4z M51.3,75.7l0.1-3.7h-2.9l0.1,3.8C48.9,75.7,51.3,75.7,51.3,75.7z M48.4,68.5h3.1l0.1-3.7h-3.4  L48.4,68.5z M47.9,54.2H52l0.2-4.5h-4.5L47.9,54.2z M52.4,46l0.4-11.9h-5.6L47.6,46H52.4z M60,36.6c-0.5-0.7-1.5-1.3-2.7-1.5  c-1.9-0.4-3.7,0.2-4,1.3c-0.2,1.2,1.1,2,3.1,2.4c0.9,0.2,1.8,0.6,2.5,0.4c1.2,0.5,2.4,1.5,2.4,3.4l0,0c0,2.2-1.7,3.2-3.4,3.6  c1.1,0.5,1.8,1.2,2.3,2.1c1.9-0.8,3.9-2.4,3.9-5.7l0,0C64.1,38.9,61.7,37.3,60,36.6z M55.6,36.4c-0.5,0-1-0.2-1-0.5s0.4-0.5,1-0.5  s1,0.2,1,0.5S56.1,36.4,55.6,36.4z M55.6,46.6h-1.8l0,0H50h-3.8c0,0,0,0-0.1,0h-0.5c0,0-7,0.5-7-3.9l0,0c0-2,1.2-3,2.4-3.5  c0.7,0.2,1.6-0.2,2.6-0.4c1.9-0.4,3.3-1.2,3.1-2.4s-2-1.7-4-1.3c-1.2,0.3-2.2,0.8-2.7,1.5c-1.8,0.7-4.2,2.3-4.2,6l0,0  c0,3.9,2.8,5.5,5,6.1l0,0c0,0,0,0,0.1,0s0.3,0.1,0.4,0.1h0.1c1.2,0.3,2,0.3,2,0.3h0.1h1.9l0,0H52h2.2l0,0l0,0c0.4,0,3.3,0.1,3.3,2.8  l0,0c0,2.9-3.4,2.8-3.4,2.8s-3.3,0-3.7,0h-0.2h-0.5h-5.2l0,0l0,0c0,0,0,0-0.1,0l0,0c0,0-0.1,0-0.2,0c0,0,0,0-0.1,0s-0.1,0-0.2,0  h-0.1c-0.1,0-0.1,0-0.2,0.1h-0.1c-0.2,0.1-0.4,0.2-0.7,0.4c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.2l-0.1,0.1  c-0.1,0.1-0.2,0.2-0.3,0.3c0,0,0,0-0.1,0.1l0,0c-0.4,0.7-0.8,1.7-0.8,3.3c0,2.8,1.6,3.9,3,4.4l0,0c0.1,0,0.2,0.1,0.4,0.1h0.1  c0.1,0,0.2,0,0.3,0.1H45c0.1,0,0.2,0,0.2,0h0.1c0.1,0,0.2,0,0.3,0l0,0c0.1,0,0.2,0,0.2,0l0,0c0.1,0,0.1,0,0.2,0l0,0h3.4h1.1h1.4  c0,0,0.9-0.1,0.9,2.4l0,0c0,2.3-2.6,2.4-2.9,2.4l0,0l0,0l0,0l0,0h-0.3H50h-1.9l0,0l0,0l0,0c0,0,0,0-0.1,0c0,0-0.1,0-0.2,0l0,0  c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0s-0.1,0-0.2,0.1h-0.1c-0.1,0-0.2,0.1-0.3,0.1c0,0,0,0-0.1,0c-0.2,0.1-0.5,0.3-0.7,0.5  c0,0,0,0-0.1,0.1s-0.2,0.2-0.3,0.3l0,0l0,0c-0.5,0.7-0.9,1.8-0.9,3.5c0,4.8,4.1,4.4,5,4.4c0.1,0,0.1,0,0.2,0h0.7l0,0  c0.3,0,0.5,0,0.5,0s1.1,0.3,1.1,1.8C52.2,81,51,81.3,51,81.3l0,0l0.1-2.7h-2.3l0.1,2.6c0,0-1.3-0.3-1.4-1.8c0-0.4,0.1-0.8,0.2-1  c-0.5-0.1-1-0.3-1.5-0.6c-0.1,0.4-0.2,0.9-0.2,1.6c0,2.2,2.1,3.2,2.9,3.2L49,85c0,0.2,0.2,0.5,0.9,0.5c0.8,0,0.9-0.3,0.9-0.5  l0.1-2.4c0.9-0.1,3-1,3-3.2c0-3.5-3-3.6-3.3-3.6l0,0l0,0h-0.8h-0.2h-0.4c0,0-2.8,0.1-2.8-2.4s1.1-2.4,1.1-2.4H49h0.7h0.8l0,0l0,0  c0,0,0,0,0.1,0c0,0,0,0,0.1,0s0.4,0,0.6-0.1h0.1c0.1,0,0.2,0,0.3-0.1h0.1c0.1,0,0.2-0.1,0.3-0.1s0.1,0,0.2-0.1  c0.1,0,0.2-0.1,0.3-0.1s0.1,0,0.2-0.1c0.1,0,0.2-0.1,0.3-0.2c0.1,0,0.1-0.1,0.2-0.1c0.1-0.1,0.2-0.2,0.4-0.2c0,0,0.1,0,0.1-0.1l0,0  c0.9-0.7,1.6-1.8,1.6-3.7l0,0c0-1.6-0.3-2.6-0.8-3.3c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.2-0.3-0.3-0.4c0,0,0,0,0-0.1  c-0.1-0.1-0.3-0.2-0.4-0.3l0,0c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0-0.1,0c-0.2-0.1-0.5-0.2-0.6-0.2c0,0,0,0-0.1,0s-0.1,0-0.2,0l0,0  c-0.1,0-0.1,0-0.1,0l0,0l0,0c0,0-3.5,0-4.1,0H47l0,0c-0.2,0-0.3,0-0.3,0s-3,0.1-3-2.4s0.9-2.4,0.9-2.4s0.5,0,1.2,0h3.8h2.3h1.5  c0,0,0.1,0,0.3,0l0,0c0.1,0,0.2,0,0.3,0l0,0c0.1,0,0.2,0,0.4,0l0,0c0.8-0.1,1.8-0.3,2.8-0.8l0,0c1.4-0.7,2.6-2,2.6-4.4  C60.1,46.5,55.6,46.6,55.6,46.6z M44.4,35.4c0.5,0,1,0.2,1,0.5s-0.4,0.5-1,0.5c-0.5,0-1-0.2-1-0.5C43.4,35.6,43.9,35.4,44.4,35.4z"
          />
        </svg>
        MediConnect
      </div>
      <div className="w-24 flex justify-around items-center content-center mr-3 lg:mr-16 z-40">
        <Link href="#" className="w-16">
          <span className=" w-full h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6"
            >
              <path
                fill="white"
                d="M450.27,348.569,406.6,267.945V184c0-83.813-68.187-152-152-152s-152,68.187-152,152v83.945L58.928,348.568A24,24,0,0,0,80.031,384h86.935c-.238,2.636-.367,5.3-.367,8a88,88,0,0,0,176,0c0-2.7-.129-5.364-.367-8h86.935a24,24,0,0,0,21.1-35.431ZM310.6,392a56,56,0,1,1-111.419-8H310.018A56.14,56.14,0,0,1,310.6,392ZM93.462,352,134.6,276.055V184a120,120,0,0,1,240,0v92.055L415.736,352Z"
              ></path>
            </svg>
          </span>
        </Link>
        <button onClick={handleLogout}>Cerrar sesion</button>
        {/* <Link href="#" className="px-2">
          <span className="text-white"> Profile</span>
        </Link> */}
      </div>
    </header>
  );
}
