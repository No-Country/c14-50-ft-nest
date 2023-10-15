import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 mt-2 sm:mt-0 ml-4 sm:ml-0">
          <h3 className="text-xl font-semibold">Información de Contacto</h3>
          <p>Teléfono: (123) 456-7890</p>
          <p>Correo Electrónico: info@mediconnect.com</p>
          <p>Dirección: Av. Directorio 6977,</p>
          <p>Ciudad Autónoma de Buenos Aires</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 mt-2 sm:mt-0 ml-4 sm:ml-0">
          <h3 className="text-xl font-semibold">Navegación</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/dashboard">Turnos</a></li>
            <li><a href="/testimonios">Testimonios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 mt-2 sm:mt-0 ml-4 sm:ml-0">
          <h3 className="text-xl font-semibold">Redes Sociales</h3>
          <ul className='flex gap-4'>
            <li><a href="#"><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#ffffff"></path> </g></svg><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><svg width="32px" height="32px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#ffffff"></rect> <rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#ffffff" stroke-linecap="round"></rect> </g></svg><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><svg fill="#ffffff" width="32px" height="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.588 511.588"  stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.508,93.804c-2.794-2.708-6.795-3.601-10.44-2.334l-17.252,5.953c10.162-12.297,17.66-25.14,21.608-37.315 c1.146-3.549,0.104-7.48-2.647-10.006c-2.768-2.543-6.786-3.263-10.275-1.805c-24.194,10.145-45.603,18.979-62.629,24.264 c-0.633,0.2-1.284,0.113-1.935-0.252c-13.572-7.602-47.547-25.062-71.68-24.784c-61.032,1.119-110.696,53.274-110.696,116.267 v3.445c-89.869-17.399-139.533-43.251-193.31-99.666l-8.4-8.817l-5.589,10.821C6.071,126.043,26.768,176.653,60.881,210.74 c-15.117-2.317-26.095-7.185-35.337-15.247c-3.549-3.072-8.583-3.454-12.54-0.937c-3.896,2.482-5.675,7.125-4.417,11.55 c11.481,40.622,42.227,73.98,74.683,93.913c-15.681-0.017-28.585-1.762-41.559-10.101c-3.775-2.43-8.687-2.178-12.21,0.607 c-3.497,2.777-4.842,7.463-3.35,11.672c15.82,44.431,45.403,67.801,94.425,73.624c-25.201,14.735-57.899,26.381-108.952,27.448 c-4.981,0.104-9.39,3.341-10.986,8.044C-0.958,416,0.5,421.033,4.344,424.122c31.024,25.01,100.612,39.945,186.151,39.945 c153.123,0,277.695-136.253,277.695-303.729v-2.942c19.812-9.468,34.929-28.151,42.921-53.274 C512.274,100.46,511.276,96.503,508.508,93.804z"></path> </g> </g> </g></svg><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



