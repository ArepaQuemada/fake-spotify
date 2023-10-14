import React from "react";

const links = [
  { id: 1, name: "Legal", to: "#" },
  { id: 2, name: "Política de Privacidad", to: "#" },
  { id: 3, name: "Cookies", to: "#" },
  { id: 4, name: "Sobre los anuncios", to: "#" },
  { id: 5, name: "Accesibilidad", to: "#" },
];

const Footer = () => {
  return (
    <footer className="my-4">
      <div className="footer__links">
        <ul className="grid grid-cols-3 gap-1 text-left">
          {links.map(({ name, id, to }) => (
            <li key={id}>
              <a href={to} className="text-xs">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
