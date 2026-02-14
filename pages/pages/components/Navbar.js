export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">LicitaExper</div>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-primary">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-primary">Servicios</a></li>
          <li><a href="#contacto" className="hover:text-primary">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
