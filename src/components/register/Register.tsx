import React from "react";
import Button from "../button/Button";

const Register = () => {
  return (
    <section className="p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bottom-0 absolute register-size">
      <p className="capitalize">Muestra de spotify</p>
      <div className="flex justify-between">
        <div className="max-w-md md:max-w-none">
          <p>
            Registrate para acceder a canciones y podcasts ilimitados con
            algunos anuncios. No necesitas tarjeta de credito
          </p>
        </div>
        <Button size="lg">Registrate gratis</Button>
      </div>
    </section>
  );
};

export default Register;
