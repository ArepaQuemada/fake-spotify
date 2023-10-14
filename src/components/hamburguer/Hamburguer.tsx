"use client";
import { useState } from "react";

const Hamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <button
        className="block text-white hover:text-white focus:text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
          />
        </svg>
      </button>

      <div
        className={`fixed top-0 right-0 h-screen w-screen z-10 bg-black p-4 overflow-hidden transition-all ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            className="block text-white hover:text-white focus:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.293 4.293a1 1 0 0 0-1.414-1.414L12 10.586 5.121 3.707a1 1 0 1 0-1.414 1.414L10.586 12l-6.879 6.879a1 1 0 1 0 1.414 1.414L12 13.414l6.879 6.879a1 1 0 0 0 1.414-1.414L13.414 12l6.879-6.879z"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <div>
            <p className="text-xl font-bold mb-8">Iniciar sesion</p>
            <p className="text-xl font-bold mb-8">Registrarse</p>
          </div>
          <hr className="my-2 border-t-2 border-gray-300 mb-8" />
          <ul>
            <li className="font-bold mb-4">Premium</li>
            <li className="font-bold mb-4">Ayuda</li>
            <li className="font-bold mb-4">Descargar</li>
            <li className="font-bold mb-4">Privacidad</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburguer;
