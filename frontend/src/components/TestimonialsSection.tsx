import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      author: 'María Pérez',
      content: 'La atención médica en esta clínica es excepcional. Los médicos son muy profesionales y amables. Me siento segura y bien atendida en cada visita.',
    },
    {
      id: 2,
      author: 'Juan López',
      content: 'La clínica tiene un equipo médico de primer nivel. Me han brindado un excelente cuidado de la salud a lo largo de los años. Estoy muy agradecido.',
    },
    {
      id: 3,
      author: 'Ana García',
      content: 'Desde la primera visita, supe que estaba en buenas manos. Los médicos aquí realmente se preocupan por sus pacientes y su bienestar.',
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">Testimonios de Pacientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-700">{testimonial.content}</p>
              <p className="text-gray-600 mt-4">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
