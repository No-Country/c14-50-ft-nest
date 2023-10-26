'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

  const ResetPasswordPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    const [alerta, setAlerta] = useState('');
    //const router = useRouter();
      const url = ('url');    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
<<<<<<< HEAD
      e.preventDefault();    
        if(email === '' || password === '' || confirmpass === ''){
          setAlerta('DEBES COMPLETAR LOS CAMPOS');          
=======
      e.preventDefault();     

        if(!email || !password || !confirmpass){
          setAlerta('DEBES COMPLETAR LOS CAMPOS');
          
>>>>>>> b4625539b1da7133b0e5c91a855f7db7bc51c47c
          setTimeout(() => {
              setAlerta('');
          }, 2000);
          return;
        }
        if(password !== confirmpass){
          setAlerta('LAS CONTRASEÑAS NO COINCIDEN');
          setTimeout(() =>{
            setAlerta('');
          }, 2000);
          return;
        }
        const data = {
          email : email,
          password : password,
          confirmpass : confirmpass
        }
        
        alert('Enviar al Backend')
        // const response = await axios
        // .post(url, data);                      
      }
    return (
      <div className="p-3 pb-12 shadow-md lg:w-[40%] lg:ml-auto lg:overflow-y-scroll bg-white flex flex-col items-center justify-center">
        <h1 className='max-w-sm w-full text-primary font-bold text-3xl mb-4 text-center'>Recuperar contraseña</h1>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center max-w-sm w-full h-fit px-2 py-5 text-primary gap-2'>     
          <label className="block text-sm font-bold mb-2">Correo</label>
          <input type="email" placeholder='Ingrese el email' onChange={e=>setEmail(e.target.value)} />
          <label className="block text-sm font-bold mb-2">Nueva contraseña</label>
          <input type="password" placeholder='Nueva Contraseña' onChange={e => setPassword(e.target.value)} />
          <label className="block text-sm font-bold mb-2">Confirmar contraseña</label>
          <input type="password" placeholder='Confirme la contraseña' onChange={e => setConfirmpass(e.target.value)} />
          <p className="text-white text-center bg-red-500 rounded" >{alerta}</p>
          <button 
              className="bg-primary w-full text-white hover:bg-[#0C616E] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300"
              type="submit"
            >
              Actualizar contraseña
            </button>        
        </form>
      </div>
    )
  }


export default ResetPasswordPage