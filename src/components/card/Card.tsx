import React from "react";

interface CardProps {
  name: string;
  description: string;
  img: string;
  children?: React.ReactNode;
}

const Card = ({ description, img, name, children }: CardProps) => {
  return (
    <div className="w-full max-w-[145px] md:max-w-[187px] min-h-[167px] md:min-h-[273px] max-h-[273px] bg-[#242424] opacity-80 border-soft transition-all hover:opacity-100 p-1 md:p-4 cursor-pointer ellipsis relative">
      <div>
        <img src={img} alt={`card ${name}`} className="border-soft" />
      </div>
      <h3 className="font-bold my-1 text-sm md:text-base">{name}</h3>
      <span className="hidden text-xs whitespace-normal md:inline-block">
        {description}
      </span>
      {children}
    </div>
  );
};

export default Card;
