export default function Contact() {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-4xl font-bold text-center mb-12">Contactanos</h2>
        <form className="bg-white p-8 rounded-lg shadow-md">
          <input type="text" placeholder="Tu nombre" className="w-full mb-4 p-3 border rounded-lg" />
          <input type="email" placeholder="Tu email" className="w-full mb-4 p-3 border rounded-lg" />
          <textarea placeholder="Tu mensaje" rows="5" className="w-full mb-4 p-3 border rounded-lg"></textarea>
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-secondary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
