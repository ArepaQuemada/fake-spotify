"use client";

import { ComponentProps } from "react";
import Card from "../card/Card";
import PlayButton from "../play-button/PlayButton";
import "./card-play.css";

type Props = ComponentProps<typeof Card>;

const CardPlay = ({ children, ...rest }: Props) => {
  return (
    <div className="card-play--container">
      <Card {...rest}>
        <div className="play--container absolute right-5 bottom-1/4">
          <PlayButton />
        </div>
        {children}
      </Card>
    </div>
  );
};

export default CardPlay;
