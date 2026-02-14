export default function Services() {
  const services = [
    { title: 'Asesoría en Licitaciones', description: 'Guía completa para participar en procesos de licitación' },
    { title: 'Soluciones Empresariales', description: 'Estrategias personalizadas para tu negocio' },
    { title: 'Consultoría Especializada', description: 'Expertos en diferentes áreas empresariales' },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
