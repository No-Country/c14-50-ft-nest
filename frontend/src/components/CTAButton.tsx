import Link from "next/link";

const CTAButton = () => {
  return (
    <main>
      <div className="relative shadow-2xl drop-shadow-xl">
        <img
          src="/image-3.jpg"
          alt="banner-image"
          className="w-full transition-transform duration-300 transform hover:scale-110 sm:hover:scale-100"
        />
        <Link  href="/auth/login"
          className="bg-primary text-white sm:p-4 lg:p-6 xl:p-8 w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4 rounded-full text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold block text-center absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl drop-shadow-2xl hover:bg-blue-400 transition duration-300"> Reservar Turnos
        </Link>
      </div>
    </main>
  );
};

export default CTAButton;
