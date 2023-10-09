import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-[60%] bg-no-repeat bg-cover h-screen absolute text-white flex flex-col justify-center items-center gap-5">
      <Image src={"/banner.svg"} alt="Banner" layout="fill" objectFit="cover" style={{zIndex:"-1"}} />
      <h2 className="text-4xl font-bold">Gestiona tus turnos con facilidad</h2>
      <p className="text-lg w-[50%]">Organiza los turnos de trabajo de tu equipo de forma sencilla con nuestra aplicación. Asigna turnos, gestiona horarios y mantén a tu equipo comunicado.</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Conoce más sobre la app</button>
    </div>
  );
}
