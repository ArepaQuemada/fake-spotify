import React from "react";

interface CardProps {
  name: string;
  description: string;
  img: string;
  children?: React.ReactNode;
}

const Card = ({ description, img, name, children }: CardProps) => {
  return (
    <div className="w-full max-w-[187px] min-h-[273px] max-h-[273px] bg-[#242424] opacity-80 border-soft transition-all hover:opacity-100 p-4 cursor-pointer ellipsis relative">
      <img src={img} alt={`card ${name}`} className="border-soft" />
      <h3 className="font-bold my-1">{name}</h3>
      <span className="text-xs whitespace-normal">{description}</span>
      {children}
    </div>
  );
};

export default Card;
