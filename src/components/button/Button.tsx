type As = "primary" | "secondary";

type Size = "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  size?: Size;
  as?: As;
}

const Button = ({ as = "primary", size = "md", children }: ButtonProps) => {
  const colorClasses: Record<As, string> = {
    primary: "bg-white text-black",
    secondary: "bg-transparent text-[#a7a7a7]",
  };
  const sizeClasses: Record<Size, string> = {
    md: "min-h-[32px]",
    lg: "min-h-[48px]",
  };
  return (
    <button
      className={`${colorClasses[as!]} ${
        sizeClasses[size!]
      } pl-6 pr-6 border-500 transform hover:scale-105 text-sm md:font-bold md:text-base`}
    >
      {children}
    </button>
  );
};

export default Button;
