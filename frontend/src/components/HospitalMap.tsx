import React, { useEffect, useRef } from 'react';

const HospitalMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.defer = true;
    script.async = true;

    script.addEventListener('load', () => {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 },
        map: map,
        title: 'Hospital XYZ',
      });
    });

    document.head.appendChild(script);
  }, []);

  return (
    <section className="container mx-auto mt-8 my-8 flex flex-wrap">
      <div className="w-full sm:w-1/2 pr-4 sm:pr-8 mt-2 sm:mt-0 ml-4 sm:ml-0"> {/* Agregamos margen derecho en dispositivos pequeños */}
        <h2 className="text-2xl font-semibold text-primary ">Ubicación</h2>
        <p className="">Av. Directorio 6977</p> {/* Agregamos margen superior y izquierdo en dispositivos pequeños */}
        <p>Ciudad Autónoma de Buenos Aires</p>
        <p>Argentina</p>
      </div>
      <div className="w-full sm:w-1/2 mt-2 sm:mt-0 ml-4 sm:ml-0">
        <h3 className="text-2xl font-semibold text-primary">Horarios de Atención</h3>
        <ul>
          <li>Lunes a Viernes: 9:00 AM - 5:00 PM</li>
          <li>Sábado: 7:00 AM - 2:00 PM</li>
        </ul>
      </div>
      <div
        ref={mapContainerRef}
        style={{ width: '100%', height: '300px' }}
        className="w-full my-8 rounded-lg shadow-2xl drop-shadow-2xl"
      ></div>
    </section>
  );
};

export default HospitalMap;
