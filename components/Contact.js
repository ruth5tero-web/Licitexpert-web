export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
        <p className="text-lg mb-6">
          Escríbenos para recibir asesoría personalizada en tus proyectos.
        </p>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full mb-4 p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full mb-4 p-3 border rounded"
          />
          <textarea
            placeholder="Tu mensaje"
            className="w-full mb-4 p-3 border rounded"
          ></textarea>
          <button className="bg-primary text-white px-6 py-3 rounded font-bold hover:bg-secondary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
