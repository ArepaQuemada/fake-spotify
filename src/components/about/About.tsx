import "./about.css";

const About = () => {
  return (
    <section>
      <div className="about bg-[rgb(83, 83, 83)] p-4">
        <div>
          <p className="font-bold mb-4">Compañía</p>
          <ul>
            <li className="mb-4 text-gray-300 text-sm">Acerca de</li>
            <li className="mb-4 text-gray-300 text-sm">Empleo</li>
            <li className="mb-4 text-gray-300 text-sm">For the Record</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-4">Comunidades</p>
          <ul>
            <li className="mb-4 text-gray-300 text-sm">Para artistas</li>
            <li className="mb-4 text-gray-300 text-sm">Desarrolladores</li>
            <li className="mb-4 text-gray-300 text-sm">Publicidad</li>
            <li className="mb-4 text-gray-300 text-sm">Inversionistas</li>
            <li className="mb-4 text-gray-300 text-sm">Proveedores</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-4">Enlaces útiles</p>
          <ul>
            <li className="mb-4 text-gray-300 text-sm">Ayuda</li>
            <li className="mb-4 text-gray-300 text-sm">App móvil gratis</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
