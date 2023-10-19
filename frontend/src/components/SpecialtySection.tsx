import React from 'react';

const SpecialtySection = () => {
  return (
    <section className="container mx-auto mt-8 mb-8 text-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray rounded-lg flex flex-col shadow-2xl drop-shadow-2xl border-2 border-primary hover:scale-105">
          <h2 className="text-2xl font-semibold pb-4 text-primary">Odontología</h2>
          <img className="rounded mb-5 object-cover sm:h-72 md:w-full md:h-60" src="/image-4.jpg" alt="imagen-odontologo" />
          <p>Sonríe con confianza. Nuestra especialidad en odontología está aquí para cuidar de tu salud bucal. Desde limpiezas regulares hasta la corrección de problemas dentales, te ayudamos a mantener tu sonrisa radiante y saludable.</p>
        </div>
        <div className="p-4 bg-gray rounded-lg flex flex-col shadow-2xl drop-shadow-2xl border-2 border-primary hover:scale-105">
          <h2 className="text-2xl font-semibold pb-4 text-primary">Obstetricia</h2>
          <img className="rounded mb-5 object-cover sm:h-72 md:w-full md:h-60" src="/image-1.jpg" alt="imagen-obstetra" />
          <p>Comparte la alegría de la maternidad con nosotros. Nuestra obstetricia cuida de ti y tu bebé desde el principio hasta el final. Estamos aquí para ayudarte a llevar un embarazo saludable y seguro. Únete a nosotros en este emocionante viaje hacia la maternidad.</p>
        </div>
        <div className="p-4 bg-gray rounded-lg flex flex-col shadow-2xl drop-shadow-2xl border-2 border-primary hover:scale-105">
          <h2 className="text-2xl font-semibold pb-4 text-primary">Cardiología</h2>
          <img className="rounded mb-5 object-cover sm:h-72 md:w-full md:h-60" src="/image-2.jpg" alt="imagen-cardiologo" />
          <p>Tu corazón merece lo mejor. Nuestros cardiólogos expertos están dedicados a proteger tu corazón y tu salud cardiovascular. Si sientes que algo no está bien o simplemente deseas un chequeo, ven a vernos. Tu bienestar es nuestra prioridad.</p>
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;
