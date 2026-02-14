export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
        <p className="text-lg mb-6">
          Ofrecemos asesoría integral en licitaciones, gestión empresarial y soluciones estratégicas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded">Consultoría</div>
          <div className="p-6 bg-white shadow rounded">Gestión de proyectos</div>
          <div className="p-6 bg-white shadow rounded">Capacitación</div>
        </div>
      </div>
    </section>
  );
}
