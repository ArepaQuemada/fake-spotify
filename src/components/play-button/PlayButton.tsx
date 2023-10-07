import Image from "next/image";
import playButton from "@src/assets/play.svg";

const PlayButton = () => {
  return <Image src={playButton} alt="play button" width={55} height={55} />;
};

export default PlayButton;
