import "./about.css";

const About = () => {
  return (
    <section>
      <div className="about bg-[rgb(83, 83, 83)] p-2 md:p-0">
        <div>
          <p className="font-bold mb-4">Compañía</p>
          <ul>
            <li className="mb-4 text-gray-300 text-sm hover:text-white hover:underline">
              Acerca de
            </li>
            <li className="mb-4 text-gray-300 text-sm hover:text-white hover:underline">
              Empleo
            </li>
            <li className="mb-4 text-gray-300 text-sm hover:text-white hover:underline">
              For the Record
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-4">Comunidades</p>
          <ul>
            <li className="mb-4 text-gray-300 text-sm hover:text-white hover:underline">
              Para artistas
            </li>
            <li className="mb-4 text-gray-300 text-sm hover:text-white hover:underline">
              Desarrolladores
            </li>
            <li className="mb-4 text-gray-300 text-sm hover:text-white hover:underline">
              Publicidad
            </li>
            <li className="mb-4 text-gray-300 text-sm hover:text-white hover:underline">
              Inversionistas
            </li>
            <li className="mb-4 text-gray-300 text-sm hover:text-white hover:underline">
              Proveedores
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-4">Enlaces útiles</p>
          <ul>
            <li className="mb-4 text-gray-300 text-sm hover:text-white hover:underline">
              Ayuda
            </li>
            <li className="mb-4 text-gray-300 text-sm hover:text-white hover:underline">
              App móvil gratis
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
