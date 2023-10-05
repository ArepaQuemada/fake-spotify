import Button from "../button/Button";

const Header = () => {
  return (
    <header className="bg-[#121212] p-3 flex justify-end gap-4 border-soft border-bottom__hide sticky">
      <Button as="secondary" size="lg">
        Registrate
      </Button>
      <Button>Iniciar sesion</Button>
    </header>
  );
};

export default Header;
