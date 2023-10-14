import Button from "../button/Button";

const DesktopHeader = () => {
  return (
    <header className="hidden md:visible bg-[#121212] md:p-3 md:flex md:justify-end md:gap-4 border-soft border-bottom__hide sticky">
      <Button as="secondary" size="lg">
        Registrate
      </Button>
      <Button>Iniciar sesion</Button>
    </header>
  );
};

export default DesktopHeader;
