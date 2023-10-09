import Image from "next/image";

export default function Banner() {
  return (
    <div className="lg:w-[60%] bg-no-repeat bg-cover h-auto mt-12 mb-16 lg:h-screen text-white flex flex-col justify-center items-center gap-5">
      <Image
        src={"/banner.svg"}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        style={{ zIndex: "-1" }}
      />
      <h2 className="text-2xl lg:text-4xl font-bold text-center">
        Gestiona tus turnos con facilidad
      </h2>
      <p className="text-lg lg:w-[50%] text-left px-8 lg:px-0">
        Organiza los turnos de trabajo de tu equipo de forma sencilla con
        nuestra aplicación. Asigna turnos, gestiona horarios y mantén a tu
        equipo comunicado.
      </p>
      <button className="bg-[#0B8B9D] text-white hover:bg-[#0C616E] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300">
        Conoce más sobre la app
      </button>
    </div>
  );
}
